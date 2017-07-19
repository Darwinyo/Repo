using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.UAMDB
{
    public partial class WorkFlow
    {
        public static List<WorkFlow> GetApprovalDPTFOOD()
        {
            List<WorkFlow> WorkList = new List<WorkFlow>();
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                WorkList = DBContext.WorkFlow.Where(x => x.ApprovalDptFood == false).Select(x => x).ToList();
            }
            return WorkList;
        }
        public static List<WorkFlow> GetApprovalDIVBUYER()
        {
            List<WorkFlow> WorkList = new List<WorkFlow>();
            using (var DBContext = new UAMDBEntities(GetEFCS.UAMDBCS))
            {
                WorkList = DBContext.WorkFlow.Where(x => x.ApprovalDptFood == true && x.ApprovalDivBuyer==false).Select(x => x).ToList();
            }
            return WorkList;
        }
    }
}
