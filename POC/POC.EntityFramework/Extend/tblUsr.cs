using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using POC.ViewModel;

namespace POC.EntityFramework
{
    public partial class tblUsr
    {
        public static string AuthenticateUser(User userLogin)
        {
            var userName = userLogin.UserName;
            var password = userLogin.Password;
            string Status;
            using (var DBContext = new POCEntities(ConnectionString.GetEFCS()))
            {
                Status = DBContext.sp_Authenticate(userName, password).SingleOrDefault();
            }
            return Status;
        }
        public static bool ValidateUserName(string username)
        {
            bool isExist = false;
            using (var DBContext = new POCEntities(ConnectionString.GetEFCS()))
            {
                var result = from x in DBContext.tblUsr
                             where x.usrName == username
                             select x;
                if (result != null)
                {
                    isExist = true;
                }
            }
            return isExist;
        }
        public static string GetUserType(string username)
        {
            string UserType = string.Empty;
            using (var DBContext = new POCEntities(ConnectionString.GetEFCS()))
            {
                var result = from x in DBContext.tblUsr
                             where x.usrName == username
                             select x.usrType;
                UserType = result.ToString();
            }
            return UserType;
        }
    }
}
