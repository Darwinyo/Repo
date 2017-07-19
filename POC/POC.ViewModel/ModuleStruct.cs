using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.ViewModel
{
    public class ModuleStruct
    {
        public int id { get; set; }
        public string label { get; set; }
        public string name { get; set; }
        public string AppStructType { get; set; }
        public string expandedIcon { get; set; }
        public string collapsedIcon { get; set; }
        public string AppValues { get; set; }
        public int? ParentApp { get; set; }
        public int MenuLevel { get; set; }
        public List<ModuleStruct> children { get; set; }
    }
}
