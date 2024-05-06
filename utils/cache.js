class MyCache {
  constructor(isLocal) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  getCache(key) {
    const value = this.storage.getItem(key);
    if (value) return JSON.parse(value);
  }

  setCache(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  deleteCache(key) {
    this.storage.removeItem(key);
  }

  clearCache() {
    this.storage.clear();
  }
}

const localCache = new MyCache(true);
const sessionCache = new MyCache(false);

export { localCache, sessionCache };
