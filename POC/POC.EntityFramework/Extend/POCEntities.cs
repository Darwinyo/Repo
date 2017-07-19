using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace POC.EntityFramework
{
    public partial class POCEntities
    {
        public POCEntities(string efCS)
            : base(efCS)
        {
        }
        
    }
}
