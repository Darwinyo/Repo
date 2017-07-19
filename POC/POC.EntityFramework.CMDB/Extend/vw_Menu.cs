using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using POC.Configuration;

namespace POC.EntityFramework.CMDB
{
    public partial class vw_Menu
    {
        public static List<vw_Menu> GetERPModule()
        {
            List<vw_Menu> MenuList = new List<vw_Menu>();
            using (var DBContext = new CMDBEntities(GetEFCS.CMDBCS))
            {
                var result = from x in DBContext.vw_Menu
                             where x.appStructTyp == "Group" | x.appStructTyp == "Application" | x.appStructTyp == "Menu"
                             select x;
                MenuList = result.ToList();
            }
            return MenuList;
        }
        public static string GetMenuURL(int AppId)
        {
            string result;
            using (var DBContext = new CMDBEntities(GetEFCS.CMDBCS))
            {
                result = DBContext.vw_Menu.Where(x => x.appId == AppId).Select(x => x.appStructVal).SingleOrDefault();
            }
            return result;
        }
    }
}
