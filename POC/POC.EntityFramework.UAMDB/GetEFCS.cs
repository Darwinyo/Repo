using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.UAMDB
{
    public class GetEFCS
    {
        public static string UAMDBCS
        {
            get
            {
                return Configuration.Configuration.GetEFConStr("UAMDBEntities");
            }
        }
    }
}
