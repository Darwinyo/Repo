using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using POC.EntityFramework.EMDB;

namespace POC.BusinessLogic
{
    public class EventLogic
    {
        public static bool InsertEvent(string EventType,string Event,string CfgItm,string UserName,string AccGrp)
        {
            int Id = tblEventTyp.GetEventTypeId()+1;
            tblEvent EventObj = new tblEvent() { @event = Event, eventTypeId = Id, eventId = Id, cfgItmId = CfgItm, userName = UserName, accGrpId = AccGrp };
            tblEventTyp EventObjType = new tblEventTyp() { eventType = EventType, eventTypeId = Id };

            bool IsInsertEventSuccess= tblEvent.InsertEvent(EventObj);
            bool IsInsertEventTypeSuccess = tblEventTyp.InsertEventType(EventObjType);

            if(IsInsertEventSuccess==true&& IsInsertEventTypeSuccess == true)
            {
                return true;
            }
            return false;
        }
    }
}
