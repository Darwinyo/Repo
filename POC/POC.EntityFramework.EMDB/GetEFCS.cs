using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.EMDB
{
    public class GetEFCS
    {
        public static string EMDBCS { get { return Configuration.Configuration.GetEFConStr("EMDBEntities"); } }
    }
}
