using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using POC.BusinessLogic;
using POC.EntityFramework.CMDB;
using POC.EntityFramework.UAMDB;
using POC.ViewModel;
using System.Web.Http.Cors;

namespace POC.API.Module.Controllers.API
{
    
    public class APIModuleController : ApiController
    {
        // GET: APIModule
        [HttpGet]
        public List<ModuleStruct> GetERPModule()
        {
            return AccessModuleLogic.GetERPModule();
        }
        [HttpPost]
        public List<ModuleStruct> ModuleAccess()
        {
            return AccessModuleLogic.GetERPModule();
        }
        [HttpPost]
        public string CheckAccessMenu([FromBody] object value)
        {
            MenuAuth menu = AccessModuleLogic.ConvertToMenuAuth(value);

            int grpId = AccessModuleLogic.GetGroupId(menu.GroupName);

            return AccessModuleLogic.ValidateModuleAccess(grpId, menu.AppId);
        }
        [HttpPost]
        public List<sp_GetAppComponents_Result> GetComponents([FromBody] object value)
        {
            ComponentAuth menu = AccessModuleLogic.ConvertToComponentAuth(value);

            return AccessModuleLogic.GetComponentsAccess(menu.GroupName, menu.ParentId);
        }
        [HttpPost]
        public List<sp_WorkFlow_Result> GetFilter([FromBody] object value)
        {
            ComponentAuth menu = AccessModuleLogic.ConvertToComponentAuth(value);

            int GrpId = AccessModuleLogic.GetGroupId(menu.GroupName);

            return AccessModuleLogic.GetDataFilter(menu.ParentId, GrpId);
        }
        [HttpPost]
        public string GetURLMenu([FromBody] int AppId)
        {
            return AccessModuleLogic.GetURLModule(AppId);
        }
        [HttpGet]
        public List<WorkFlow> GetWorkFlowDPTFOOD()
        {
            return AccessModuleLogic.GetWorkFlowDPTFOOD();
        }
        [HttpGet]
        public List<WorkFlow> GetWorkFlowDIVBUYER()
        {
            return AccessModuleLogic.GetWorkFlowDIVBUYER();
        }
    }
}