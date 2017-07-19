using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace POC.Configuration
{
    public class Configuration
    {
        public static string GetEFConStr(string conName)
        {
            return ConfigurationManager.ConnectionStrings[conName].ConnectionString;
        }
    }
}
