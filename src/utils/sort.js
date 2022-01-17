export const sortByName = (projects, descending) => {
  projects.sort((a, b) => {
    let res = 0;
    if (a.name > b.name) res = 1;
    if (b.name > a.name) res = -1;
    if (descending) return -res;
    return res;
  })
  return projects;
}

export const sortByDate = (projects, descending) => {
  projects.sort((a, b) => {
    let res = a.year - b.year;
    if (res === 0) res = a.month - b.month;
    if (descending) return -res;
    return res;
  })
  return projects;
}

export const sortByComplexity = (projects, descending) => {
  projects.sort((a, b) => {
    let res = a.id - b.id;
    if (descending) return -res;
    return res;
  })
  return projects;
}