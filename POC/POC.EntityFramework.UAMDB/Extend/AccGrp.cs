using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.UAMDB
{
    public partial class AccGrp
    {
        public static string GetUserGroup(int usrGrpId)
        {
            string GroupName;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                var result = from x in DBContext.AccGrp
                             where x.usrGrpId == usrGrpId
                             select x.usrGrp;
                GroupName = result.SingleOrDefault();
            }
            return GroupName;
        }
        public static int GetGroupId(string GrpName)
        {
            int GrpId;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                GrpId = DBContext.AccGrp.Where(x => x.usrGrp == GrpName).Select(x => x.usrGrpId).SingleOrDefault();
            }
            return GrpId;
        }
        public static List<sp_GetAppComponents_Result> GetMenuAccess(string usrGrp, int parentApp)
        {
            List<sp_GetAppComponents_Result> res = null;
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                var result = DBContext.sp_GetAppComponents(usrGrp, parentApp);
                res = result.ToList();
            }
            return res;
        }
    }
}
