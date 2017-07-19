using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.EMDB
{
    public partial class tblEvent
    {
        public static bool InsertEvent(tblEvent value)
        {
            try
            {
                using (var DBContext = new EMDBEntities(GetEFCS.EMDBCS))
                {
                    DBContext.tblEvent.Add(value);
                    DBContext.SaveChanges();
                }
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}
