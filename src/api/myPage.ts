import instance from "./instance/instance";

const getUserData = async() => {
    const response = await instance.get('/api/mypage');
    return response.data;
  };

const editUserName = async({userName}: {userName: string}) => {
    const response = await instance.patch('/api/mypage/name', {userName});
    return response.data;
};

const editUserJob = async({userJob}: {userJob: string}) => {
  const response = await instance.patch('/api/mypage/job', {userJob});
  return response.data;
}

const editUserDesc = async({userDesc}: {userDesc: string}) => {
  const response = await instance.patch('/api/mypage/desc', {userDesc});
  console.log(response)
  return response.data;
}

const getWorkspaces = async() => {
  const response = await instance.get('/api/mypage/workspaces');
  return response.data;
};

const editProfileImg = async (userImage: FormData) => {
  await instance.post('/api/mypage/image', userImage, 
    {
      headers: {"Content-Type": "multipart/form-data"},
    }
  );
};

const leaveWorkspace = async ({myWorkspaceId} : {myWorkspaceId: number}) => {
  await instance.patch(`/api/mypage/${myWorkspaceId}`);
};

const acceptInvite = async (workspaceId: number) => {
  await instance.post(`/api/mypage/${workspaceId}/invite`);
};

const rejectInvite = async (workspaceId: number) => {
  await instance.delete(`/api/mypage/${workspaceId}/reject`);
};

export { getUserData, editUserName, editUserJob, editUserDesc, getWorkspaces, editProfileImg, leaveWorkspace, acceptInvite, rejectInvite };