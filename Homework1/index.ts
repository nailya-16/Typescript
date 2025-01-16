import usersArray from './users'; 
import usersInfoArray from './userInfo'; 

interface User {
    userid: string;
    name: string;
    gender: string;
}

interface UserInfo {
    userid: string;
    name: string;
    birthdate: string;
    age: number;
    organization: {
        name: string;
        position: string;
    };
}

interface UserPosition {
    name: string;
    position: string | null;
    age: number | null;
    gender: string;
}

function getUsersJobPositions(usersArray: User[]): UserPosition[] {
    return usersArray.map((user: User) => {
        const userInfo: UserInfo | undefined = usersInfoArray.find(info => info.userid === user.userid);
        return {
            name: userInfo ? userInfo.name : user.name,
            position: userInfo ? userInfo.organization.position : null,
            age: userInfo ? userInfo.age : null,
            gender: user.gender
        };
    });
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);
