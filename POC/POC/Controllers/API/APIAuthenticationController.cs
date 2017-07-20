using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using POC.ViewModel;
using POC.BusinessLogic;

namespace POC.Controllers.API
{
    public class APIAuthenticationController : ApiController
    {
        [HttpPost]
        [ActionName("AuthorizeUser")]
        public UserState AuthorizeUser([FromBody] object value)
        {
            UserState state = new UserState();
            User user = AuthenticateUserLogic.ConvertToUser(value);
            bool IsUserExists = AuthenticateUserLogic.ValidateUserName(user.UserName);
            if (!IsUserExists)
            {
                state.UserLoginState = "USER_NOT_EXIST";
                return state;
            }
            string UserType = AuthenticateUserLogic.GetUserType(user.UserName);
            if (UserType == "AD")
            {
                return AuthenticateUserLogic.GetUserStateAD(user, state);
            }
            else
            {
                return AuthenticateUserLogic.GetUserStateNonAD(user, state);
            }
        }
        [HttpPost]
        public bool SessionAuth([FromBody] object value)
        {
            return AuthenticateUserLogic.SessionAuth(value);
        }

    }
}