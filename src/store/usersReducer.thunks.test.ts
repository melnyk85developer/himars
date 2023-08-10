import { actions, follow, unfollow } from "./usersReducer";
import { usersAPI } from "../services/usersApi";
import { APIResponseType, ResultCodesEnum } from "../services/api";

jest.mock('../services/usersApi')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const dispatchMok = jest.fn();
const getStateMok = jest.fn();

beforeEach(() => {
    dispatchMok.mockClear();
    getStateMok.mockClear();
    userAPIMock.follow.mockClear();
    userAPIMock.unfollow.mockClear();
})

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

userAPIMock.follow.mockReturnValue(Promise.resolve(result));
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
    const thunk = follow(1);
    const dispatchMok = jest.fn();
    const getStateMok = jest.fn();
    await thunk(dispatchMok, getStateMok, {});
    expect(dispatchMok).toBeCalledTimes(3);
    expect(dispatchMok).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMok).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMok).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
});
test('success unfollow thunk', async () => {
    const thunk = unfollow(1);
    await thunk(dispatchMok, getStateMok, {});
    expect(dispatchMok).toBeCalledTimes(3);
    expect(dispatchMok).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMok).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMok).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
});