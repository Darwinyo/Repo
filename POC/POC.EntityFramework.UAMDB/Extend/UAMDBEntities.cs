using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace POC.EntityFramework.UAMDB
{
    public partial class UAMDBEntities
    {
        public UAMDBEntities(string efCS)
            : base(efCS)
        {
        }
        
    }
}
