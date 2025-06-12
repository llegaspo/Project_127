
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model FacebookPost
 * 
 */
export type FacebookPost = $Result.DefaultSelection<Prisma.$FacebookPostPayload>
/**
 * Model ToDo
 * 
 */
export type ToDo = $Result.DefaultSelection<Prisma.$ToDoPayload>
/**
 * Model FBPage
 * 
 */
export type FBPage = $Result.DefaultSelection<Prisma.$FBPagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnnouncementSource: {
  FACEBOOK: 'FACEBOOK',
  CUSTOM: 'CUSTOM'
};

export type AnnouncementSource = (typeof AnnouncementSource)[keyof typeof AnnouncementSource]


export const StatusType: {
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
  PENDING: 'PENDING'
};

export type StatusType = (typeof StatusType)[keyof typeof StatusType]


export const PriorityType: {
  URGENT: 'URGENT',
  IMPORTANT: 'IMPORTANT',
  LATER: 'LATER'
};

export type PriorityType = (typeof PriorityType)[keyof typeof PriorityType]


export const PageType: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  COLLEGE: 'COLLEGE',
  ACADEMIC: 'ACADEMIC',
  INTEREST: 'INTEREST',
  MASS: 'MASS'
};

export type PageType = (typeof PageType)[keyof typeof PageType]

}

export type AnnouncementSource = $Enums.AnnouncementSource

export const AnnouncementSource: typeof $Enums.AnnouncementSource

export type StatusType = $Enums.StatusType

export const StatusType: typeof $Enums.StatusType

export type PriorityType = $Enums.PriorityType

export const PriorityType: typeof $Enums.PriorityType

export type PageType = $Enums.PageType

