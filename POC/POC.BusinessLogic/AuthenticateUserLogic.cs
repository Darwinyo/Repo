using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.DirectoryServices;

using Newtonsoft.Json.Linq;

using POC.ViewModel;
using POC.EntityFramework.UAMDB;

namespace POC.BusinessLogic
{
    public class AuthenticateUserLogic
    {
        public static User ConvertToUser(object value)
        {
            JObject jsonObject = (JObject)value;
            User user = new User() { UserName = jsonObject["userName"].ToString(), Password = jsonObject["password"].ToString() };
            return user;
        }
        public static string ValidateLoginLocal(User user)
        {
            return tblUsr.AuthenticateUser(user);
        }
        public static int GetUserGroupId(string username)
        {
            return tblUsr.GetUserGroupId(username);
        }
        public static UserState CreateUserState(UserState state,string username,string groupname,string loginState)
        {
            state.UserName = username;
            state.GroupName = groupname;
            state.UserLoginState = loginState;
            state.TokenId = CreateToken();
            AuthAudit.InsertAuth(state);
            return state;
        }
        public static string CreateToken()
        {
            string token = Guid.NewGuid().ToString();
            return token;
        }
        public static UserState GetUserStateAD(User user,UserState state)
        {
            string LDAPStr = tblUsr.GetLDAP(user.UserName);
            string UserState = ValidateAD(LDAPStr, user.UserName, user.Password);

            if (UserState == "AUTHORIZED")
            {
                string Grp = GetUserGroupByName(user.UserName);
                EventLogic.InsertEvent("Information", "LDAP Login Success", "APP", user.UserName, Grp);
                return CreateUserState(state, user.UserName, Grp, UserState);
            }
            return CreateUserState(state, string.Empty, string.Empty, UserState);
        }
        public static UserState GetUserStateNonAD(User user, UserState state)
        {
            string UserState = ValidateLoginLocal(user);

            if (UserState == "AUTHORIZED")
            {
                string Grp = GetUserGroupByName(user.UserName);
                EventLogic.InsertEvent("Information", "Non LDAP Login Success", "APP", user.UserName, Grp);
                return CreateUserState(state, user.UserName, Grp, UserState);
            }
            return CreateUserState(state, string.Empty, string.Empty, UserState);
            
        }
        public static string ValidateAD(string LDAP,string userName,string password)
        {
            string authenticated = "NOT_AUTHORIZED";
            try
            {
                DirectoryEntry entry = new DirectoryEntry(LDAP, userName, password);
                object nativeObject = entry.NativeObject;
                authenticated = "AUTHORIZED";
            }
            catch
            {
                authenticated = "NOT_AUTHORIZED";
            }
            return authenticated;
        }
        public static string GetUserGroupByName(string username)
        {
            return GetUserGroup(GetUserGroupId(username));
        }
        public static bool ValidateUserName(string username)
        {
            return tblUsr.ValidateUserName(username);
        }
        public static string GetUserType(string username)
        {
            return tblUsr.GetUserType(username);
        }
        public static string GetUserGroup(int usrGrpId)
        {
            return AccGrp.GetUserGroup(usrGrpId);
        }
        public static bool SessionAuth(object value)
        {
            JObject obj = (JObject)value;
            Guid tokenId = Guid.Empty;
            if (!Guid.TryParse(obj["TokenId"].ToString(),out tokenId))
            {
                return false;
            }
            if (AuthAudit.GetAuth(tokenId) != null)
            {
                return true;
            }
            return false;
        }
    }
}
