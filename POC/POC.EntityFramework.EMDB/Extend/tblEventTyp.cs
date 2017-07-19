using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POC.EntityFramework.EMDB
{
    public partial class tblEventTyp
    {
        public static bool InsertEventType(tblEventTyp value)
        {
            try
            {
                using (var DBContext=new EMDBEntities(GetEFCS.EMDBCS))
                {
                    DBContext.tblEventTyp.Add(value);
                    DBContext.SaveChanges();
                }
            }
            catch
            {
                return false;
            }
            return true;
        }

        public static int GetEventTypeId()
        {
            using(var DBContext=new EMDBEntities(GetEFCS.EMDBCS))
            {
                return DBContext.tblEventTyp.Max(x=>x.eventTypeId);
            }
        }
    }
}
