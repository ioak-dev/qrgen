export function sessionSet(domainId: string, key: string, value: string) {
  console.log(domainId);
  const sessionData = sessionStorage.getItem(domainId);
  let dataContainer: any = {};
  if (sessionData) {
    dataContainer = JSON.parse(sessionData);
  }
  if (key) {
    dataContainer[key] = value;
  } else {
    dataContainer = value;
  }
  sessionStorage.setItem(domainId, JSON.stringify(dataContainer));
}

export function sessionGet(domainId: string, key: string) {
  const sessionData = sessionStorage.getItem(domainId);
  if (!sessionData) {
    return sessionData;
  } else {
    const dataContainer = JSON.parse(sessionData);
    if (key) {
      return dataContainer[key];
    } else {
      return dataContainer;
    }
  }
}

export function sessionHas(domainId: string, key: string) {
  const sessionData = sessionStorage.getItem(domainId);
  if (!sessionData) {
    return false;
  } else if (!key) {
    return true;
  } else if (JSON.parse(sessionData)[key]) {
    return true;
  } else {
    return false;
  }
}
