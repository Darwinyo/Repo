//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace POC.EntityFramework.UAMDB
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblUsr
    {
        public string usrName { get; set; }
        public string usrEmail { get; set; }
        public string empId { get; set; }
        public string usrType { get; set; }
        public string usrPwd { get; set; }
        public Nullable<bool> isLocked { get; set; }
        public Nullable<int> usrGrpId { get; set; }
        public string ADPath { get; set; }
    
        public virtual AccGrp AccGrp { get; set; }
    }
}
