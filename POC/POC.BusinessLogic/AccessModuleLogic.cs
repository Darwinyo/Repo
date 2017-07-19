using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using POC.EntityFramework.UAMDB;
using POC.EntityFramework.CMDB;
using POC.ViewModel;
using Newtonsoft.Json.Linq;

namespace POC.BusinessLogic
{
    public class AccessModuleLogic
    {
        public static List<ModuleStruct> GetERPModule()
        {
            List<ModuleStruct> ListAppModule = new List<ModuleStruct>();
            List<vw_Menu> listMenu = vw_Menu.GetERPModule();
            List<int[]> lstParentMenu = new List<int[]>();
            lstParentMenu = GetListParentMenu(listMenu);
            foreach (vw_Menu item in listMenu)
            {
                ModuleStruct Module = new ModuleStruct();
                Module.id = item.appId.GetValueOrDefault(0);
                Module.name = item.appStructTypId.Substring(0, item.appStructTypId.IndexOf(" -"));
                Module.AppStructType = item.appStructTyp;
                Module.AppValues = item.appStructVal;
                Module.ParentApp = item.parentAppStructId;
                Module.label = Module.name;
                Module.MenuLevel = GetMenuLevel(item.parentAppStructId.GetValueOrDefault(0), lstParentMenu);
                Module.children = new List<ModuleStruct>();
                ListAppModule.Add(Module);
            }
            //return OrderingList(ListAppModule);
            return JsonResult(ListAppModule);
        }
        public static List<ModuleStruct> JsonResult(List<ModuleStruct> moduleList)
        {
            List<ModuleStruct> ListModule = moduleList;
            List<ModuleStruct> Store;
            int maxLevelDepth = moduleList.Max(x => x.MenuLevel);

            for (int x = maxLevelDepth; x > 0; x--)
            {
                Store = new List<ModuleStruct>();
                foreach (var item in moduleList)
                {
                    if (item.MenuLevel == x)
                    {
                        ModuleStruct module = new ModuleStruct();
                        module.id = item.id;
                        module.name = item.name;
                        module.label = item.name;
                        module.children = item.children;
                        module.ParentApp = item.ParentApp;
                        module.MenuLevel = item.MenuLevel;
                        module.AppValues = item.AppValues;
                        module.AppStructType = item.AppStructType;
                        ListModule.Find(y => y.id == item.ParentApp).children.Add(module);
                        Store.Add(item);
                    }
                }
                foreach (var item in Store)
                {
                    ListModule.Remove(item);
                }
            }
            return ListModule;
        }
        public static List<ModuleStruct> OrderingList(List<ModuleStruct> moduleList)
        {
            List<ModuleStruct> ol = new List<ModuleStruct>();
            List<ModuleStruct> ul = new List<ModuleStruct>();
            ul = moduleList.OrderBy(x => x.name).ToList();
            List<ModuleStruct> Store = new List<ModuleStruct>();
            int maxLvlDepth = moduleList.Max(x => x.MenuLevel);
            while (ul.Count != 0)
            {
                foreach (ModuleStruct item in ul)
                {
                    if (item.MenuLevel == 0)
                    {
                        ol.Add(item);
                        Store.Add(item);
                    }
                }
                foreach (var item in Store)
                {
                    ul.Remove(item);
                }

                for (int x = 1; x <= maxLvlDepth; x++)
                {
                    Store = new List<ModuleStruct>();
                    foreach (ModuleStruct item in ul)
                    {
                        if (item.MenuLevel == x)
                        {
                            ol.Insert(ol.FindIndex(y => y.id == item.ParentApp) + 1, item);
                            Store.Add(item);
                        }
                    }
                    foreach (var item in Store)
                    {
                        ul.Remove(item);
                    }
                }
            }
            return ol;
        }
        public static List<int[]> GetListParentMenu(List<vw_Menu> lstMenu)
        {
            List<int[]> lstParentMenu = new List<int[]>();
            foreach (var item in lstMenu)
            {
                int[] parentMenu = { item.appId.GetValueOrDefault(0), item.parentAppStructId.GetValueOrDefault(0) };
                lstParentMenu.Add(parentMenu);
            }
            return lstParentMenu;
        }
        public static int GetMenuLevel(int ParentMenu, List<int[]> lstMenuParent)
        {
            int currLvl = 0;
            if (ParentMenu == 0)
            {
                return 0;
            }
            while (ParentMenu != 0)
            {
                foreach (var item in lstMenuParent)
                {
                    if (ParentMenu == item[0])
                    {
                        currLvl++;
                        ParentMenu = item[1];
                    }
                }
            }
            return currLvl;
        }
        public static string GetMenuPageAddress(int AppId)
        {
            return vw_Menu.GetMenuURL(AppId);
        }
        public static MenuAuth ConvertToMenuAuth(object value)
        {
            MenuAuth menu = new MenuAuth();
            JObject jsonobj = (JObject)value;
            menu.AppId = (int)jsonobj["AppId"];
            menu.GroupName = jsonobj["GroupName"].ToString();
            return menu;
        }
        public static string GetURLModule(int AppId)
        {
            return vw_Menu.GetMenuURL(AppId);
        }
        public static ComponentAuth ConvertToComponentAuth(object value)
        {
            ComponentAuth menu = new ComponentAuth();
            JObject jsonobj = (JObject)value;
            menu.ParentId = (int)jsonobj["ParentId"];
            menu.GroupName = jsonobj["GroupName"].ToString();
            return menu;
        }
        public static string ValidateModuleAccess(int GrpId,int AppId)
        {
            bool result = AccessModule.ValidateAccessMenu(GrpId, AppId);
            if (result)
            {
                return "PERMITTED";
            }
            return "NOT_PERMITTED";
        }
        public static List<sp_GetAppComponents_Result> GetComponentsAccess (string AccGrpName,int ParentAppId)
        {
            return AccGrp.GetMenuAccess(AccGrpName, ParentAppId);
        }
        public static List<sp_WorkFlow_Result> GetDataFilter(int ParentAppId,int GrpId)
        {
            return sp_WorkFlow_Result.GetDataFilter(ParentAppId, GrpId);
        }
        public static int GetGroupId(string GroupName)
        {
            return AccGrp.GetGroupId(GroupName);
        }
        public static List<WorkFlow> GetWorkFlowDPTFOOD()
        {
            return WorkFlow.GetApprovalDPTFOOD();
        }
        public static List<WorkFlow> GetWorkFlowDIVBUYER()
        {
            return WorkFlow.GetApprovalDIVBUYER();
        }
    }
}
