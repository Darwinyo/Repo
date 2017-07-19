using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using POC.Configuration;
using POC.ViewModel;

namespace POC.EntityFramework.UAMDB
{
    public partial class tblUsr
    {
        public static string AuthenticateUser(User userLogin)
        {
            var userName = userLogin.UserName;
            var password = userLogin.Password;
            string Status = string.Empty;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                Status = DBContext.sp_Authenticate(userName, password).SingleOrDefault();
            }
            return Status;
        }
        public static int GetUserGroupId(string username)
        {
            int? grpId;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                var result = from x in DBContext.tblUsr
                             where x.usrName == username
                             select x.usrGrpId;
                grpId = result.SingleOrDefault();
            }
            return grpId.GetValueOrDefault(0);
        }
        public static bool ValidateUserName(string username)
        {
            bool isExist = false;
            string usrName = string.Empty;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                var result = from x in DBContext.tblUsr
                             where x.usrName == username
                             select x.usrName;
                usrName = result.SingleOrDefault();
            }

            if (usrName != string.Empty)
            {
                isExist = true;
            }
            return isExist;
        }
        public static string GetLDAP(string username)
        {
            string result = string.Empty;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                result = DBContext.tblUsr.Where(x => x.usrName == username).Select(x => x.ADPath).FirstOrDefault();
            }
            return result;
        }
        public static string GetUserType(string username)
        {
            string UserType = string.Empty;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                var result = from x in DBContext.tblUsr
                             where x.usrName == username
                             select x.usrType;
                UserType = result.SingleOrDefault();
            }
            return UserType;
        }
    }
}
