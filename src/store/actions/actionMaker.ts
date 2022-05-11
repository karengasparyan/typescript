export default function actionMaker(type: string, payload: object, cb?: (arg: any) => any){
  return {
    type,
    payload,
    cb
  };
}
