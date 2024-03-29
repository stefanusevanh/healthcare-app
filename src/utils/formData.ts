export function formData(object: Object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) =>
    formData.append(key, object[key as keyof object])
  );

  return formData;
}
