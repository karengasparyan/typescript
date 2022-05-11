export default function actionMaker(type: string, payload: object, cb: (arg: any) => any){
  console.log('maker',type, payload, cb)
  return {
    type,
    payload,
    cb
  };
}
