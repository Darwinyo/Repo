using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.ViewModel
{
    public class Menu
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<Menu> children { get; set; }
    }
}
