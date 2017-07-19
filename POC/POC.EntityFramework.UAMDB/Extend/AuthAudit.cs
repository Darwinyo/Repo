using POC.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.UAMDB
{
    public partial class AuthAudit
    {
        public static AuthAudit GetAuth(Guid TokenId)
        {
            AuthAudit obj = null;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                obj = DBContext.AuthAudit.Where(x => x.TokenId == TokenId.ToString()).Select(x => x).FirstOrDefault();
            }
            TimeSpan ts= TimeSpan.FromMinutes(5);
            TimeSpan ts1 = DateTime.Now.Subtract(obj.LastLogin.Value);
            if (ts1 > ts)
            {
                return null;
            }
            else
            {
                UpdateExistingAuth(TokenId);
                return obj;
            }
        }
        public static void InsertAuth(UserState userstate)
        {
            AuthAudit obj = new AuthAudit();
            obj.TokenId = userstate.TokenId;
            obj.UserName = userstate.UserName;
            obj.LastLogin = DateTime.Now;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                DBContext.AuthAudit.Add(obj);
                DBContext.SaveChanges();
            }
        }
        public static void UpdateExistingAuth(Guid tokenId)
        {
            AuthAudit obj = new AuthAudit();
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                obj= DBContext.AuthAudit.Where(x => x.TokenId == tokenId.ToString()).FirstOrDefault();
            }
            obj.LastLogin = DateTime.Now;
            using(var DBContext=new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                DBContext.Entry(obj).State = System.Data.Entity.EntityState.Modified;
                DBContext.SaveChanges();
            }
        }
    }
}
