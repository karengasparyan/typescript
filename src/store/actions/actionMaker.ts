export default function actionMaker(type: any, payload: any, cb: (arg: any) => void){
  console.log('maker',type, payload, cb)
  return {
    type,
    payload,
    cb
  };
}
