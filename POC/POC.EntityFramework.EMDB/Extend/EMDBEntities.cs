using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.EMDB
{
    public partial class EMDBEntities
    {
        public EMDBEntities(string EFCS)
            : base(EFCS)
        {
        }
    }
}
