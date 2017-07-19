using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace POC.EntityFramework
{
    public static class ConnectionString
    {
        public static string GetEFCS()
        {
            return ConfigurationManager.ConnectionStrings["POCEntities"].ConnectionString;
        }
    }
}
