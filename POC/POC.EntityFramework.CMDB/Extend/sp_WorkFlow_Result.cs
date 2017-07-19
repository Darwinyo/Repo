using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.CMDB
{
    public partial class sp_WorkFlow_Result
    {
        public static List<sp_WorkFlow_Result> GetDataFilter(int ParentId,int GrpId)
        {
            List<sp_WorkFlow_Result> result = new List<sp_WorkFlow_Result>();
            using(var DBContext=new CMDBEntities(GetEFCS.CMDBCS))
            {
                result = DBContext.sp_WorkFlow(ParentId, GrpId).ToList();
            }
            return result;
        }
    }
}
