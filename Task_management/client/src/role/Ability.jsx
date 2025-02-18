import React from 'react';
import { getUserDetails } from '../userDetails';
const Ability = (roles = []) => {
    let role = getUserDetails()?.roles;
    if (roles.includes(role)) {
        return true;
    }
    else {
        return false;
    }


}
export default Ability