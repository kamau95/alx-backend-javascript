export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((load) => load)
    .catch((error) => {
      console.log(error);
    });
}
