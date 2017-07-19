using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.CMDB
{
    public partial class CMDBEntities
    {
        public CMDBEntities(string conStr)
            : base(conStr)
        {
        }
    }
}
