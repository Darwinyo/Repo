using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.CMDB
{
    public class GetEFCS
    {
        public static string CMDBCS { get { return Configuration.Configuration.GetEFConStr("CMDBEntities"); } }
    }
}
