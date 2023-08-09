import { follow } from "./usersReducer";
import { usersAPI } from "../services/usersApi";
import { APIResponseType, ResultCodesEnum } from "../services/api";

jest.mock('../services/usersApi')
const userAPIMock = usersAPI;

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}
// @ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(result));

test('', async () => {
    const thunk = follow(1);
    const dispatchMok = jest.fn();
    
    // @ts-ignore
    await thunk(dispatchMok);

    expect(dispatchMok).toBeCalledTimes(3);
})