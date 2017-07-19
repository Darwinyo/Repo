using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.UAMDB
{
    public partial class AccessModule
    {
        public static bool ValidateAccessMenu(int grpId,int AppId)
        {
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                var y = DBContext.AccessModule.Where(x => x.GrpId == grpId && x.appId == AppId).SingleOrDefault();
                if(y!=null)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