export const PageType: typeof $Enums.PageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookPost`: Exposes CRUD operations for the **FacebookPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookPosts
    * const facebookPosts = await prisma.facebookPost.findMany()
    * ```
    */
  get facebookPost(): Prisma.FacebookPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toDo`: Exposes CRUD operations for the **ToDo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToDos
    * const toDos = await prisma.toDo.findMany()
    * ```
    */
  get toDo(): Prisma.ToDoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fBPage`: Exposes CRUD operations for the **FBPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FBPages
    * const fBPages = await prisma.fBPage.findMany()
    * ```
    */
  get fBPage(): Prisma.FBPageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Announcement: 'Announcement',
    FacebookPost: 'FacebookPost',
    ToDo: 'ToDo',
    FBPage: 'FBPage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "announcement" | "facebookPost" | "toDo" | "fBPage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      FacebookPost: {
        payload: Prisma.$FacebookPostPayload<ExtArgs>
        fields: Prisma.FacebookPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>
          }
          findFirst: {
            args: Prisma.FacebookPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>
          }
          findMany: {
            args: Prisma.FacebookPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>[]
          }
          create: {
            args: Prisma.FacebookPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>
          }
          createMany: {
            args: Prisma.FacebookPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>[]
          }
          delete: {
            args: Prisma.FacebookPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>
          }
          update: {
            args: Prisma.FacebookPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>
          }
          deleteMany: {
            args: Prisma.FacebookPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>[]
          }
          upsert: {
            args: Prisma.FacebookPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookPostPayload>
          }
          aggregate: {
            args: Prisma.FacebookPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookPost>
          }
          groupBy: {
            args: Prisma.FacebookPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookPostCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookPostCountAggregateOutputType> | number
          }
        }
      }
      ToDo: {
        payload: Prisma.$ToDoPayload<ExtArgs>
        fields: Prisma.ToDoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToDoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToDoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          findFirst: {
            args: Prisma.ToDoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToDoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          findMany: {
            args: Prisma.ToDoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>[]
          }
          create: {
            args: Prisma.ToDoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          createMany: {
            args: Prisma.ToDoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToDoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>[]
          }
          delete: {
            args: Prisma.ToDoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          update: {
            args: Prisma.ToDoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          deleteMany: {
            args: Prisma.ToDoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToDoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToDoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>[]
          }
          upsert: {
            args: Prisma.ToDoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          aggregate: {
            args: Prisma.ToDoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToDo>
          }
          groupBy: {
            args: Prisma.ToDoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToDoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToDoCountArgs<ExtArgs>
            result: $Utils.Optional<ToDoCountAggregateOutputType> | number
          }
        }
      }
      FBPage: {
        payload: Prisma.$FBPagePayload<ExtArgs>
        fields: Prisma.FBPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FBPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FBPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>
          }
          findFirst: {
            args: Prisma.FBPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FBPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>
          }
          findMany: {
            args: Prisma.FBPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>[]
          }
          create: {
            args: Prisma.FBPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>
          }
          createMany: {
            args: Prisma.FBPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FBPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>[]
          }
          delete: {
            args: Prisma.FBPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>
          }
          update: {
            args: Prisma.FBPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>
          }
          deleteMany: {
            args: Prisma.FBPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FBPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FBPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>[]
          }
          upsert: {
            args: Prisma.FBPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FBPagePayload>
          }
          aggregate: {
            args: Prisma.FBPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFBPage>
          }
          groupBy: {
            args: Prisma.FBPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<FBPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.FBPageCountArgs<ExtArgs>
            result: $Utils.Optional<FBPageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    announcement?: AnnouncementOmit
    facebookPost?: FacebookPostOmit
    toDo?: ToDoOmit
    fBPage?: FBPageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    todo: number
    announcement: number
    facebookPost: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todo?: boolean | UserCountOutputTypeCountTodoArgs
    announcement?: boolean | UserCountOutputTypeCountAnnouncementArgs
    facebookPost?: boolean | UserCountOutputTypeCountFacebookPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFacebookPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookPostWhereInput
  }


  /**
   * Count Type FacebookPostCountOutputType
   */

  export type FacebookPostCountOutputType = {
    todos: number
  }

  export type FacebookPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todos?: boolean | FacebookPostCountOutputTypeCountTodosArgs
  }

  // Custom InputTypes
  /**
   * FacebookPostCountOutputType without action
   */
  export type FacebookPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPostCountOutputType
     */
    select?: FacebookPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacebookPostCountOutputType without action
   */
  export type FacebookPostCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoWhereInput
  }


  /**
   * Count Type FBPageCountOutputType
   */

  export type FBPageCountOutputType = {
    facebookPost: number
  }

  export type FBPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookPost?: boolean | FBPageCountOutputTypeCountFacebookPostArgs
  }

  // Custom InputTypes
  /**
   * FBPageCountOutputType without action
   */
  export type FBPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPageCountOutputType
     */
    select?: FBPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FBPageCountOutputType without action
   */
  export type FBPageCountOutputTypeCountFacebookPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fname: string | null
    mname: string | null
    lname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    last_login_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fname: string | null
    mname: string | null
    lname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    last_login_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fname: number
    mname: number
    lname: number
    email: number
    password: number
    createdAt: number
    last_login_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fname?: true
    mname?: true
    lname?: true
    email?: true
    password?: true
    createdAt?: true
    last_login_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fname?: true
    mname?: true
    lname?: true
    email?: true
    password?: true
    createdAt?: true
    last_login_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fname?: true
    mname?: true
    lname?: true
    email?: true
    password?: true
    createdAt?: true
    last_login_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt: Date
    last_login_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    last_login_at?: boolean
    todo?: boolean | User$todoArgs<ExtArgs>
    announcement?: boolean | User$announcementArgs<ExtArgs>
    facebookPost?: boolean | User$facebookPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    last_login_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    last_login_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fname?: boolean
    mname?: boolean
    lname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    last_login_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fname" | "mname" | "lname" | "email" | "password" | "createdAt" | "last_login_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todo?: boolean | User$todoArgs<ExtArgs>
    announcement?: boolean | User$announcementArgs<ExtArgs>
    facebookPost?: boolean | User$facebookPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      todo: Prisma.$ToDoPayload<ExtArgs>[]
      announcement: Prisma.$AnnouncementPayload<ExtArgs>[]
      facebookPost: Prisma.$FacebookPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fname: string
      mname: string
      lname: string
      email: string
      password: string
      createdAt: Date
      last_login_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    todo<T extends User$todoArgs<ExtArgs> = {}>(args?: Subset<T, User$todoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcement<T extends User$announcementArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facebookPost<T extends User$facebookPostArgs<ExtArgs> = {}>(args?: Subset<T, User$facebookPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fname: FieldRef<"User", 'String'>
    readonly mname: FieldRef<"User", 'String'>
    readonly lname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly last_login_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.todo
   */
  export type User$todoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    where?: ToDoWhereInput
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    cursor?: ToDoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }

  /**
   * User.announcement
   */
  export type User$announcementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.facebookPost
   */
  export type User$facebookPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    where?: FacebookPostWhereInput
    orderBy?: FacebookPostOrderByWithRelationInput | FacebookPostOrderByWithRelationInput[]
    cursor?: FacebookPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacebookPostScalarFieldEnum | FacebookPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    userID: string | null
    title: string | null
    description: string | null
    createdBy: string | null
    createdAt: Date | null
    Source: $Enums.AnnouncementSource | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    title: string | null
    description: string | null
    createdBy: string | null
    createdAt: Date | null
    Source: $Enums.AnnouncementSource | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    userID: number
    title: number
    description: number
    createdBy: number
    createdAt: number
    Source: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    userID?: true
    title?: true
    description?: true
    createdBy?: true
    createdAt?: true
    Source?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    userID?: true
    title?: true
    description?: true
    createdBy?: true
    createdAt?: true
    Source?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    userID?: true
    title?: true
    description?: true
    createdBy?: true
    createdAt?: true
    Source?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    userID: string
    title: string
    description: string | null
    createdBy: string
    createdAt: Date
    Source: $Enums.AnnouncementSource
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    title?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    Source?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPost?: boolean | Announcement$fbPostArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    title?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    Source?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    title?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    Source?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    userID?: boolean
    title?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    Source?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "title" | "description" | "createdBy" | "createdAt" | "Source", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPost?: boolean | Announcement$fbPostArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fbPost: Prisma.$FacebookPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      title: string
      description: string | null
      createdBy: string
      createdAt: Date
      Source: $Enums.AnnouncementSource
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fbPost<T extends Announcement$fbPostArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$fbPostArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly userID: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly description: FieldRef<"Announcement", 'String'>
    readonly createdBy: FieldRef<"Announcement", 'String'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly Source: FieldRef<"Announcement", 'AnnouncementSource'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement.fbPost
   */
  export type Announcement$fbPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    where?: FacebookPostWhereInput
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model FacebookPost
   */

  export type AggregateFacebookPost = {
    _count: FacebookPostCountAggregateOutputType | null
    _min: FacebookPostMinAggregateOutputType | null
    _max: FacebookPostMaxAggregateOutputType | null
  }

  export type FacebookPostMinAggregateOutputType = {
    id: string | null
    annID: string | null
    userID: string | null
    pageName: string | null
    fbPostID: string | null
    author: string | null
    content: string | null
    url: string | null
    createdAt: Date | null
    status: $Enums.StatusType | null
  }

  export type FacebookPostMaxAggregateOutputType = {
    id: string | null
    annID: string | null
    userID: string | null
    pageName: string | null
    fbPostID: string | null
    author: string | null
    content: string | null
    url: string | null
    createdAt: Date | null
    status: $Enums.StatusType | null
  }

  export type FacebookPostCountAggregateOutputType = {
    id: number
    annID: number
    userID: number
    pageName: number
    fbPostID: number
    author: number
    content: number
    url: number
    createdAt: number
    status: number
    _all: number
  }


  export type FacebookPostMinAggregateInputType = {
    id?: true
    annID?: true
    userID?: true
    pageName?: true
    fbPostID?: true
    author?: true
    content?: true
    url?: true
    createdAt?: true
    status?: true
  }

  export type FacebookPostMaxAggregateInputType = {
    id?: true
    annID?: true
    userID?: true
    pageName?: true
    fbPostID?: true
    author?: true
    content?: true
    url?: true
    createdAt?: true
    status?: true
  }

  export type FacebookPostCountAggregateInputType = {
    id?: true
    annID?: true
    userID?: true
    pageName?: true
    fbPostID?: true
    author?: true
    content?: true
    url?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type FacebookPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookPost to aggregate.
     */
    where?: FacebookPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookPosts to fetch.
     */
    orderBy?: FacebookPostOrderByWithRelationInput | FacebookPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookPosts
    **/
    _count?: true | FacebookPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookPostMaxAggregateInputType
  }

  export type GetFacebookPostAggregateType<T extends FacebookPostAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookPost[P]>
      : GetScalarType<T[P], AggregateFacebookPost[P]>
  }




  export type FacebookPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookPostWhereInput
    orderBy?: FacebookPostOrderByWithAggregationInput | FacebookPostOrderByWithAggregationInput[]
    by: FacebookPostScalarFieldEnum[] | FacebookPostScalarFieldEnum
    having?: FacebookPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookPostCountAggregateInputType | true
    _min?: FacebookPostMinAggregateInputType
    _max?: FacebookPostMaxAggregateInputType
  }

  export type FacebookPostGroupByOutputType = {
    id: string
    annID: string
    userID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date
    status: $Enums.StatusType
    _count: FacebookPostCountAggregateOutputType | null
    _min: FacebookPostMinAggregateOutputType | null
    _max: FacebookPostMaxAggregateOutputType | null
  }

  type GetFacebookPostGroupByPayload<T extends FacebookPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookPostGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookPostGroupByOutputType[P]>
        }
      >
    >


  export type FacebookPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annID?: boolean
    userID?: boolean
    pageName?: boolean
    fbPostID?: boolean
    author?: boolean
    content?: boolean
    url?: boolean
    createdAt?: boolean
    status?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPageName?: boolean | FBPageDefaultArgs<ExtArgs>
    todos?: boolean | FacebookPost$todosArgs<ExtArgs>
    _count?: boolean | FacebookPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookPost"]>

  export type FacebookPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annID?: boolean
    userID?: boolean
    pageName?: boolean
    fbPostID?: boolean
    author?: boolean
    content?: boolean
    url?: boolean
    createdAt?: boolean
    status?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPageName?: boolean | FBPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookPost"]>

  export type FacebookPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annID?: boolean
    userID?: boolean
    pageName?: boolean
    fbPostID?: boolean
    author?: boolean
    content?: boolean
    url?: boolean
    createdAt?: boolean
    status?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPageName?: boolean | FBPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookPost"]>

  export type FacebookPostSelectScalar = {
    id?: boolean
    annID?: boolean
    userID?: boolean
    pageName?: boolean
    fbPostID?: boolean
    author?: boolean
    content?: boolean
    url?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type FacebookPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "annID" | "userID" | "pageName" | "fbPostID" | "author" | "content" | "url" | "createdAt" | "status", ExtArgs["result"]["facebookPost"]>
  export type FacebookPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPageName?: boolean | FBPageDefaultArgs<ExtArgs>
    todos?: boolean | FacebookPost$todosArgs<ExtArgs>
    _count?: boolean | FacebookPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacebookPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPageName?: boolean | FBPageDefaultArgs<ExtArgs>
  }
  export type FacebookPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fbPageName?: boolean | FBPageDefaultArgs<ExtArgs>
  }

  export type $FacebookPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookPost"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      fbPageName: Prisma.$FBPagePayload<ExtArgs>
      todos: Prisma.$ToDoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      annID: string
      userID: string
      pageName: string
      fbPostID: string
      author: string
      content: string
      url: string
      createdAt: Date
      status: $Enums.StatusType
    }, ExtArgs["result"]["facebookPost"]>
    composites: {}
  }

  type FacebookPostGetPayload<S extends boolean | null | undefined | FacebookPostDefaultArgs> = $Result.GetResult<Prisma.$FacebookPostPayload, S>

  type FacebookPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookPostCountAggregateInputType | true
    }

  export interface FacebookPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookPost'], meta: { name: 'FacebookPost' } }
    /**
     * Find zero or one FacebookPost that matches the filter.
     * @param {FacebookPostFindUniqueArgs} args - Arguments to find a FacebookPost
     * @example
     * // Get one FacebookPost
     * const facebookPost = await prisma.facebookPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookPostFindUniqueArgs>(args: SelectSubset<T, FacebookPostFindUniqueArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookPostFindUniqueOrThrowArgs} args - Arguments to find a FacebookPost
     * @example
     * // Get one FacebookPost
     * const facebookPost = await prisma.facebookPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookPostFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostFindFirstArgs} args - Arguments to find a FacebookPost
     * @example
     * // Get one FacebookPost
     * const facebookPost = await prisma.facebookPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookPostFindFirstArgs>(args?: SelectSubset<T, FacebookPostFindFirstArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostFindFirstOrThrowArgs} args - Arguments to find a FacebookPost
     * @example
     * // Get one FacebookPost
     * const facebookPost = await prisma.facebookPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookPostFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookPosts
     * const facebookPosts = await prisma.facebookPost.findMany()
     * 
     * // Get first 10 FacebookPosts
     * const facebookPosts = await prisma.facebookPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookPostWithIdOnly = await prisma.facebookPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookPostFindManyArgs>(args?: SelectSubset<T, FacebookPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookPost.
     * @param {FacebookPostCreateArgs} args - Arguments to create a FacebookPost.
     * @example
     * // Create one FacebookPost
     * const FacebookPost = await prisma.facebookPost.create({
     *   data: {
     *     // ... data to create a FacebookPost
     *   }
     * })
     * 
     */
    create<T extends FacebookPostCreateArgs>(args: SelectSubset<T, FacebookPostCreateArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookPosts.
     * @param {FacebookPostCreateManyArgs} args - Arguments to create many FacebookPosts.
     * @example
     * // Create many FacebookPosts
     * const facebookPost = await prisma.facebookPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookPostCreateManyArgs>(args?: SelectSubset<T, FacebookPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookPosts and returns the data saved in the database.
     * @param {FacebookPostCreateManyAndReturnArgs} args - Arguments to create many FacebookPosts.
     * @example
     * // Create many FacebookPosts
     * const facebookPost = await prisma.facebookPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookPosts and only return the `id`
     * const facebookPostWithIdOnly = await prisma.facebookPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookPostCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookPost.
     * @param {FacebookPostDeleteArgs} args - Arguments to delete one FacebookPost.
     * @example
     * // Delete one FacebookPost
     * const FacebookPost = await prisma.facebookPost.delete({
     *   where: {
     *     // ... filter to delete one FacebookPost
     *   }
     * })
     * 
     */
    delete<T extends FacebookPostDeleteArgs>(args: SelectSubset<T, FacebookPostDeleteArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookPost.
     * @param {FacebookPostUpdateArgs} args - Arguments to update one FacebookPost.
     * @example
     * // Update one FacebookPost
     * const facebookPost = await prisma.facebookPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookPostUpdateArgs>(args: SelectSubset<T, FacebookPostUpdateArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookPosts.
     * @param {FacebookPostDeleteManyArgs} args - Arguments to filter FacebookPosts to delete.
     * @example
     * // Delete a few FacebookPosts
     * const { count } = await prisma.facebookPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookPostDeleteManyArgs>(args?: SelectSubset<T, FacebookPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookPosts
     * const facebookPost = await prisma.facebookPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookPostUpdateManyArgs>(args: SelectSubset<T, FacebookPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookPosts and returns the data updated in the database.
     * @param {FacebookPostUpdateManyAndReturnArgs} args - Arguments to update many FacebookPosts.
     * @example
     * // Update many FacebookPosts
     * const facebookPost = await prisma.facebookPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookPosts and only return the `id`
     * const facebookPostWithIdOnly = await prisma.facebookPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookPostUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookPost.
     * @param {FacebookPostUpsertArgs} args - Arguments to update or create a FacebookPost.
     * @example
     * // Update or create a FacebookPost
     * const facebookPost = await prisma.facebookPost.upsert({
     *   create: {
     *     // ... data to create a FacebookPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookPost we want to update
     *   }
     * })
     */
    upsert<T extends FacebookPostUpsertArgs>(args: SelectSubset<T, FacebookPostUpsertArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostCountArgs} args - Arguments to filter FacebookPosts to count.
     * @example
     * // Count the number of FacebookPosts
     * const count = await prisma.facebookPost.count({
     *   where: {
     *     // ... the filter for the FacebookPosts we want to count
     *   }
     * })
    **/
    count<T extends FacebookPostCountArgs>(
      args?: Subset<T, FacebookPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookPostAggregateArgs>(args: Subset<T, FacebookPostAggregateArgs>): Prisma.PrismaPromise<GetFacebookPostAggregateType<T>>

    /**
     * Group by FacebookPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookPostGroupByArgs['orderBy'] }
        : { orderBy?: FacebookPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookPost model
   */
  readonly fields: FacebookPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fbPageName<T extends FBPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FBPageDefaultArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    todos<T extends FacebookPost$todosArgs<ExtArgs> = {}>(args?: Subset<T, FacebookPost$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookPost model
   */
  interface FacebookPostFieldRefs {
    readonly id: FieldRef<"FacebookPost", 'String'>
    readonly annID: FieldRef<"FacebookPost", 'String'>
    readonly userID: FieldRef<"FacebookPost", 'String'>
    readonly pageName: FieldRef<"FacebookPost", 'String'>
    readonly fbPostID: FieldRef<"FacebookPost", 'String'>
    readonly author: FieldRef<"FacebookPost", 'String'>
    readonly content: FieldRef<"FacebookPost", 'String'>
    readonly url: FieldRef<"FacebookPost", 'String'>
    readonly createdAt: FieldRef<"FacebookPost", 'DateTime'>
    readonly status: FieldRef<"FacebookPost", 'StatusType'>
  }
    

  // Custom InputTypes
  /**
   * FacebookPost findUnique
   */
  export type FacebookPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookPost to fetch.
     */
    where: FacebookPostWhereUniqueInput
  }

  /**
   * FacebookPost findUniqueOrThrow
   */
  export type FacebookPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookPost to fetch.
     */
    where: FacebookPostWhereUniqueInput
  }

  /**
   * FacebookPost findFirst
   */
  export type FacebookPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookPost to fetch.
     */
    where?: FacebookPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookPosts to fetch.
     */
    orderBy?: FacebookPostOrderByWithRelationInput | FacebookPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookPosts.
     */
    cursor?: FacebookPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookPosts.
     */
    distinct?: FacebookPostScalarFieldEnum | FacebookPostScalarFieldEnum[]
  }

  /**
   * FacebookPost findFirstOrThrow
   */
  export type FacebookPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookPost to fetch.
     */
    where?: FacebookPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookPosts to fetch.
     */
    orderBy?: FacebookPostOrderByWithRelationInput | FacebookPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookPosts.
     */
    cursor?: FacebookPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookPosts.
     */
    distinct?: FacebookPostScalarFieldEnum | FacebookPostScalarFieldEnum[]
  }

  /**
   * FacebookPost findMany
   */
  export type FacebookPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * Filter, which FacebookPosts to fetch.
     */
    where?: FacebookPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookPosts to fetch.
     */
    orderBy?: FacebookPostOrderByWithRelationInput | FacebookPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookPosts.
     */
    cursor?: FacebookPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookPosts.
     */
    skip?: number
    distinct?: FacebookPostScalarFieldEnum | FacebookPostScalarFieldEnum[]
  }

  /**
   * FacebookPost create
   */
  export type FacebookPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookPost.
     */
    data: XOR<FacebookPostCreateInput, FacebookPostUncheckedCreateInput>
  }

  /**
   * FacebookPost createMany
   */
  export type FacebookPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookPosts.
     */
    data: FacebookPostCreateManyInput | FacebookPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookPost createManyAndReturn
   */
  export type FacebookPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookPosts.
     */
    data: FacebookPostCreateManyInput | FacebookPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookPost update
   */
  export type FacebookPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookPost.
     */
    data: XOR<FacebookPostUpdateInput, FacebookPostUncheckedUpdateInput>
    /**
     * Choose, which FacebookPost to update.
     */
    where: FacebookPostWhereUniqueInput
  }

  /**
   * FacebookPost updateMany
   */
  export type FacebookPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookPosts.
     */
    data: XOR<FacebookPostUpdateManyMutationInput, FacebookPostUncheckedUpdateManyInput>
    /**
     * Filter which FacebookPosts to update
     */
    where?: FacebookPostWhereInput
    /**
     * Limit how many FacebookPosts to update.
     */
    limit?: number
  }

  /**
   * FacebookPost updateManyAndReturn
   */
  export type FacebookPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * The data used to update FacebookPosts.
     */
    data: XOR<FacebookPostUpdateManyMutationInput, FacebookPostUncheckedUpdateManyInput>
    /**
     * Filter which FacebookPosts to update
     */
    where?: FacebookPostWhereInput
    /**
     * Limit how many FacebookPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookPost upsert
   */
  export type FacebookPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookPost to update in case it exists.
     */
    where: FacebookPostWhereUniqueInput
    /**
     * In case the FacebookPost found by the `where` argument doesn't exist, create a new FacebookPost with this data.
     */
    create: XOR<FacebookPostCreateInput, FacebookPostUncheckedCreateInput>
    /**
     * In case the FacebookPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookPostUpdateInput, FacebookPostUncheckedUpdateInput>
  }

  /**
   * FacebookPost delete
   */
  export type FacebookPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    /**
     * Filter which FacebookPost to delete.
     */
    where: FacebookPostWhereUniqueInput
  }

  /**
   * FacebookPost deleteMany
   */
  export type FacebookPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookPosts to delete
     */
    where?: FacebookPostWhereInput
    /**
     * Limit how many FacebookPosts to delete.
     */
    limit?: number
  }

  /**
   * FacebookPost.todos
   */
  export type FacebookPost$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    where?: ToDoWhereInput
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    cursor?: ToDoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }

  /**
   * FacebookPost without action
   */
  export type FacebookPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
  }


  /**
   * Model ToDo
   */

  export type AggregateToDo = {
    _count: ToDoCountAggregateOutputType | null
    _min: ToDoMinAggregateOutputType | null
    _max: ToDoMaxAggregateOutputType | null
  }

  export type ToDoMinAggregateOutputType = {
    id: string | null
    userID: string | null
    fbID: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    createdAt: Date | null
    priority: $Enums.PriorityType | null
  }

  export type ToDoMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    fbID: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    createdAt: Date | null
    priority: $Enums.PriorityType | null
  }

  export type ToDoCountAggregateOutputType = {
    id: number
    userID: number
    fbID: number
    title: number
    description: number
    dueDate: number
    createdAt: number
    priority: number
    _all: number
  }


  export type ToDoMinAggregateInputType = {
    id?: true
    userID?: true
    fbID?: true
    title?: true
    description?: true
    dueDate?: true
    createdAt?: true
    priority?: true
  }

  export type ToDoMaxAggregateInputType = {
    id?: true
    userID?: true
    fbID?: true
    title?: true
    description?: true
    dueDate?: true
    createdAt?: true
    priority?: true
  }

  export type ToDoCountAggregateInputType = {
    id?: true
    userID?: true
    fbID?: true
    title?: true
    description?: true
    dueDate?: true
    createdAt?: true
    priority?: true
    _all?: true
  }

  export type ToDoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDo to aggregate.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToDos
    **/
    _count?: true | ToDoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToDoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToDoMaxAggregateInputType
  }

  export type GetToDoAggregateType<T extends ToDoAggregateArgs> = {
        [P in keyof T & keyof AggregateToDo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToDo[P]>
      : GetScalarType<T[P], AggregateToDo[P]>
  }




  export type ToDoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoWhereInput
    orderBy?: ToDoOrderByWithAggregationInput | ToDoOrderByWithAggregationInput[]
    by: ToDoScalarFieldEnum[] | ToDoScalarFieldEnum
    having?: ToDoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToDoCountAggregateInputType | true
    _min?: ToDoMinAggregateInputType
    _max?: ToDoMaxAggregateInputType
  }

  export type ToDoGroupByOutputType = {
    id: string
    userID: string
    fbID: string
    title: string
    description: string | null
    dueDate: Date
    createdAt: Date
    priority: $Enums.PriorityType
    _count: ToDoCountAggregateOutputType | null
    _min: ToDoMinAggregateOutputType | null
    _max: ToDoMaxAggregateOutputType | null
  }

  type GetToDoGroupByPayload<T extends ToDoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToDoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToDoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToDoGroupByOutputType[P]>
            : GetScalarType<T[P], ToDoGroupByOutputType[P]>
        }
      >
    >


  export type ToDoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    fbID?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    priority?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    facebookPost?: boolean | FacebookPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDo"]>

  export type ToDoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    fbID?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    priority?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    facebookPost?: boolean | FacebookPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDo"]>

  export type ToDoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    fbID?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    priority?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    facebookPost?: boolean | FacebookPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDo"]>

  export type ToDoSelectScalar = {
    id?: boolean
    userID?: boolean
    fbID?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    priority?: boolean
  }

  export type ToDoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "fbID" | "title" | "description" | "dueDate" | "createdAt" | "priority", ExtArgs["result"]["toDo"]>
  export type ToDoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    facebookPost?: boolean | FacebookPostDefaultArgs<ExtArgs>
  }
  export type ToDoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    facebookPost?: boolean | FacebookPostDefaultArgs<ExtArgs>
  }
  export type ToDoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    facebookPost?: boolean | FacebookPostDefaultArgs<ExtArgs>
  }

  export type $ToDoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToDo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      facebookPost: Prisma.$FacebookPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      fbID: string
      title: string
      description: string | null
      dueDate: Date
      createdAt: Date
      priority: $Enums.PriorityType
    }, ExtArgs["result"]["toDo"]>
    composites: {}
  }

  type ToDoGetPayload<S extends boolean | null | undefined | ToDoDefaultArgs> = $Result.GetResult<Prisma.$ToDoPayload, S>

  type ToDoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToDoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToDoCountAggregateInputType | true
    }

  export interface ToDoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToDo'], meta: { name: 'ToDo' } }
    /**
     * Find zero or one ToDo that matches the filter.
     * @param {ToDoFindUniqueArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToDoFindUniqueArgs>(args: SelectSubset<T, ToDoFindUniqueArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToDo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToDoFindUniqueOrThrowArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToDoFindUniqueOrThrowArgs>(args: SelectSubset<T, ToDoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToDo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoFindFirstArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToDoFindFirstArgs>(args?: SelectSubset<T, ToDoFindFirstArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToDo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoFindFirstOrThrowArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToDoFindFirstOrThrowArgs>(args?: SelectSubset<T, ToDoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToDos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToDos
     * const toDos = await prisma.toDo.findMany()
     * 
     * // Get first 10 ToDos
     * const toDos = await prisma.toDo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toDoWithIdOnly = await prisma.toDo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToDoFindManyArgs>(args?: SelectSubset<T, ToDoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToDo.
     * @param {ToDoCreateArgs} args - Arguments to create a ToDo.
     * @example
     * // Create one ToDo
     * const ToDo = await prisma.toDo.create({
     *   data: {
     *     // ... data to create a ToDo
     *   }
     * })
     * 
     */
    create<T extends ToDoCreateArgs>(args: SelectSubset<T, ToDoCreateArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToDos.
     * @param {ToDoCreateManyArgs} args - Arguments to create many ToDos.
     * @example
     * // Create many ToDos
     * const toDo = await prisma.toDo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToDoCreateManyArgs>(args?: SelectSubset<T, ToDoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToDos and returns the data saved in the database.
     * @param {ToDoCreateManyAndReturnArgs} args - Arguments to create many ToDos.
     * @example
     * // Create many ToDos
     * const toDo = await prisma.toDo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToDos and only return the `id`
     * const toDoWithIdOnly = await prisma.toDo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToDoCreateManyAndReturnArgs>(args?: SelectSubset<T, ToDoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToDo.
     * @param {ToDoDeleteArgs} args - Arguments to delete one ToDo.
     * @example
     * // Delete one ToDo
     * const ToDo = await prisma.toDo.delete({
     *   where: {
     *     // ... filter to delete one ToDo
     *   }
     * })
     * 
     */
    delete<T extends ToDoDeleteArgs>(args: SelectSubset<T, ToDoDeleteArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToDo.
     * @param {ToDoUpdateArgs} args - Arguments to update one ToDo.
     * @example
     * // Update one ToDo
     * const toDo = await prisma.toDo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToDoUpdateArgs>(args: SelectSubset<T, ToDoUpdateArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToDos.
     * @param {ToDoDeleteManyArgs} args - Arguments to filter ToDos to delete.
     * @example
     * // Delete a few ToDos
     * const { count } = await prisma.toDo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToDoDeleteManyArgs>(args?: SelectSubset<T, ToDoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToDos
     * const toDo = await prisma.toDo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToDoUpdateManyArgs>(args: SelectSubset<T, ToDoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDos and returns the data updated in the database.
     * @param {ToDoUpdateManyAndReturnArgs} args - Arguments to update many ToDos.
     * @example
     * // Update many ToDos
     * const toDo = await prisma.toDo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToDos and only return the `id`
     * const toDoWithIdOnly = await prisma.toDo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToDoUpdateManyAndReturnArgs>(args: SelectSubset<T, ToDoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToDo.
     * @param {ToDoUpsertArgs} args - Arguments to update or create a ToDo.
     * @example
     * // Update or create a ToDo
     * const toDo = await prisma.toDo.upsert({
     *   create: {
     *     // ... data to create a ToDo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToDo we want to update
     *   }
     * })
     */
    upsert<T extends ToDoUpsertArgs>(args: SelectSubset<T, ToDoUpsertArgs<ExtArgs>>): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToDos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoCountArgs} args - Arguments to filter ToDos to count.
     * @example
     * // Count the number of ToDos
     * const count = await prisma.toDo.count({
     *   where: {
     *     // ... the filter for the ToDos we want to count
     *   }
     * })
    **/
    count<T extends ToDoCountArgs>(
      args?: Subset<T, ToDoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToDoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToDo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ToDoAggregateArgs>(args: Subset<T, ToDoAggregateArgs>): Prisma.PrismaPromise<GetToDoAggregateType<T>>

    /**
     * Group by ToDo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ToDoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToDoGroupByArgs['orderBy'] }
        : { orderBy?: ToDoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ToDoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToDoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToDo model
   */
  readonly fields: ToDoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToDo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToDoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facebookPost<T extends FacebookPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacebookPostDefaultArgs<ExtArgs>>): Prisma__FacebookPostClient<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ToDo model
   */
  interface ToDoFieldRefs {
    readonly id: FieldRef<"ToDo", 'String'>
    readonly userID: FieldRef<"ToDo", 'String'>
    readonly fbID: FieldRef<"ToDo", 'String'>
    readonly title: FieldRef<"ToDo", 'String'>
    readonly description: FieldRef<"ToDo", 'String'>
    readonly dueDate: FieldRef<"ToDo", 'DateTime'>
    readonly createdAt: FieldRef<"ToDo", 'DateTime'>
    readonly priority: FieldRef<"ToDo", 'PriorityType'>
  }
    

  // Custom InputTypes
  /**
   * ToDo findUnique
   */
  export type ToDoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where: ToDoWhereUniqueInput
  }

  /**
   * ToDo findUniqueOrThrow
   */
  export type ToDoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where: ToDoWhereUniqueInput
  }

  /**
   * ToDo findFirst
   */
  export type ToDoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDos.
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDos.
     */
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }

  /**
   * ToDo findFirstOrThrow
   */
  export type ToDoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDos.
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDos.
     */
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }

  /**
   * ToDo findMany
   */
  export type ToDoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * Filter, which ToDos to fetch.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToDos.
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }

  /**
   * ToDo create
   */
  export type ToDoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * The data needed to create a ToDo.
     */
    data: XOR<ToDoCreateInput, ToDoUncheckedCreateInput>
  }

  /**
   * ToDo createMany
   */
  export type ToDoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToDos.
     */
    data: ToDoCreateManyInput | ToDoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToDo createManyAndReturn
   */
  export type ToDoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * The data used to create many ToDos.
     */
    data: ToDoCreateManyInput | ToDoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToDo update
   */
  export type ToDoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * The data needed to update a ToDo.
     */
    data: XOR<ToDoUpdateInput, ToDoUncheckedUpdateInput>
    /**
     * Choose, which ToDo to update.
     */
    where: ToDoWhereUniqueInput
  }

  /**
   * ToDo updateMany
   */
  export type ToDoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToDos.
     */
    data: XOR<ToDoUpdateManyMutationInput, ToDoUncheckedUpdateManyInput>
    /**
     * Filter which ToDos to update
     */
    where?: ToDoWhereInput
    /**
     * Limit how many ToDos to update.
     */
    limit?: number
  }

  /**
   * ToDo updateManyAndReturn
   */
  export type ToDoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * The data used to update ToDos.
     */
    data: XOR<ToDoUpdateManyMutationInput, ToDoUncheckedUpdateManyInput>
    /**
     * Filter which ToDos to update
     */
    where?: ToDoWhereInput
    /**
     * Limit how many ToDos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToDo upsert
   */
  export type ToDoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * The filter to search for the ToDo to update in case it exists.
     */
    where: ToDoWhereUniqueInput
    /**
     * In case the ToDo found by the `where` argument doesn't exist, create a new ToDo with this data.
     */
    create: XOR<ToDoCreateInput, ToDoUncheckedCreateInput>
    /**
     * In case the ToDo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToDoUpdateInput, ToDoUncheckedUpdateInput>
  }

  /**
   * ToDo delete
   */
  export type ToDoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
    /**
     * Filter which ToDo to delete.
     */
    where: ToDoWhereUniqueInput
  }

  /**
   * ToDo deleteMany
   */
  export type ToDoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDos to delete
     */
    where?: ToDoWhereInput
    /**
     * Limit how many ToDos to delete.
     */
    limit?: number
  }

  /**
   * ToDo without action
   */
  export type ToDoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDo
     */
    omit?: ToDoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoInclude<ExtArgs> | null
  }


  /**
   * Model FBPage
   */

  export type AggregateFBPage = {
    _count: FBPageCountAggregateOutputType | null
    _min: FBPageMinAggregateOutputType | null
    _max: FBPageMaxAggregateOutputType | null
  }

  export type FBPageMinAggregateOutputType = {
    pageName: string | null
    url: string | null
    type: $Enums.PageType | null
  }

  export type FBPageMaxAggregateOutputType = {
    pageName: string | null
    url: string | null
    type: $Enums.PageType | null
  }

  export type FBPageCountAggregateOutputType = {
    pageName: number
    url: number
    type: number
    _all: number
  }


  export type FBPageMinAggregateInputType = {
    pageName?: true
    url?: true
    type?: true
  }

  export type FBPageMaxAggregateInputType = {
    pageName?: true
    url?: true
    type?: true
  }

  export type FBPageCountAggregateInputType = {
    pageName?: true
    url?: true
    type?: true
    _all?: true
  }

  export type FBPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FBPage to aggregate.
     */
    where?: FBPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FBPages to fetch.
     */
    orderBy?: FBPageOrderByWithRelationInput | FBPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FBPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FBPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FBPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FBPages
    **/
    _count?: true | FBPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FBPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FBPageMaxAggregateInputType
  }

  export type GetFBPageAggregateType<T extends FBPageAggregateArgs> = {
        [P in keyof T & keyof AggregateFBPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFBPage[P]>
      : GetScalarType<T[P], AggregateFBPage[P]>
  }




  export type FBPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FBPageWhereInput
    orderBy?: FBPageOrderByWithAggregationInput | FBPageOrderByWithAggregationInput[]
    by: FBPageScalarFieldEnum[] | FBPageScalarFieldEnum
    having?: FBPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FBPageCountAggregateInputType | true
    _min?: FBPageMinAggregateInputType
    _max?: FBPageMaxAggregateInputType
  }

  export type FBPageGroupByOutputType = {
    pageName: string
    url: string
    type: $Enums.PageType
    _count: FBPageCountAggregateOutputType | null
    _min: FBPageMinAggregateOutputType | null
    _max: FBPageMaxAggregateOutputType | null
  }

  type GetFBPageGroupByPayload<T extends FBPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FBPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FBPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FBPageGroupByOutputType[P]>
            : GetScalarType<T[P], FBPageGroupByOutputType[P]>
        }
      >
    >


  export type FBPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pageName?: boolean
    url?: boolean
    type?: boolean
    facebookPost?: boolean | FBPage$facebookPostArgs<ExtArgs>
    _count?: boolean | FBPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fBPage"]>

  export type FBPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pageName?: boolean
    url?: boolean
    type?: boolean
  }, ExtArgs["result"]["fBPage"]>

  export type FBPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pageName?: boolean
    url?: boolean
    type?: boolean
  }, ExtArgs["result"]["fBPage"]>

  export type FBPageSelectScalar = {
    pageName?: boolean
    url?: boolean
    type?: boolean
  }

  export type FBPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pageName" | "url" | "type", ExtArgs["result"]["fBPage"]>
  export type FBPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookPost?: boolean | FBPage$facebookPostArgs<ExtArgs>
    _count?: boolean | FBPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FBPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FBPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FBPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FBPage"
    objects: {
      facebookPost: Prisma.$FacebookPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pageName: string
      url: string
      type: $Enums.PageType
    }, ExtArgs["result"]["fBPage"]>
    composites: {}
  }

  type FBPageGetPayload<S extends boolean | null | undefined | FBPageDefaultArgs> = $Result.GetResult<Prisma.$FBPagePayload, S>

  type FBPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FBPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FBPageCountAggregateInputType | true
    }

  export interface FBPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FBPage'], meta: { name: 'FBPage' } }
    /**
     * Find zero or one FBPage that matches the filter.
     * @param {FBPageFindUniqueArgs} args - Arguments to find a FBPage
     * @example
     * // Get one FBPage
     * const fBPage = await prisma.fBPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FBPageFindUniqueArgs>(args: SelectSubset<T, FBPageFindUniqueArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FBPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FBPageFindUniqueOrThrowArgs} args - Arguments to find a FBPage
     * @example
     * // Get one FBPage
     * const fBPage = await prisma.fBPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FBPageFindUniqueOrThrowArgs>(args: SelectSubset<T, FBPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FBPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageFindFirstArgs} args - Arguments to find a FBPage
     * @example
     * // Get one FBPage
     * const fBPage = await prisma.fBPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FBPageFindFirstArgs>(args?: SelectSubset<T, FBPageFindFirstArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FBPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageFindFirstOrThrowArgs} args - Arguments to find a FBPage
     * @example
     * // Get one FBPage
     * const fBPage = await prisma.fBPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FBPageFindFirstOrThrowArgs>(args?: SelectSubset<T, FBPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FBPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FBPages
     * const fBPages = await prisma.fBPage.findMany()
     * 
     * // Get first 10 FBPages
     * const fBPages = await prisma.fBPage.findMany({ take: 10 })
     * 
     * // Only select the `pageName`
     * const fBPageWithPageNameOnly = await prisma.fBPage.findMany({ select: { pageName: true } })
     * 
     */
    findMany<T extends FBPageFindManyArgs>(args?: SelectSubset<T, FBPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FBPage.
     * @param {FBPageCreateArgs} args - Arguments to create a FBPage.
     * @example
     * // Create one FBPage
     * const FBPage = await prisma.fBPage.create({
     *   data: {
     *     // ... data to create a FBPage
     *   }
     * })
     * 
     */
    create<T extends FBPageCreateArgs>(args: SelectSubset<T, FBPageCreateArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FBPages.
     * @param {FBPageCreateManyArgs} args - Arguments to create many FBPages.
     * @example
     * // Create many FBPages
     * const fBPage = await prisma.fBPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FBPageCreateManyArgs>(args?: SelectSubset<T, FBPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FBPages and returns the data saved in the database.
     * @param {FBPageCreateManyAndReturnArgs} args - Arguments to create many FBPages.
     * @example
     * // Create many FBPages
     * const fBPage = await prisma.fBPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FBPages and only return the `pageName`
     * const fBPageWithPageNameOnly = await prisma.fBPage.createManyAndReturn({
     *   select: { pageName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FBPageCreateManyAndReturnArgs>(args?: SelectSubset<T, FBPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FBPage.
     * @param {FBPageDeleteArgs} args - Arguments to delete one FBPage.
     * @example
     * // Delete one FBPage
     * const FBPage = await prisma.fBPage.delete({
     *   where: {
     *     // ... filter to delete one FBPage
     *   }
     * })
     * 
     */
    delete<T extends FBPageDeleteArgs>(args: SelectSubset<T, FBPageDeleteArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FBPage.
     * @param {FBPageUpdateArgs} args - Arguments to update one FBPage.
     * @example
     * // Update one FBPage
     * const fBPage = await prisma.fBPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FBPageUpdateArgs>(args: SelectSubset<T, FBPageUpdateArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FBPages.
     * @param {FBPageDeleteManyArgs} args - Arguments to filter FBPages to delete.
     * @example
     * // Delete a few FBPages
     * const { count } = await prisma.fBPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FBPageDeleteManyArgs>(args?: SelectSubset<T, FBPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FBPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FBPages
     * const fBPage = await prisma.fBPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FBPageUpdateManyArgs>(args: SelectSubset<T, FBPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FBPages and returns the data updated in the database.
     * @param {FBPageUpdateManyAndReturnArgs} args - Arguments to update many FBPages.
     * @example
     * // Update many FBPages
     * const fBPage = await prisma.fBPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FBPages and only return the `pageName`
     * const fBPageWithPageNameOnly = await prisma.fBPage.updateManyAndReturn({
     *   select: { pageName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FBPageUpdateManyAndReturnArgs>(args: SelectSubset<T, FBPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FBPage.
     * @param {FBPageUpsertArgs} args - Arguments to update or create a FBPage.
     * @example
     * // Update or create a FBPage
     * const fBPage = await prisma.fBPage.upsert({
     *   create: {
     *     // ... data to create a FBPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FBPage we want to update
     *   }
     * })
     */
    upsert<T extends FBPageUpsertArgs>(args: SelectSubset<T, FBPageUpsertArgs<ExtArgs>>): Prisma__FBPageClient<$Result.GetResult<Prisma.$FBPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FBPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageCountArgs} args - Arguments to filter FBPages to count.
     * @example
     * // Count the number of FBPages
     * const count = await prisma.fBPage.count({
     *   where: {
     *     // ... the filter for the FBPages we want to count
     *   }
     * })
    **/
    count<T extends FBPageCountArgs>(
      args?: Subset<T, FBPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FBPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FBPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FBPageAggregateArgs>(args: Subset<T, FBPageAggregateArgs>): Prisma.PrismaPromise<GetFBPageAggregateType<T>>

    /**
     * Group by FBPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FBPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FBPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FBPageGroupByArgs['orderBy'] }
        : { orderBy?: FBPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FBPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFBPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FBPage model
   */
  readonly fields: FBPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FBPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FBPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facebookPost<T extends FBPage$facebookPostArgs<ExtArgs> = {}>(args?: Subset<T, FBPage$facebookPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FBPage model
   */
  interface FBPageFieldRefs {
    readonly pageName: FieldRef<"FBPage", 'String'>
    readonly url: FieldRef<"FBPage", 'String'>
    readonly type: FieldRef<"FBPage", 'PageType'>
  }
    

  // Custom InputTypes
  /**
   * FBPage findUnique
   */
  export type FBPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * Filter, which FBPage to fetch.
     */
    where: FBPageWhereUniqueInput
  }

  /**
   * FBPage findUniqueOrThrow
   */
  export type FBPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * Filter, which FBPage to fetch.
     */
    where: FBPageWhereUniqueInput
  }

  /**
   * FBPage findFirst
   */
  export type FBPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * Filter, which FBPage to fetch.
     */
    where?: FBPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FBPages to fetch.
     */
    orderBy?: FBPageOrderByWithRelationInput | FBPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FBPages.
     */
    cursor?: FBPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FBPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FBPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FBPages.
     */
    distinct?: FBPageScalarFieldEnum | FBPageScalarFieldEnum[]
  }

  /**
   * FBPage findFirstOrThrow
   */
  export type FBPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * Filter, which FBPage to fetch.
     */
    where?: FBPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FBPages to fetch.
     */
    orderBy?: FBPageOrderByWithRelationInput | FBPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FBPages.
     */
    cursor?: FBPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FBPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FBPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FBPages.
     */
    distinct?: FBPageScalarFieldEnum | FBPageScalarFieldEnum[]
  }

  /**
   * FBPage findMany
   */
  export type FBPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * Filter, which FBPages to fetch.
     */
    where?: FBPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FBPages to fetch.
     */
    orderBy?: FBPageOrderByWithRelationInput | FBPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FBPages.
     */
    cursor?: FBPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FBPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FBPages.
     */
    skip?: number
    distinct?: FBPageScalarFieldEnum | FBPageScalarFieldEnum[]
  }

  /**
   * FBPage create
   */
  export type FBPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * The data needed to create a FBPage.
     */
    data: XOR<FBPageCreateInput, FBPageUncheckedCreateInput>
  }

  /**
   * FBPage createMany
   */
  export type FBPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FBPages.
     */
    data: FBPageCreateManyInput | FBPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FBPage createManyAndReturn
   */
  export type FBPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * The data used to create many FBPages.
     */
    data: FBPageCreateManyInput | FBPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FBPage update
   */
  export type FBPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * The data needed to update a FBPage.
     */
    data: XOR<FBPageUpdateInput, FBPageUncheckedUpdateInput>
    /**
     * Choose, which FBPage to update.
     */
    where: FBPageWhereUniqueInput
  }

  /**
   * FBPage updateMany
   */
  export type FBPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FBPages.
     */
    data: XOR<FBPageUpdateManyMutationInput, FBPageUncheckedUpdateManyInput>
    /**
     * Filter which FBPages to update
     */
    where?: FBPageWhereInput
    /**
     * Limit how many FBPages to update.
     */
    limit?: number
  }

  /**
   * FBPage updateManyAndReturn
   */
  export type FBPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * The data used to update FBPages.
     */
    data: XOR<FBPageUpdateManyMutationInput, FBPageUncheckedUpdateManyInput>
    /**
     * Filter which FBPages to update
     */
    where?: FBPageWhereInput
    /**
     * Limit how many FBPages to update.
     */
    limit?: number
  }

  /**
   * FBPage upsert
   */
  export type FBPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * The filter to search for the FBPage to update in case it exists.
     */
    where: FBPageWhereUniqueInput
    /**
     * In case the FBPage found by the `where` argument doesn't exist, create a new FBPage with this data.
     */
    create: XOR<FBPageCreateInput, FBPageUncheckedCreateInput>
    /**
     * In case the FBPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FBPageUpdateInput, FBPageUncheckedUpdateInput>
  }

  /**
   * FBPage delete
   */
  export type FBPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
    /**
     * Filter which FBPage to delete.
     */
    where: FBPageWhereUniqueInput
  }

  /**
   * FBPage deleteMany
   */
  export type FBPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FBPages to delete
     */
    where?: FBPageWhereInput
    /**
     * Limit how many FBPages to delete.
     */
    limit?: number
  }

  /**
   * FBPage.facebookPost
   */
  export type FBPage$facebookPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookPost
     */
    select?: FacebookPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookPost
     */
    omit?: FacebookPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPostInclude<ExtArgs> | null
    where?: FacebookPostWhereInput
    orderBy?: FacebookPostOrderByWithRelationInput | FacebookPostOrderByWithRelationInput[]
    cursor?: FacebookPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacebookPostScalarFieldEnum | FacebookPostScalarFieldEnum[]
  }

  /**
   * FBPage without action
   */
  export type FBPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FBPage
     */
    select?: FBPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FBPage
     */
    omit?: FBPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FBPageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fname: 'fname',
    mname: 'mname',
    lname: 'lname',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    last_login_at: 'last_login_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    title: 'title',
    description: 'description',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    Source: 'Source'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const FacebookPostScalarFieldEnum: {
    id: 'id',
    annID: 'annID',
    userID: 'userID',
    pageName: 'pageName',
    fbPostID: 'fbPostID',
    author: 'author',
    content: 'content',
    url: 'url',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type FacebookPostScalarFieldEnum = (typeof FacebookPostScalarFieldEnum)[keyof typeof FacebookPostScalarFieldEnum]


  export const ToDoScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    fbID: 'fbID',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    priority: 'priority'
  };

  export type ToDoScalarFieldEnum = (typeof ToDoScalarFieldEnum)[keyof typeof ToDoScalarFieldEnum]


  export const FBPageScalarFieldEnum: {
    pageName: 'pageName',
    url: 'url',
    type: 'type'
  };

  export type FBPageScalarFieldEnum = (typeof FBPageScalarFieldEnum)[keyof typeof FBPageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnnouncementSource'
   */
  export type EnumAnnouncementSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementSource'>
    


  /**
   * Reference to a field of type 'AnnouncementSource[]'
   */
  export type ListEnumAnnouncementSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementSource[]'>
    


  /**
   * Reference to a field of type 'StatusType'
   */
  export type EnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType'>
    


  /**
   * Reference to a field of type 'StatusType[]'
   */
  export type ListEnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType[]'>
    


  /**
   * Reference to a field of type 'PriorityType'
   */
  export type EnumPriorityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriorityType'>
    


  /**
   * Reference to a field of type 'PriorityType[]'
   */
  export type ListEnumPriorityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriorityType[]'>
    


  /**
   * Reference to a field of type 'PageType'
   */
  export type EnumPageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageType'>
    


  /**
   * Reference to a field of type 'PageType[]'
   */
  export type ListEnumPageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fname?: StringFilter<"User"> | string
    mname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    last_login_at?: DateTimeFilter<"User"> | Date | string
    todo?: ToDoListRelationFilter
    announcement?: AnnouncementListRelationFilter
    facebookPost?: FacebookPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    last_login_at?: SortOrder
    todo?: ToDoOrderByRelationAggregateInput
    announcement?: AnnouncementOrderByRelationAggregateInput
    facebookPost?: FacebookPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fname?: StringFilter<"User"> | string
    mname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    last_login_at?: DateTimeFilter<"User"> | Date | string
    todo?: ToDoListRelationFilter
    announcement?: AnnouncementListRelationFilter
    facebookPost?: FacebookPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    last_login_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fname?: StringWithAggregatesFilter<"User"> | string
    mname?: StringWithAggregatesFilter<"User"> | string
    lname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    last_login_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    userID?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    description?: StringNullableFilter<"Announcement"> | string | null
    createdBy?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    Source?: EnumAnnouncementSourceFilter<"Announcement"> | $Enums.AnnouncementSource
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fbPost?: XOR<FacebookPostNullableScalarRelationFilter, FacebookPostWhereInput> | null
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    Source?: SortOrder
    user?: UserOrderByWithRelationInput
    fbPost?: FacebookPostOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    userID?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    description?: StringNullableFilter<"Announcement"> | string | null
    createdBy?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    Source?: EnumAnnouncementSourceFilter<"Announcement"> | $Enums.AnnouncementSource
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fbPost?: XOR<FacebookPostNullableScalarRelationFilter, FacebookPostWhereInput> | null
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    Source?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    userID?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    description?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    createdBy?: StringWithAggregatesFilter<"Announcement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    Source?: EnumAnnouncementSourceWithAggregatesFilter<"Announcement"> | $Enums.AnnouncementSource
  }

  export type FacebookPostWhereInput = {
    AND?: FacebookPostWhereInput | FacebookPostWhereInput[]
    OR?: FacebookPostWhereInput[]
    NOT?: FacebookPostWhereInput | FacebookPostWhereInput[]
    id?: StringFilter<"FacebookPost"> | string
    annID?: StringFilter<"FacebookPost"> | string
    userID?: StringFilter<"FacebookPost"> | string
    pageName?: StringFilter<"FacebookPost"> | string
    fbPostID?: StringFilter<"FacebookPost"> | string
    author?: StringFilter<"FacebookPost"> | string
    content?: StringFilter<"FacebookPost"> | string
    url?: StringFilter<"FacebookPost"> | string
    createdAt?: DateTimeFilter<"FacebookPost"> | Date | string
    status?: EnumStatusTypeFilter<"FacebookPost"> | $Enums.StatusType
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fbPageName?: XOR<FBPageScalarRelationFilter, FBPageWhereInput>
    todos?: ToDoListRelationFilter
  }

  export type FacebookPostOrderByWithRelationInput = {
    id?: SortOrder
    annID?: SortOrder
    userID?: SortOrder
    pageName?: SortOrder
    fbPostID?: SortOrder
    author?: SortOrder
    content?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    fbPageName?: FBPageOrderByWithRelationInput
    todos?: ToDoOrderByRelationAggregateInput
  }

  export type FacebookPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    annID?: string
    fbPostID?: string
    AND?: FacebookPostWhereInput | FacebookPostWhereInput[]
    OR?: FacebookPostWhereInput[]
    NOT?: FacebookPostWhereInput | FacebookPostWhereInput[]
    userID?: StringFilter<"FacebookPost"> | string
    pageName?: StringFilter<"FacebookPost"> | string
    author?: StringFilter<"FacebookPost"> | string
    content?: StringFilter<"FacebookPost"> | string
    url?: StringFilter<"FacebookPost"> | string
    createdAt?: DateTimeFilter<"FacebookPost"> | Date | string
    status?: EnumStatusTypeFilter<"FacebookPost"> | $Enums.StatusType
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fbPageName?: XOR<FBPageScalarRelationFilter, FBPageWhereInput>
    todos?: ToDoListRelationFilter
  }, "id" | "annID" | "fbPostID">

  export type FacebookPostOrderByWithAggregationInput = {
    id?: SortOrder
    annID?: SortOrder
    userID?: SortOrder
    pageName?: SortOrder
    fbPostID?: SortOrder
    author?: SortOrder
    content?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: FacebookPostCountOrderByAggregateInput
    _max?: FacebookPostMaxOrderByAggregateInput
    _min?: FacebookPostMinOrderByAggregateInput
  }

  export type FacebookPostScalarWhereWithAggregatesInput = {
    AND?: FacebookPostScalarWhereWithAggregatesInput | FacebookPostScalarWhereWithAggregatesInput[]
    OR?: FacebookPostScalarWhereWithAggregatesInput[]
    NOT?: FacebookPostScalarWhereWithAggregatesInput | FacebookPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacebookPost"> | string
    annID?: StringWithAggregatesFilter<"FacebookPost"> | string
    userID?: StringWithAggregatesFilter<"FacebookPost"> | string
    pageName?: StringWithAggregatesFilter<"FacebookPost"> | string
    fbPostID?: StringWithAggregatesFilter<"FacebookPost"> | string
    author?: StringWithAggregatesFilter<"FacebookPost"> | string
    content?: StringWithAggregatesFilter<"FacebookPost"> | string
    url?: StringWithAggregatesFilter<"FacebookPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FacebookPost"> | Date | string
    status?: EnumStatusTypeWithAggregatesFilter<"FacebookPost"> | $Enums.StatusType
  }

  export type ToDoWhereInput = {
    AND?: ToDoWhereInput | ToDoWhereInput[]
    OR?: ToDoWhereInput[]
    NOT?: ToDoWhereInput | ToDoWhereInput[]
    id?: StringFilter<"ToDo"> | string
    userID?: StringFilter<"ToDo"> | string
    fbID?: StringFilter<"ToDo"> | string
    title?: StringFilter<"ToDo"> | string
    description?: StringNullableFilter<"ToDo"> | string | null
    dueDate?: DateTimeFilter<"ToDo"> | Date | string
    createdAt?: DateTimeFilter<"ToDo"> | Date | string
    priority?: EnumPriorityTypeFilter<"ToDo"> | $Enums.PriorityType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    facebookPost?: XOR<FacebookPostScalarRelationFilter, FacebookPostWhereInput>
  }

  export type ToDoOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    fbID?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    priority?: SortOrder
    user?: UserOrderByWithRelationInput
    facebookPost?: FacebookPostOrderByWithRelationInput
  }

  export type ToDoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToDoWhereInput | ToDoWhereInput[]
    OR?: ToDoWhereInput[]
    NOT?: ToDoWhereInput | ToDoWhereInput[]
    userID?: StringFilter<"ToDo"> | string
    fbID?: StringFilter<"ToDo"> | string
    title?: StringFilter<"ToDo"> | string
    description?: StringNullableFilter<"ToDo"> | string | null
    dueDate?: DateTimeFilter<"ToDo"> | Date | string
    createdAt?: DateTimeFilter<"ToDo"> | Date | string
    priority?: EnumPriorityTypeFilter<"ToDo"> | $Enums.PriorityType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    facebookPost?: XOR<FacebookPostScalarRelationFilter, FacebookPostWhereInput>
  }, "id">

  export type ToDoOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    fbID?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    priority?: SortOrder
    _count?: ToDoCountOrderByAggregateInput
    _max?: ToDoMaxOrderByAggregateInput
    _min?: ToDoMinOrderByAggregateInput
  }

  export type ToDoScalarWhereWithAggregatesInput = {
    AND?: ToDoScalarWhereWithAggregatesInput | ToDoScalarWhereWithAggregatesInput[]
    OR?: ToDoScalarWhereWithAggregatesInput[]
    NOT?: ToDoScalarWhereWithAggregatesInput | ToDoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToDo"> | string
    userID?: StringWithAggregatesFilter<"ToDo"> | string
    fbID?: StringWithAggregatesFilter<"ToDo"> | string
    title?: StringWithAggregatesFilter<"ToDo"> | string
    description?: StringNullableWithAggregatesFilter<"ToDo"> | string | null
    dueDate?: DateTimeWithAggregatesFilter<"ToDo"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ToDo"> | Date | string
    priority?: EnumPriorityTypeWithAggregatesFilter<"ToDo"> | $Enums.PriorityType
  }

  export type FBPageWhereInput = {
    AND?: FBPageWhereInput | FBPageWhereInput[]
    OR?: FBPageWhereInput[]
    NOT?: FBPageWhereInput | FBPageWhereInput[]
    pageName?: StringFilter<"FBPage"> | string
    url?: StringFilter<"FBPage"> | string
    type?: EnumPageTypeFilter<"FBPage"> | $Enums.PageType
    facebookPost?: FacebookPostListRelationFilter
  }

  export type FBPageOrderByWithRelationInput = {
    pageName?: SortOrder
    url?: SortOrder
    type?: SortOrder
    facebookPost?: FacebookPostOrderByRelationAggregateInput
  }

  export type FBPageWhereUniqueInput = Prisma.AtLeast<{
    pageName?: string
    AND?: FBPageWhereInput | FBPageWhereInput[]
    OR?: FBPageWhereInput[]
    NOT?: FBPageWhereInput | FBPageWhereInput[]
    url?: StringFilter<"FBPage"> | string
    type?: EnumPageTypeFilter<"FBPage"> | $Enums.PageType
    facebookPost?: FacebookPostListRelationFilter
  }, "pageName">

  export type FBPageOrderByWithAggregationInput = {
    pageName?: SortOrder
    url?: SortOrder
    type?: SortOrder
    _count?: FBPageCountOrderByAggregateInput
    _max?: FBPageMaxOrderByAggregateInput
    _min?: FBPageMinOrderByAggregateInput
  }

  export type FBPageScalarWhereWithAggregatesInput = {
    AND?: FBPageScalarWhereWithAggregatesInput | FBPageScalarWhereWithAggregatesInput[]
    OR?: FBPageScalarWhereWithAggregatesInput[]
    NOT?: FBPageScalarWhereWithAggregatesInput | FBPageScalarWhereWithAggregatesInput[]
    pageName?: StringWithAggregatesFilter<"FBPage"> | string
    url?: StringWithAggregatesFilter<"FBPage"> | string
    type?: EnumPageTypeWithAggregatesFilter<"FBPage"> | $Enums.PageType
  }

  export type UserCreateInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    todo?: ToDoCreateNestedManyWithoutUserInput
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    facebookPost?: FacebookPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    todo?: ToDoUncheckedCreateNestedManyWithoutUserInput
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    facebookPost?: FacebookPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: ToDoUpdateManyWithoutUserNestedInput
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    facebookPost?: FacebookPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: ToDoUncheckedUpdateManyWithoutUserNestedInput
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    facebookPost?: FacebookPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
    user: UserCreateNestedOneWithoutAnnouncementInput
    fbPost?: FacebookPostCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    userID: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
    fbPost?: FacebookPostUncheckedCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
    fbPost?: FacebookPostUpdateOneWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
    fbPost?: FacebookPostUncheckedUpdateOneWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    userID: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
  }

  export type FacebookPostCreateInput = {
    id?: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    announcement: AnnouncementCreateNestedOneWithoutFbPostInput
    user: UserCreateNestedOneWithoutFacebookPostInput
    fbPageName: FBPageCreateNestedOneWithoutFacebookPostInput
    todos?: ToDoCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostUncheckedCreateInput = {
    id?: string
    annID: string
    userID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    todos?: ToDoUncheckedCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    announcement?: AnnouncementUpdateOneRequiredWithoutFbPostNestedInput
    user?: UserUpdateOneRequiredWithoutFacebookPostNestedInput
    fbPageName?: FBPageUpdateOneRequiredWithoutFacebookPostNestedInput
    todos?: ToDoUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    todos?: ToDoUncheckedUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostCreateManyInput = {
    id?: string
    annID: string
    userID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
  }

  export type FacebookPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
  }

  export type FacebookPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
  }

  export type ToDoCreateInput = {
    id?: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
    user: UserCreateNestedOneWithoutTodoInput
    facebookPost: FacebookPostCreateNestedOneWithoutTodosInput
  }

  export type ToDoUncheckedCreateInput = {
    id?: string
    userID: string
    fbID: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
  }

  export type ToDoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
    user?: UserUpdateOneRequiredWithoutTodoNestedInput
    facebookPost?: FacebookPostUpdateOneRequiredWithoutTodosNestedInput
  }

  export type ToDoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    fbID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type ToDoCreateManyInput = {
    id?: string
    userID: string
    fbID: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
  }

  export type ToDoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type ToDoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    fbID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type FBPageCreateInput = {
    pageName: string
    url: string
    type: $Enums.PageType
    facebookPost?: FacebookPostCreateNestedManyWithoutFbPageNameInput
  }

  export type FBPageUncheckedCreateInput = {
    pageName: string
    url: string
    type: $Enums.PageType
    facebookPost?: FacebookPostUncheckedCreateNestedManyWithoutFbPageNameInput
  }

  export type FBPageUpdateInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    facebookPost?: FacebookPostUpdateManyWithoutFbPageNameNestedInput
  }

  export type FBPageUncheckedUpdateInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
    facebookPost?: FacebookPostUncheckedUpdateManyWithoutFbPageNameNestedInput
  }

  export type FBPageCreateManyInput = {
    pageName: string
    url: string
    type: $Enums.PageType
  }

  export type FBPageUpdateManyMutationInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
  }

  export type FBPageUncheckedUpdateManyInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ToDoListRelationFilter = {
    every?: ToDoWhereInput
    some?: ToDoWhereInput
    none?: ToDoWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type FacebookPostListRelationFilter = {
    every?: FacebookPostWhereInput
    some?: FacebookPostWhereInput
    none?: FacebookPostWhereInput
  }

  export type ToDoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacebookPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    last_login_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    last_login_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fname?: SortOrder
    mname?: SortOrder
    lname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    last_login_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAnnouncementSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSource | EnumAnnouncementSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSourceFilter<$PrismaModel> | $Enums.AnnouncementSource
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FacebookPostNullableScalarRelationFilter = {
    is?: FacebookPostWhereInput | null
    isNot?: FacebookPostWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    Source?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    Source?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    Source?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAnnouncementSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSource | EnumAnnouncementSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSourceWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementSourceFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementSourceFilter<$PrismaModel>
  }

  export type EnumStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeFilter<$PrismaModel> | $Enums.StatusType
  }

  export type AnnouncementScalarRelationFilter = {
    is?: AnnouncementWhereInput
    isNot?: AnnouncementWhereInput
  }

  export type FBPageScalarRelationFilter = {
    is?: FBPageWhereInput
    isNot?: FBPageWhereInput
  }

  export type FacebookPostCountOrderByAggregateInput = {
    id?: SortOrder
    annID?: SortOrder
    userID?: SortOrder
    pageName?: SortOrder
    fbPostID?: SortOrder
    author?: SortOrder
    content?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type FacebookPostMaxOrderByAggregateInput = {
    id?: SortOrder
    annID?: SortOrder
    userID?: SortOrder
    pageName?: SortOrder
    fbPostID?: SortOrder
    author?: SortOrder
    content?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type FacebookPostMinOrderByAggregateInput = {
    id?: SortOrder
    annID?: SortOrder
    userID?: SortOrder
    pageName?: SortOrder
    fbPostID?: SortOrder
    author?: SortOrder
    content?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumStatusTypeFilter<$PrismaModel>
  }

  export type EnumPriorityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityType | EnumPriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityTypeFilter<$PrismaModel> | $Enums.PriorityType
  }

  export type FacebookPostScalarRelationFilter = {
    is?: FacebookPostWhereInput
    isNot?: FacebookPostWhereInput
  }

  export type ToDoCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    fbID?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    priority?: SortOrder
  }

  export type ToDoMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    fbID?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    priority?: SortOrder
  }

  export type ToDoMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    fbID?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    priority?: SortOrder
  }

  export type EnumPriorityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityType | EnumPriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriorityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityTypeFilter<$PrismaModel>
    _max?: NestedEnumPriorityTypeFilter<$PrismaModel>
  }

  export type EnumPageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeFilter<$PrismaModel> | $Enums.PageType
  }

  export type FBPageCountOrderByAggregateInput = {
    pageName?: SortOrder
    url?: SortOrder
    type?: SortOrder
  }

  export type FBPageMaxOrderByAggregateInput = {
    pageName?: SortOrder
    url?: SortOrder
    type?: SortOrder
  }

  export type FBPageMinOrderByAggregateInput = {
    pageName?: SortOrder
    url?: SortOrder
    type?: SortOrder
  }

  export type EnumPageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageTypeFilter<$PrismaModel>
    _max?: NestedEnumPageTypeFilter<$PrismaModel>
  }

  export type ToDoCreateNestedManyWithoutUserInput = {
    create?: XOR<ToDoCreateWithoutUserInput, ToDoUncheckedCreateWithoutUserInput> | ToDoCreateWithoutUserInput[] | ToDoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutUserInput | ToDoCreateOrConnectWithoutUserInput[]
    createMany?: ToDoCreateManyUserInputEnvelope
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type FacebookPostCreateNestedManyWithoutUserInput = {
    create?: XOR<FacebookPostCreateWithoutUserInput, FacebookPostUncheckedCreateWithoutUserInput> | FacebookPostCreateWithoutUserInput[] | FacebookPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutUserInput | FacebookPostCreateOrConnectWithoutUserInput[]
    createMany?: FacebookPostCreateManyUserInputEnvelope
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
  }

  export type ToDoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ToDoCreateWithoutUserInput, ToDoUncheckedCreateWithoutUserInput> | ToDoCreateWithoutUserInput[] | ToDoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutUserInput | ToDoCreateOrConnectWithoutUserInput[]
    createMany?: ToDoCreateManyUserInputEnvelope
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type FacebookPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FacebookPostCreateWithoutUserInput, FacebookPostUncheckedCreateWithoutUserInput> | FacebookPostCreateWithoutUserInput[] | FacebookPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutUserInput | FacebookPostCreateOrConnectWithoutUserInput[]
    createMany?: FacebookPostCreateManyUserInputEnvelope
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ToDoUpdateManyWithoutUserNestedInput = {
    create?: XOR<ToDoCreateWithoutUserInput, ToDoUncheckedCreateWithoutUserInput> | ToDoCreateWithoutUserInput[] | ToDoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutUserInput | ToDoCreateOrConnectWithoutUserInput[]
    upsert?: ToDoUpsertWithWhereUniqueWithoutUserInput | ToDoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ToDoCreateManyUserInputEnvelope
    set?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    disconnect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    delete?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    update?: ToDoUpdateWithWhereUniqueWithoutUserInput | ToDoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ToDoUpdateManyWithWhereWithoutUserInput | ToDoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ToDoScalarWhereInput | ToDoScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutUserInput | AnnouncementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutUserInput | AnnouncementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutUserInput | AnnouncementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type FacebookPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<FacebookPostCreateWithoutUserInput, FacebookPostUncheckedCreateWithoutUserInput> | FacebookPostCreateWithoutUserInput[] | FacebookPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutUserInput | FacebookPostCreateOrConnectWithoutUserInput[]
    upsert?: FacebookPostUpsertWithWhereUniqueWithoutUserInput | FacebookPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FacebookPostCreateManyUserInputEnvelope
    set?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    disconnect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    delete?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    update?: FacebookPostUpdateWithWhereUniqueWithoutUserInput | FacebookPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FacebookPostUpdateManyWithWhereWithoutUserInput | FacebookPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FacebookPostScalarWhereInput | FacebookPostScalarWhereInput[]
  }

  export type ToDoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ToDoCreateWithoutUserInput, ToDoUncheckedCreateWithoutUserInput> | ToDoCreateWithoutUserInput[] | ToDoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutUserInput | ToDoCreateOrConnectWithoutUserInput[]
    upsert?: ToDoUpsertWithWhereUniqueWithoutUserInput | ToDoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ToDoCreateManyUserInputEnvelope
    set?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    disconnect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    delete?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    update?: ToDoUpdateWithWhereUniqueWithoutUserInput | ToDoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ToDoUpdateManyWithWhereWithoutUserInput | ToDoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ToDoScalarWhereInput | ToDoScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutUserInput | AnnouncementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutUserInput | AnnouncementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutUserInput | AnnouncementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type FacebookPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FacebookPostCreateWithoutUserInput, FacebookPostUncheckedCreateWithoutUserInput> | FacebookPostCreateWithoutUserInput[] | FacebookPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutUserInput | FacebookPostCreateOrConnectWithoutUserInput[]
    upsert?: FacebookPostUpsertWithWhereUniqueWithoutUserInput | FacebookPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FacebookPostCreateManyUserInputEnvelope
    set?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    disconnect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    delete?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    update?: FacebookPostUpdateWithWhereUniqueWithoutUserInput | FacebookPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FacebookPostUpdateManyWithWhereWithoutUserInput | FacebookPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FacebookPostScalarWhereInput | FacebookPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnnouncementInput = {
    create?: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementInput
    connect?: UserWhereUniqueInput
  }

  export type FacebookPostCreateNestedOneWithoutAnnouncementInput = {
    create?: XOR<FacebookPostCreateWithoutAnnouncementInput, FacebookPostUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: FacebookPostCreateOrConnectWithoutAnnouncementInput
    connect?: FacebookPostWhereUniqueInput
  }

  export type FacebookPostUncheckedCreateNestedOneWithoutAnnouncementInput = {
    create?: XOR<FacebookPostCreateWithoutAnnouncementInput, FacebookPostUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: FacebookPostCreateOrConnectWithoutAnnouncementInput
    connect?: FacebookPostWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAnnouncementSourceFieldUpdateOperationsInput = {
    set?: $Enums.AnnouncementSource
  }

  export type UserUpdateOneRequiredWithoutAnnouncementNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementInput
    upsert?: UserUpsertWithoutAnnouncementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementInput, UserUpdateWithoutAnnouncementInput>, UserUncheckedUpdateWithoutAnnouncementInput>
  }

  export type FacebookPostUpdateOneWithoutAnnouncementNestedInput = {
    create?: XOR<FacebookPostCreateWithoutAnnouncementInput, FacebookPostUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: FacebookPostCreateOrConnectWithoutAnnouncementInput
    upsert?: FacebookPostUpsertWithoutAnnouncementInput
    disconnect?: FacebookPostWhereInput | boolean
    delete?: FacebookPostWhereInput | boolean
    connect?: FacebookPostWhereUniqueInput
    update?: XOR<XOR<FacebookPostUpdateToOneWithWhereWithoutAnnouncementInput, FacebookPostUpdateWithoutAnnouncementInput>, FacebookPostUncheckedUpdateWithoutAnnouncementInput>
  }

  export type FacebookPostUncheckedUpdateOneWithoutAnnouncementNestedInput = {
    create?: XOR<FacebookPostCreateWithoutAnnouncementInput, FacebookPostUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: FacebookPostCreateOrConnectWithoutAnnouncementInput
    upsert?: FacebookPostUpsertWithoutAnnouncementInput
    disconnect?: FacebookPostWhereInput | boolean
    delete?: FacebookPostWhereInput | boolean
    connect?: FacebookPostWhereUniqueInput
    update?: XOR<XOR<FacebookPostUpdateToOneWithWhereWithoutAnnouncementInput, FacebookPostUpdateWithoutAnnouncementInput>, FacebookPostUncheckedUpdateWithoutAnnouncementInput>
  }

  export type AnnouncementCreateNestedOneWithoutFbPostInput = {
    create?: XOR<AnnouncementCreateWithoutFbPostInput, AnnouncementUncheckedCreateWithoutFbPostInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFbPostInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFacebookPostInput = {
    create?: XOR<UserCreateWithoutFacebookPostInput, UserUncheckedCreateWithoutFacebookPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacebookPostInput
    connect?: UserWhereUniqueInput
  }

  export type FBPageCreateNestedOneWithoutFacebookPostInput = {
    create?: XOR<FBPageCreateWithoutFacebookPostInput, FBPageUncheckedCreateWithoutFacebookPostInput>
    connectOrCreate?: FBPageCreateOrConnectWithoutFacebookPostInput
    connect?: FBPageWhereUniqueInput
  }

  export type ToDoCreateNestedManyWithoutFacebookPostInput = {
    create?: XOR<ToDoCreateWithoutFacebookPostInput, ToDoUncheckedCreateWithoutFacebookPostInput> | ToDoCreateWithoutFacebookPostInput[] | ToDoUncheckedCreateWithoutFacebookPostInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutFacebookPostInput | ToDoCreateOrConnectWithoutFacebookPostInput[]
    createMany?: ToDoCreateManyFacebookPostInputEnvelope
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
  }

  export type ToDoUncheckedCreateNestedManyWithoutFacebookPostInput = {
    create?: XOR<ToDoCreateWithoutFacebookPostInput, ToDoUncheckedCreateWithoutFacebookPostInput> | ToDoCreateWithoutFacebookPostInput[] | ToDoUncheckedCreateWithoutFacebookPostInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutFacebookPostInput | ToDoCreateOrConnectWithoutFacebookPostInput[]
    createMany?: ToDoCreateManyFacebookPostInputEnvelope
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
  }

  export type EnumStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.StatusType
  }

  export type AnnouncementUpdateOneRequiredWithoutFbPostNestedInput = {
    create?: XOR<AnnouncementCreateWithoutFbPostInput, AnnouncementUncheckedCreateWithoutFbPostInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFbPostInput
    upsert?: AnnouncementUpsertWithoutFbPostInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutFbPostInput, AnnouncementUpdateWithoutFbPostInput>, AnnouncementUncheckedUpdateWithoutFbPostInput>
  }

  export type UserUpdateOneRequiredWithoutFacebookPostNestedInput = {
    create?: XOR<UserCreateWithoutFacebookPostInput, UserUncheckedCreateWithoutFacebookPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacebookPostInput
    upsert?: UserUpsertWithoutFacebookPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFacebookPostInput, UserUpdateWithoutFacebookPostInput>, UserUncheckedUpdateWithoutFacebookPostInput>
  }

  export type FBPageUpdateOneRequiredWithoutFacebookPostNestedInput = {
    create?: XOR<FBPageCreateWithoutFacebookPostInput, FBPageUncheckedCreateWithoutFacebookPostInput>
    connectOrCreate?: FBPageCreateOrConnectWithoutFacebookPostInput
    upsert?: FBPageUpsertWithoutFacebookPostInput
    connect?: FBPageWhereUniqueInput
    update?: XOR<XOR<FBPageUpdateToOneWithWhereWithoutFacebookPostInput, FBPageUpdateWithoutFacebookPostInput>, FBPageUncheckedUpdateWithoutFacebookPostInput>
  }

  export type ToDoUpdateManyWithoutFacebookPostNestedInput = {
    create?: XOR<ToDoCreateWithoutFacebookPostInput, ToDoUncheckedCreateWithoutFacebookPostInput> | ToDoCreateWithoutFacebookPostInput[] | ToDoUncheckedCreateWithoutFacebookPostInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutFacebookPostInput | ToDoCreateOrConnectWithoutFacebookPostInput[]
    upsert?: ToDoUpsertWithWhereUniqueWithoutFacebookPostInput | ToDoUpsertWithWhereUniqueWithoutFacebookPostInput[]
    createMany?: ToDoCreateManyFacebookPostInputEnvelope
    set?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    disconnect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    delete?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    update?: ToDoUpdateWithWhereUniqueWithoutFacebookPostInput | ToDoUpdateWithWhereUniqueWithoutFacebookPostInput[]
    updateMany?: ToDoUpdateManyWithWhereWithoutFacebookPostInput | ToDoUpdateManyWithWhereWithoutFacebookPostInput[]
    deleteMany?: ToDoScalarWhereInput | ToDoScalarWhereInput[]
  }

  export type ToDoUncheckedUpdateManyWithoutFacebookPostNestedInput = {
    create?: XOR<ToDoCreateWithoutFacebookPostInput, ToDoUncheckedCreateWithoutFacebookPostInput> | ToDoCreateWithoutFacebookPostInput[] | ToDoUncheckedCreateWithoutFacebookPostInput[]
    connectOrCreate?: ToDoCreateOrConnectWithoutFacebookPostInput | ToDoCreateOrConnectWithoutFacebookPostInput[]
    upsert?: ToDoUpsertWithWhereUniqueWithoutFacebookPostInput | ToDoUpsertWithWhereUniqueWithoutFacebookPostInput[]
    createMany?: ToDoCreateManyFacebookPostInputEnvelope
    set?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    disconnect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    delete?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    connect?: ToDoWhereUniqueInput | ToDoWhereUniqueInput[]
    update?: ToDoUpdateWithWhereUniqueWithoutFacebookPostInput | ToDoUpdateWithWhereUniqueWithoutFacebookPostInput[]
    updateMany?: ToDoUpdateManyWithWhereWithoutFacebookPostInput | ToDoUpdateManyWithWhereWithoutFacebookPostInput[]
    deleteMany?: ToDoScalarWhereInput | ToDoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTodoInput = {
    create?: XOR<UserCreateWithoutTodoInput, UserUncheckedCreateWithoutTodoInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodoInput
    connect?: UserWhereUniqueInput
  }

  export type FacebookPostCreateNestedOneWithoutTodosInput = {
    create?: XOR<FacebookPostCreateWithoutTodosInput, FacebookPostUncheckedCreateWithoutTodosInput>
    connectOrCreate?: FacebookPostCreateOrConnectWithoutTodosInput
    connect?: FacebookPostWhereUniqueInput
  }

  export type EnumPriorityTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriorityType
  }

  export type UserUpdateOneRequiredWithoutTodoNestedInput = {
    create?: XOR<UserCreateWithoutTodoInput, UserUncheckedCreateWithoutTodoInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodoInput
    upsert?: UserUpsertWithoutTodoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodoInput, UserUpdateWithoutTodoInput>, UserUncheckedUpdateWithoutTodoInput>
  }

  export type FacebookPostUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<FacebookPostCreateWithoutTodosInput, FacebookPostUncheckedCreateWithoutTodosInput>
    connectOrCreate?: FacebookPostCreateOrConnectWithoutTodosInput
    upsert?: FacebookPostUpsertWithoutTodosInput
    connect?: FacebookPostWhereUniqueInput
    update?: XOR<XOR<FacebookPostUpdateToOneWithWhereWithoutTodosInput, FacebookPostUpdateWithoutTodosInput>, FacebookPostUncheckedUpdateWithoutTodosInput>
  }

  export type FacebookPostCreateNestedManyWithoutFbPageNameInput = {
    create?: XOR<FacebookPostCreateWithoutFbPageNameInput, FacebookPostUncheckedCreateWithoutFbPageNameInput> | FacebookPostCreateWithoutFbPageNameInput[] | FacebookPostUncheckedCreateWithoutFbPageNameInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutFbPageNameInput | FacebookPostCreateOrConnectWithoutFbPageNameInput[]
    createMany?: FacebookPostCreateManyFbPageNameInputEnvelope
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
  }

  export type FacebookPostUncheckedCreateNestedManyWithoutFbPageNameInput = {
    create?: XOR<FacebookPostCreateWithoutFbPageNameInput, FacebookPostUncheckedCreateWithoutFbPageNameInput> | FacebookPostCreateWithoutFbPageNameInput[] | FacebookPostUncheckedCreateWithoutFbPageNameInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutFbPageNameInput | FacebookPostCreateOrConnectWithoutFbPageNameInput[]
    createMany?: FacebookPostCreateManyFbPageNameInputEnvelope
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
  }

  export type EnumPageTypeFieldUpdateOperationsInput = {
    set?: $Enums.PageType
  }

  export type FacebookPostUpdateManyWithoutFbPageNameNestedInput = {
    create?: XOR<FacebookPostCreateWithoutFbPageNameInput, FacebookPostUncheckedCreateWithoutFbPageNameInput> | FacebookPostCreateWithoutFbPageNameInput[] | FacebookPostUncheckedCreateWithoutFbPageNameInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutFbPageNameInput | FacebookPostCreateOrConnectWithoutFbPageNameInput[]
    upsert?: FacebookPostUpsertWithWhereUniqueWithoutFbPageNameInput | FacebookPostUpsertWithWhereUniqueWithoutFbPageNameInput[]
    createMany?: FacebookPostCreateManyFbPageNameInputEnvelope
    set?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    disconnect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    delete?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    update?: FacebookPostUpdateWithWhereUniqueWithoutFbPageNameInput | FacebookPostUpdateWithWhereUniqueWithoutFbPageNameInput[]
    updateMany?: FacebookPostUpdateManyWithWhereWithoutFbPageNameInput | FacebookPostUpdateManyWithWhereWithoutFbPageNameInput[]
    deleteMany?: FacebookPostScalarWhereInput | FacebookPostScalarWhereInput[]
  }

  export type FacebookPostUncheckedUpdateManyWithoutFbPageNameNestedInput = {
    create?: XOR<FacebookPostCreateWithoutFbPageNameInput, FacebookPostUncheckedCreateWithoutFbPageNameInput> | FacebookPostCreateWithoutFbPageNameInput[] | FacebookPostUncheckedCreateWithoutFbPageNameInput[]
    connectOrCreate?: FacebookPostCreateOrConnectWithoutFbPageNameInput | FacebookPostCreateOrConnectWithoutFbPageNameInput[]
    upsert?: FacebookPostUpsertWithWhereUniqueWithoutFbPageNameInput | FacebookPostUpsertWithWhereUniqueWithoutFbPageNameInput[]
    createMany?: FacebookPostCreateManyFbPageNameInputEnvelope
    set?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    disconnect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    delete?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    connect?: FacebookPostWhereUniqueInput | FacebookPostWhereUniqueInput[]
    update?: FacebookPostUpdateWithWhereUniqueWithoutFbPageNameInput | FacebookPostUpdateWithWhereUniqueWithoutFbPageNameInput[]
    updateMany?: FacebookPostUpdateManyWithWhereWithoutFbPageNameInput | FacebookPostUpdateManyWithWhereWithoutFbPageNameInput[]
    deleteMany?: FacebookPostScalarWhereInput | FacebookPostScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAnnouncementSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSource | EnumAnnouncementSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSourceFilter<$PrismaModel> | $Enums.AnnouncementSource
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAnnouncementSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementSource | EnumAnnouncementSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementSource[] | ListEnumAnnouncementSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementSourceWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementSourceFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementSourceFilter<$PrismaModel>
  }

  export type NestedEnumStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeFilter<$PrismaModel> | $Enums.StatusType
  }

  export type NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumStatusTypeFilter<$PrismaModel>
  }

  export type NestedEnumPriorityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityType | EnumPriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityTypeFilter<$PrismaModel> | $Enums.PriorityType
  }

  export type NestedEnumPriorityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriorityType | EnumPriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriorityType[] | ListEnumPriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriorityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityTypeFilter<$PrismaModel>
    _max?: NestedEnumPriorityTypeFilter<$PrismaModel>
  }

  export type NestedEnumPageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeFilter<$PrismaModel> | $Enums.PageType
  }

  export type NestedEnumPageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageType | EnumPageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageType[] | ListEnumPageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPageTypeWithAggregatesFilter<$PrismaModel> | $Enums.PageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageTypeFilter<$PrismaModel>
    _max?: NestedEnumPageTypeFilter<$PrismaModel>
  }

  export type ToDoCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
    facebookPost: FacebookPostCreateNestedOneWithoutTodosInput
  }

  export type ToDoUncheckedCreateWithoutUserInput = {
    id?: string
    fbID: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
  }

  export type ToDoCreateOrConnectWithoutUserInput = {
    where: ToDoWhereUniqueInput
    create: XOR<ToDoCreateWithoutUserInput, ToDoUncheckedCreateWithoutUserInput>
  }

  export type ToDoCreateManyUserInputEnvelope = {
    data: ToDoCreateManyUserInput | ToDoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
    fbPost?: FacebookPostCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
    fbPost?: FacebookPostUncheckedCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementCreateManyUserInputEnvelope = {
    data: AnnouncementCreateManyUserInput | AnnouncementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FacebookPostCreateWithoutUserInput = {
    id?: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    announcement: AnnouncementCreateNestedOneWithoutFbPostInput
    fbPageName: FBPageCreateNestedOneWithoutFacebookPostInput
    todos?: ToDoCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostUncheckedCreateWithoutUserInput = {
    id?: string
    annID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    todos?: ToDoUncheckedCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostCreateOrConnectWithoutUserInput = {
    where: FacebookPostWhereUniqueInput
    create: XOR<FacebookPostCreateWithoutUserInput, FacebookPostUncheckedCreateWithoutUserInput>
  }

  export type FacebookPostCreateManyUserInputEnvelope = {
    data: FacebookPostCreateManyUserInput | FacebookPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ToDoUpsertWithWhereUniqueWithoutUserInput = {
    where: ToDoWhereUniqueInput
    update: XOR<ToDoUpdateWithoutUserInput, ToDoUncheckedUpdateWithoutUserInput>
    create: XOR<ToDoCreateWithoutUserInput, ToDoUncheckedCreateWithoutUserInput>
  }

  export type ToDoUpdateWithWhereUniqueWithoutUserInput = {
    where: ToDoWhereUniqueInput
    data: XOR<ToDoUpdateWithoutUserInput, ToDoUncheckedUpdateWithoutUserInput>
  }

  export type ToDoUpdateManyWithWhereWithoutUserInput = {
    where: ToDoScalarWhereInput
    data: XOR<ToDoUpdateManyMutationInput, ToDoUncheckedUpdateManyWithoutUserInput>
  }

  export type ToDoScalarWhereInput = {
    AND?: ToDoScalarWhereInput | ToDoScalarWhereInput[]
    OR?: ToDoScalarWhereInput[]
    NOT?: ToDoScalarWhereInput | ToDoScalarWhereInput[]
    id?: StringFilter<"ToDo"> | string
    userID?: StringFilter<"ToDo"> | string
    fbID?: StringFilter<"ToDo"> | string
    title?: StringFilter<"ToDo"> | string
    description?: StringNullableFilter<"ToDo"> | string | null
    dueDate?: DateTimeFilter<"ToDo"> | Date | string
    createdAt?: DateTimeFilter<"ToDo"> | Date | string
    priority?: EnumPriorityTypeFilter<"ToDo"> | $Enums.PriorityType
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutUserInput, AnnouncementUncheckedUpdateWithoutUserInput>
    create: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutUserInput, AnnouncementUncheckedUpdateWithoutUserInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutUserInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutUserInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: StringFilter<"Announcement"> | string
    userID?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    description?: StringNullableFilter<"Announcement"> | string | null
    createdBy?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    Source?: EnumAnnouncementSourceFilter<"Announcement"> | $Enums.AnnouncementSource
  }

  export type FacebookPostUpsertWithWhereUniqueWithoutUserInput = {
    where: FacebookPostWhereUniqueInput
    update: XOR<FacebookPostUpdateWithoutUserInput, FacebookPostUncheckedUpdateWithoutUserInput>
    create: XOR<FacebookPostCreateWithoutUserInput, FacebookPostUncheckedCreateWithoutUserInput>
  }

  export type FacebookPostUpdateWithWhereUniqueWithoutUserInput = {
    where: FacebookPostWhereUniqueInput
    data: XOR<FacebookPostUpdateWithoutUserInput, FacebookPostUncheckedUpdateWithoutUserInput>
  }

  export type FacebookPostUpdateManyWithWhereWithoutUserInput = {
    where: FacebookPostScalarWhereInput
    data: XOR<FacebookPostUpdateManyMutationInput, FacebookPostUncheckedUpdateManyWithoutUserInput>
  }

  export type FacebookPostScalarWhereInput = {
    AND?: FacebookPostScalarWhereInput | FacebookPostScalarWhereInput[]
    OR?: FacebookPostScalarWhereInput[]
    NOT?: FacebookPostScalarWhereInput | FacebookPostScalarWhereInput[]
    id?: StringFilter<"FacebookPost"> | string
    annID?: StringFilter<"FacebookPost"> | string
    userID?: StringFilter<"FacebookPost"> | string
    pageName?: StringFilter<"FacebookPost"> | string
    fbPostID?: StringFilter<"FacebookPost"> | string
    author?: StringFilter<"FacebookPost"> | string
    content?: StringFilter<"FacebookPost"> | string
    url?: StringFilter<"FacebookPost"> | string
    createdAt?: DateTimeFilter<"FacebookPost"> | Date | string
    status?: EnumStatusTypeFilter<"FacebookPost"> | $Enums.StatusType
  }

  export type UserCreateWithoutAnnouncementInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    todo?: ToDoCreateNestedManyWithoutUserInput
    facebookPost?: FacebookPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    todo?: ToDoUncheckedCreateNestedManyWithoutUserInput
    facebookPost?: FacebookPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
  }

  export type FacebookPostCreateWithoutAnnouncementInput = {
    id?: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    user: UserCreateNestedOneWithoutFacebookPostInput
    fbPageName: FBPageCreateNestedOneWithoutFacebookPostInput
    todos?: ToDoCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    userID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    todos?: ToDoUncheckedCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostCreateOrConnectWithoutAnnouncementInput = {
    where: FacebookPostWhereUniqueInput
    create: XOR<FacebookPostCreateWithoutAnnouncementInput, FacebookPostUncheckedCreateWithoutAnnouncementInput>
  }

  export type UserUpsertWithoutAnnouncementInput = {
    update: XOR<UserUpdateWithoutAnnouncementInput, UserUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementInput, UserUncheckedUpdateWithoutAnnouncementInput>
  }

  export type UserUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: ToDoUpdateManyWithoutUserNestedInput
    facebookPost?: FacebookPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: ToDoUncheckedUpdateManyWithoutUserNestedInput
    facebookPost?: FacebookPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacebookPostUpsertWithoutAnnouncementInput = {
    update: XOR<FacebookPostUpdateWithoutAnnouncementInput, FacebookPostUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<FacebookPostCreateWithoutAnnouncementInput, FacebookPostUncheckedCreateWithoutAnnouncementInput>
    where?: FacebookPostWhereInput
  }

  export type FacebookPostUpdateToOneWithWhereWithoutAnnouncementInput = {
    where?: FacebookPostWhereInput
    data: XOR<FacebookPostUpdateWithoutAnnouncementInput, FacebookPostUncheckedUpdateWithoutAnnouncementInput>
  }

  export type FacebookPostUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    user?: UserUpdateOneRequiredWithoutFacebookPostNestedInput
    fbPageName?: FBPageUpdateOneRequiredWithoutFacebookPostNestedInput
    todos?: ToDoUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    todos?: ToDoUncheckedUpdateManyWithoutFacebookPostNestedInput
  }

  export type AnnouncementCreateWithoutFbPostInput = {
    id?: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
    user: UserCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutFbPostInput = {
    id?: string
    userID: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
  }

  export type AnnouncementCreateOrConnectWithoutFbPostInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutFbPostInput, AnnouncementUncheckedCreateWithoutFbPostInput>
  }

  export type UserCreateWithoutFacebookPostInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    todo?: ToDoCreateNestedManyWithoutUserInput
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFacebookPostInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    todo?: ToDoUncheckedCreateNestedManyWithoutUserInput
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFacebookPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFacebookPostInput, UserUncheckedCreateWithoutFacebookPostInput>
  }

  export type FBPageCreateWithoutFacebookPostInput = {
    pageName: string
    url: string
    type: $Enums.PageType
  }

  export type FBPageUncheckedCreateWithoutFacebookPostInput = {
    pageName: string
    url: string
    type: $Enums.PageType
  }

  export type FBPageCreateOrConnectWithoutFacebookPostInput = {
    where: FBPageWhereUniqueInput
    create: XOR<FBPageCreateWithoutFacebookPostInput, FBPageUncheckedCreateWithoutFacebookPostInput>
  }

  export type ToDoCreateWithoutFacebookPostInput = {
    id?: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
    user: UserCreateNestedOneWithoutTodoInput
  }

  export type ToDoUncheckedCreateWithoutFacebookPostInput = {
    id?: string
    userID: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
  }

  export type ToDoCreateOrConnectWithoutFacebookPostInput = {
    where: ToDoWhereUniqueInput
    create: XOR<ToDoCreateWithoutFacebookPostInput, ToDoUncheckedCreateWithoutFacebookPostInput>
  }

  export type ToDoCreateManyFacebookPostInputEnvelope = {
    data: ToDoCreateManyFacebookPostInput | ToDoCreateManyFacebookPostInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementUpsertWithoutFbPostInput = {
    update: XOR<AnnouncementUpdateWithoutFbPostInput, AnnouncementUncheckedUpdateWithoutFbPostInput>
    create: XOR<AnnouncementCreateWithoutFbPostInput, AnnouncementUncheckedCreateWithoutFbPostInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutFbPostInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutFbPostInput, AnnouncementUncheckedUpdateWithoutFbPostInput>
  }

  export type AnnouncementUpdateWithoutFbPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutFbPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
  }

  export type UserUpsertWithoutFacebookPostInput = {
    update: XOR<UserUpdateWithoutFacebookPostInput, UserUncheckedUpdateWithoutFacebookPostInput>
    create: XOR<UserCreateWithoutFacebookPostInput, UserUncheckedCreateWithoutFacebookPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFacebookPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFacebookPostInput, UserUncheckedUpdateWithoutFacebookPostInput>
  }

  export type UserUpdateWithoutFacebookPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: ToDoUpdateManyWithoutUserNestedInput
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFacebookPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    todo?: ToDoUncheckedUpdateManyWithoutUserNestedInput
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FBPageUpsertWithoutFacebookPostInput = {
    update: XOR<FBPageUpdateWithoutFacebookPostInput, FBPageUncheckedUpdateWithoutFacebookPostInput>
    create: XOR<FBPageCreateWithoutFacebookPostInput, FBPageUncheckedCreateWithoutFacebookPostInput>
    where?: FBPageWhereInput
  }

  export type FBPageUpdateToOneWithWhereWithoutFacebookPostInput = {
    where?: FBPageWhereInput
    data: XOR<FBPageUpdateWithoutFacebookPostInput, FBPageUncheckedUpdateWithoutFacebookPostInput>
  }

  export type FBPageUpdateWithoutFacebookPostInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
  }

  export type FBPageUncheckedUpdateWithoutFacebookPostInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPageTypeFieldUpdateOperationsInput | $Enums.PageType
  }

  export type ToDoUpsertWithWhereUniqueWithoutFacebookPostInput = {
    where: ToDoWhereUniqueInput
    update: XOR<ToDoUpdateWithoutFacebookPostInput, ToDoUncheckedUpdateWithoutFacebookPostInput>
    create: XOR<ToDoCreateWithoutFacebookPostInput, ToDoUncheckedCreateWithoutFacebookPostInput>
  }

  export type ToDoUpdateWithWhereUniqueWithoutFacebookPostInput = {
    where: ToDoWhereUniqueInput
    data: XOR<ToDoUpdateWithoutFacebookPostInput, ToDoUncheckedUpdateWithoutFacebookPostInput>
  }

  export type ToDoUpdateManyWithWhereWithoutFacebookPostInput = {
    where: ToDoScalarWhereInput
    data: XOR<ToDoUpdateManyMutationInput, ToDoUncheckedUpdateManyWithoutFacebookPostInput>
  }

  export type UserCreateWithoutTodoInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    facebookPost?: FacebookPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTodoInput = {
    id?: string
    fname: string
    mname: string
    lname: string
    email: string
    password: string
    createdAt?: Date | string
    last_login_at: Date | string
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    facebookPost?: FacebookPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTodoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodoInput, UserUncheckedCreateWithoutTodoInput>
  }

  export type FacebookPostCreateWithoutTodosInput = {
    id?: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    announcement: AnnouncementCreateNestedOneWithoutFbPostInput
    user: UserCreateNestedOneWithoutFacebookPostInput
    fbPageName: FBPageCreateNestedOneWithoutFacebookPostInput
  }

  export type FacebookPostUncheckedCreateWithoutTodosInput = {
    id?: string
    annID: string
    userID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
  }

  export type FacebookPostCreateOrConnectWithoutTodosInput = {
    where: FacebookPostWhereUniqueInput
    create: XOR<FacebookPostCreateWithoutTodosInput, FacebookPostUncheckedCreateWithoutTodosInput>
  }

  export type UserUpsertWithoutTodoInput = {
    update: XOR<UserUpdateWithoutTodoInput, UserUncheckedUpdateWithoutTodoInput>
    create: XOR<UserCreateWithoutTodoInput, UserUncheckedCreateWithoutTodoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodoInput, UserUncheckedUpdateWithoutTodoInput>
  }

  export type UserUpdateWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    facebookPost?: FacebookPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fname?: StringFieldUpdateOperationsInput | string
    mname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    facebookPost?: FacebookPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacebookPostUpsertWithoutTodosInput = {
    update: XOR<FacebookPostUpdateWithoutTodosInput, FacebookPostUncheckedUpdateWithoutTodosInput>
    create: XOR<FacebookPostCreateWithoutTodosInput, FacebookPostUncheckedCreateWithoutTodosInput>
    where?: FacebookPostWhereInput
  }

  export type FacebookPostUpdateToOneWithWhereWithoutTodosInput = {
    where?: FacebookPostWhereInput
    data: XOR<FacebookPostUpdateWithoutTodosInput, FacebookPostUncheckedUpdateWithoutTodosInput>
  }

  export type FacebookPostUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    announcement?: AnnouncementUpdateOneRequiredWithoutFbPostNestedInput
    user?: UserUpdateOneRequiredWithoutFacebookPostNestedInput
    fbPageName?: FBPageUpdateOneRequiredWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateWithoutTodosInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
  }

  export type FacebookPostCreateWithoutFbPageNameInput = {
    id?: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    announcement: AnnouncementCreateNestedOneWithoutFbPostInput
    user: UserCreateNestedOneWithoutFacebookPostInput
    todos?: ToDoCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostUncheckedCreateWithoutFbPageNameInput = {
    id?: string
    annID: string
    userID: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
    todos?: ToDoUncheckedCreateNestedManyWithoutFacebookPostInput
  }

  export type FacebookPostCreateOrConnectWithoutFbPageNameInput = {
    where: FacebookPostWhereUniqueInput
    create: XOR<FacebookPostCreateWithoutFbPageNameInput, FacebookPostUncheckedCreateWithoutFbPageNameInput>
  }

  export type FacebookPostCreateManyFbPageNameInputEnvelope = {
    data: FacebookPostCreateManyFbPageNameInput | FacebookPostCreateManyFbPageNameInput[]
    skipDuplicates?: boolean
  }

  export type FacebookPostUpsertWithWhereUniqueWithoutFbPageNameInput = {
    where: FacebookPostWhereUniqueInput
    update: XOR<FacebookPostUpdateWithoutFbPageNameInput, FacebookPostUncheckedUpdateWithoutFbPageNameInput>
    create: XOR<FacebookPostCreateWithoutFbPageNameInput, FacebookPostUncheckedCreateWithoutFbPageNameInput>
  }

  export type FacebookPostUpdateWithWhereUniqueWithoutFbPageNameInput = {
    where: FacebookPostWhereUniqueInput
    data: XOR<FacebookPostUpdateWithoutFbPageNameInput, FacebookPostUncheckedUpdateWithoutFbPageNameInput>
  }

  export type FacebookPostUpdateManyWithWhereWithoutFbPageNameInput = {
    where: FacebookPostScalarWhereInput
    data: XOR<FacebookPostUpdateManyMutationInput, FacebookPostUncheckedUpdateManyWithoutFbPageNameInput>
  }

  export type ToDoCreateManyUserInput = {
    id?: string
    fbID: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
  }

  export type AnnouncementCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    createdBy: string
    createdAt: Date | string
    Source: $Enums.AnnouncementSource
  }

  export type FacebookPostCreateManyUserInput = {
    id?: string
    annID: string
    pageName: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
  }

  export type ToDoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
    facebookPost?: FacebookPostUpdateOneRequiredWithoutTodosNestedInput
  }

  export type ToDoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type ToDoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type AnnouncementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
    fbPost?: FacebookPostUpdateOneWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
    fbPost?: FacebookPostUncheckedUpdateOneWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Source?: EnumAnnouncementSourceFieldUpdateOperationsInput | $Enums.AnnouncementSource
  }

  export type FacebookPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    announcement?: AnnouncementUpdateOneRequiredWithoutFbPostNestedInput
    fbPageName?: FBPageUpdateOneRequiredWithoutFacebookPostNestedInput
    todos?: ToDoUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    todos?: ToDoUncheckedUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    pageName?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
  }

  export type ToDoCreateManyFacebookPostInput = {
    id?: string
    userID: string
    title: string
    description?: string | null
    dueDate: Date | string
    createdAt?: Date | string
    priority: $Enums.PriorityType
  }

  export type ToDoUpdateWithoutFacebookPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
    user?: UserUpdateOneRequiredWithoutTodoNestedInput
  }

  export type ToDoUncheckedUpdateWithoutFacebookPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type ToDoUncheckedUpdateManyWithoutFacebookPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: EnumPriorityTypeFieldUpdateOperationsInput | $Enums.PriorityType
  }

  export type FacebookPostCreateManyFbPageNameInput = {
    id?: string
    annID: string
    userID: string
    fbPostID: string
    author: string
    content: string
    url: string
    createdAt: Date | string
    status: $Enums.StatusType
  }

  export type FacebookPostUpdateWithoutFbPageNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    announcement?: AnnouncementUpdateOneRequiredWithoutFbPostNestedInput
    user?: UserUpdateOneRequiredWithoutFacebookPostNestedInput
    todos?: ToDoUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateWithoutFbPageNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    todos?: ToDoUncheckedUpdateManyWithoutFacebookPostNestedInput
  }

  export type FacebookPostUncheckedUpdateManyWithoutFbPageNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    annID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    fbPostID?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}