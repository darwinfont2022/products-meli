export interface IDtoReq<in I, out T> {
    toEntity(): T;
}