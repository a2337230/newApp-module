import ajax from './ajax'
// const BASE_URL = 'https://www2.xlxt.net'
const BASE_URL = ''
// ------------------------------------------------------------------------
// 登录
// export const getUser = () => ajax(BASE_URL + '/View/GetUserJson')
export const getUser = () => ajax(BASE_URL + '/Enterprise/GetAppEnterpriseInfo')
// 获取文章列表
export const GetArticle = () => ajax(BASE_URL + '/Article/GetArticleShow?Keyword=&ClassifyID=34&Pagesize=20&Pageindex=1')
// 获取文章详情
export const GetArticleInfo = (params) => ajax(BASE_URL + '/Article/GetArticleByID', params)
// 文章点赞
export const GetArticleLike = (params) => ajax(BASE_URL + '/Article/AddArticleLike', params)
// 获取评价
export const GetReviewFront = (params) => ajax(BASE_URL + '/Review/GetArticleReviewFront', params)
// 文章添加评价
export const AddReview = (params) => ajax(BASE_URL + '/Review/AddArticleReview', params)
// 文章评价回复
export const AddReviewReply = (params) => ajax(BASE_URL + '/Review/AddArticleReviewReply', params)
// 文章评论点赞
export const AddReviewLike = (params) => ajax(BASE_URL + '/Review/AddArticleReviewLike', params)
// 图片上传---获得上传凭证
export const UploadVideo = (params) => ajax(BASE_URL + '/AliyunVideo/CreateUploadVideo', params)
// 视频播放
export const VideoPlay = (params) => ajax(BASE_URL + '/Course/GetPlayAuthByVideoID', params)
// 添加视频
export const AddVideo = (params) => ajax(BASE_URL + '/Video/AddVideo', params)
// 获取视频列表
export const GetVideos = (params) => ajax(BASE_URL + '/Video/GetVideos', params)
// 获取视频详情
export const GetVideo = (params) => ajax(BASE_URL + '/Video/GetVideo', params)
// 视频点赞
export const VideoLikeNum = (params) => ajax(BASE_URL + '/LikeNum/AddVideoLikeNum', params)
// 添加视频评论
export const VideoComments = (params) => ajax(BASE_URL + '/Comments/AddVideoComments', params)
// 获取评论列表
export const GetVideoComments = (params) => ajax(BASE_URL + '/Comments/GetVideoComments', params)
// 视频热度
export const VideoHits = (params) => ajax(BASE_URL + '/Video/AddVideoHits', params)