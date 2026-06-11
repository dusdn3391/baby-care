
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PushSubscription
 * 
 */
export type PushSubscription = $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Baby
 * 
 */
export type Baby = $Result.DefaultSelection<Prisma.$BabyPayload>
/**
 * Model Feeding
 * 
 */
export type Feeding = $Result.DefaultSelection<Prisma.$FeedingPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PushSubscriptions
 * const pushSubscriptions = await prisma.pushSubscription.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PushSubscriptions
   * const pushSubscriptions = await prisma.pushSubscription.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushSubscriptions
    * const pushSubscriptions = await prisma.pushSubscription.findMany()
    * ```
    */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.baby`: Exposes CRUD operations for the **Baby** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Babies
    * const babies = await prisma.baby.findMany()
    * ```
    */
  get baby(): Prisma.BabyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeding`: Exposes CRUD operations for the **Feeding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedings
    * const feedings = await prisma.feeding.findMany()
    * ```
    */
  get feeding(): Prisma.FeedingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PushSubscription: 'PushSubscription',
    User: 'User',
    Baby: 'Baby',
    Feeding: 'Feeding',
    Meal: 'Meal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pushSubscription" | "user" | "baby" | "feeding" | "meal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>
        fields: Prisma.PushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushSubscription>
          }
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionCountAggregateOutputType> | number
          }
        }
      }
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
      Baby: {
        payload: Prisma.$BabyPayload<ExtArgs>
        fields: Prisma.BabyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BabyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BabyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          findFirst: {
            args: Prisma.BabyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BabyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          findMany: {
            args: Prisma.BabyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>[]
          }
          create: {
            args: Prisma.BabyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          createMany: {
            args: Prisma.BabyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BabyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>[]
          }
          delete: {
            args: Prisma.BabyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          update: {
            args: Prisma.BabyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          deleteMany: {
            args: Prisma.BabyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BabyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BabyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>[]
          }
          upsert: {
            args: Prisma.BabyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          aggregate: {
            args: Prisma.BabyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaby>
          }
          groupBy: {
            args: Prisma.BabyGroupByArgs<ExtArgs>
            result: $Utils.Optional<BabyGroupByOutputType>[]
          }
          count: {
            args: Prisma.BabyCountArgs<ExtArgs>
            result: $Utils.Optional<BabyCountAggregateOutputType> | number
          }
        }
      }
      Feeding: {
        payload: Prisma.$FeedingPayload<ExtArgs>
        fields: Prisma.FeedingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>
          }
          findFirst: {
            args: Prisma.FeedingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>
          }
          findMany: {
            args: Prisma.FeedingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>[]
          }
          create: {
            args: Prisma.FeedingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>
          }
          createMany: {
            args: Prisma.FeedingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>[]
          }
          delete: {
            args: Prisma.FeedingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>
          }
          update: {
            args: Prisma.FeedingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>
          }
          deleteMany: {
            args: Prisma.FeedingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>[]
          }
          upsert: {
            args: Prisma.FeedingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedingPayload>
          }
          aggregate: {
            args: Prisma.FeedingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeding>
          }
          groupBy: {
            args: Prisma.FeedingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedingCountArgs<ExtArgs>
            result: $Utils.Optional<FeedingCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    pushSubscription?: PushSubscriptionOmit
    user?: UserOmit
    baby?: BabyOmit
    feeding?: FeedingOmit
    meal?: MealOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    babies: number
    pushSubscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    babies?: boolean | UserCountOutputTypeCountBabiesArgs
    pushSubscriptions?: boolean | UserCountOutputTypeCountPushSubscriptionsArgs
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
  export type UserCountOutputTypeCountBabiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BabyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
  }


  /**
   * Count Type BabyCountOutputType
   */

  export type BabyCountOutputType = {
    feedings: number
    meals: number
  }

  export type BabyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedings?: boolean | BabyCountOutputTypeCountFeedingsArgs
    meals?: boolean | BabyCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes
  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyCountOutputType
     */
    select?: BabyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeCountFeedingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedingWhereInput
  }

  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null
    _avg: PushSubscriptionAvgAggregateOutputType | null
    _sum: PushSubscriptionSumAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  export type PushSubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PushSubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PushSubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
  }

  export type PushSubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
  }

  export type PushSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    p256dh: number
    auth: number
    createdAt: number
    _all: number
  }


  export type PushSubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PushSubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PushSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
  }

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
  }

  export type PushSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    _all?: true
  }

  export type PushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushSubscriptions
    **/
    _count?: true | PushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PushSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PushSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type GetPushSubscriptionAggregateType<T extends PushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>
  }




  export type PushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithAggregationInput | PushSubscriptionOrderByWithAggregationInput[]
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum
    having?: PushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushSubscriptionCountAggregateInputType | true
    _avg?: PushSubscriptionAvgAggregateInputType
    _sum?: PushSubscriptionSumAggregateInputType
    _min?: PushSubscriptionMinAggregateInputType
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type PushSubscriptionGroupByOutputType = {
    id: number
    userId: number
    endpoint: string
    p256dh: string
    auth: string
    createdAt: Date
    _count: PushSubscriptionCountAggregateOutputType | null
    _avg: PushSubscriptionAvgAggregateOutputType | null
    _sum: PushSubscriptionSumAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  type GetPushSubscriptionGroupByPayload<T extends PushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
  }

  export type PushSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "endpoint" | "p256dh" | "auth" | "createdAt", ExtArgs["result"]["pushSubscription"]>
  export type PushSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      endpoint: string
      p256dh: string
      auth: string
      createdAt: Date
    }, ExtArgs["result"]["pushSubscription"]>
    composites: {}
  }

  type PushSubscriptionGetPayload<S extends boolean | null | undefined | PushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>

  type PushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushSubscriptionCountAggregateInputType | true
    }

  export interface PushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushSubscription'], meta: { name: 'PushSubscription' } }
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     * 
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushSubscriptionFindManyArgs>(args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     * 
     */
    create<T extends PushSubscriptionCreateArgs>(args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushSubscriptions and returns the data saved in the database.
     * @param {PushSubscriptionCreateManyAndReturnArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     * 
     */
    delete<T extends PushSubscriptionDeleteArgs>(args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushSubscriptionUpdateArgs>(args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions and returns the data updated in the database.
     * @param {PushSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many PushSubscriptions.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PushSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushSubscriptionAggregateArgs>(args: Subset<T, PushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PushSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushSubscription model
   */
  readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PushSubscription model
   */
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", 'Int'>
    readonly userId: FieldRef<"PushSubscription", 'Int'>
    readonly endpoint: FieldRef<"PushSubscription", 'String'>
    readonly p256dh: FieldRef<"PushSubscription", 'String'>
    readonly auth: FieldRef<"PushSubscription", 'String'>
    readonly createdAt: FieldRef<"PushSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
  }

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription createManyAndReturn
   */
  export type PushSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PushSubscription updateManyAndReturn
   */
  export type PushSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
  }

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    babies?: boolean | User$babiesArgs<ExtArgs>
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    babies?: boolean | User$babiesArgs<ExtArgs>
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      babies: Prisma.$BabyPayload<ExtArgs>[]
      pushSubscriptions: Prisma.$PushSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      createdAt: Date
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
    babies<T extends User$babiesArgs<ExtArgs> = {}>(args?: Subset<T, User$babiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pushSubscriptions<T extends User$pushSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pushSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.babies
   */
  export type User$babiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    where?: BabyWhereInput
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    cursor?: BabyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * User.pushSubscriptions
   */
  export type User$pushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    cursor?: PushSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
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
   * Model Baby
   */

  export type AggregateBaby = {
    _count: BabyCountAggregateOutputType | null
    _avg: BabyAvgAggregateOutputType | null
    _sum: BabySumAggregateOutputType | null
    _min: BabyMinAggregateOutputType | null
    _max: BabyMaxAggregateOutputType | null
  }

  export type BabyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BabySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BabyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    birthDate: Date | null
    gender: string | null
    createdAt: Date | null
  }

  export type BabyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    birthDate: Date | null
    gender: string | null
    createdAt: Date | null
  }

  export type BabyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    birthDate: number
    gender: number
    createdAt: number
    _all: number
  }


  export type BabyAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BabySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BabyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    birthDate?: true
    gender?: true
    createdAt?: true
  }

  export type BabyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    birthDate?: true
    gender?: true
    createdAt?: true
  }

  export type BabyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    birthDate?: true
    gender?: true
    createdAt?: true
    _all?: true
  }

  export type BabyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Baby to aggregate.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Babies
    **/
    _count?: true | BabyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BabyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BabySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BabyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BabyMaxAggregateInputType
  }

  export type GetBabyAggregateType<T extends BabyAggregateArgs> = {
        [P in keyof T & keyof AggregateBaby]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaby[P]>
      : GetScalarType<T[P], AggregateBaby[P]>
  }




  export type BabyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BabyWhereInput
    orderBy?: BabyOrderByWithAggregationInput | BabyOrderByWithAggregationInput[]
    by: BabyScalarFieldEnum[] | BabyScalarFieldEnum
    having?: BabyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BabyCountAggregateInputType | true
    _avg?: BabyAvgAggregateInputType
    _sum?: BabySumAggregateInputType
    _min?: BabyMinAggregateInputType
    _max?: BabyMaxAggregateInputType
  }

  export type BabyGroupByOutputType = {
    id: number
    userId: number
    name: string
    birthDate: Date
    gender: string | null
    createdAt: Date
    _count: BabyCountAggregateOutputType | null
    _avg: BabyAvgAggregateOutputType | null
    _sum: BabySumAggregateOutputType | null
    _min: BabyMinAggregateOutputType | null
    _max: BabyMaxAggregateOutputType | null
  }

  type GetBabyGroupByPayload<T extends BabyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BabyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BabyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BabyGroupByOutputType[P]>
            : GetScalarType<T[P], BabyGroupByOutputType[P]>
        }
      >
    >


  export type BabySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    birthDate?: boolean
    gender?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    feedings?: boolean | Baby$feedingsArgs<ExtArgs>
    meals?: boolean | Baby$mealsArgs<ExtArgs>
    _count?: boolean | BabyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baby"]>

  export type BabySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    birthDate?: boolean
    gender?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baby"]>

  export type BabySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    birthDate?: boolean
    gender?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baby"]>

  export type BabySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    birthDate?: boolean
    gender?: boolean
    createdAt?: boolean
  }

  export type BabyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "birthDate" | "gender" | "createdAt", ExtArgs["result"]["baby"]>
  export type BabyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    feedings?: boolean | Baby$feedingsArgs<ExtArgs>
    meals?: boolean | Baby$mealsArgs<ExtArgs>
    _count?: boolean | BabyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BabyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BabyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BabyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Baby"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      feedings: Prisma.$FeedingPayload<ExtArgs>[]
      meals: Prisma.$MealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      birthDate: Date
      gender: string | null
      createdAt: Date
    }, ExtArgs["result"]["baby"]>
    composites: {}
  }

  type BabyGetPayload<S extends boolean | null | undefined | BabyDefaultArgs> = $Result.GetResult<Prisma.$BabyPayload, S>

  type BabyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BabyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BabyCountAggregateInputType | true
    }

  export interface BabyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Baby'], meta: { name: 'Baby' } }
    /**
     * Find zero or one Baby that matches the filter.
     * @param {BabyFindUniqueArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BabyFindUniqueArgs>(args: SelectSubset<T, BabyFindUniqueArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Baby that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BabyFindUniqueOrThrowArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BabyFindUniqueOrThrowArgs>(args: SelectSubset<T, BabyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baby that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyFindFirstArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BabyFindFirstArgs>(args?: SelectSubset<T, BabyFindFirstArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baby that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyFindFirstOrThrowArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BabyFindFirstOrThrowArgs>(args?: SelectSubset<T, BabyFindFirstOrThrowArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Babies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Babies
     * const babies = await prisma.baby.findMany()
     * 
     * // Get first 10 Babies
     * const babies = await prisma.baby.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const babyWithIdOnly = await prisma.baby.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BabyFindManyArgs>(args?: SelectSubset<T, BabyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Baby.
     * @param {BabyCreateArgs} args - Arguments to create a Baby.
     * @example
     * // Create one Baby
     * const Baby = await prisma.baby.create({
     *   data: {
     *     // ... data to create a Baby
     *   }
     * })
     * 
     */
    create<T extends BabyCreateArgs>(args: SelectSubset<T, BabyCreateArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Babies.
     * @param {BabyCreateManyArgs} args - Arguments to create many Babies.
     * @example
     * // Create many Babies
     * const baby = await prisma.baby.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BabyCreateManyArgs>(args?: SelectSubset<T, BabyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Babies and returns the data saved in the database.
     * @param {BabyCreateManyAndReturnArgs} args - Arguments to create many Babies.
     * @example
     * // Create many Babies
     * const baby = await prisma.baby.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Babies and only return the `id`
     * const babyWithIdOnly = await prisma.baby.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BabyCreateManyAndReturnArgs>(args?: SelectSubset<T, BabyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Baby.
     * @param {BabyDeleteArgs} args - Arguments to delete one Baby.
     * @example
     * // Delete one Baby
     * const Baby = await prisma.baby.delete({
     *   where: {
     *     // ... filter to delete one Baby
     *   }
     * })
     * 
     */
    delete<T extends BabyDeleteArgs>(args: SelectSubset<T, BabyDeleteArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Baby.
     * @param {BabyUpdateArgs} args - Arguments to update one Baby.
     * @example
     * // Update one Baby
     * const baby = await prisma.baby.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BabyUpdateArgs>(args: SelectSubset<T, BabyUpdateArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Babies.
     * @param {BabyDeleteManyArgs} args - Arguments to filter Babies to delete.
     * @example
     * // Delete a few Babies
     * const { count } = await prisma.baby.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BabyDeleteManyArgs>(args?: SelectSubset<T, BabyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Babies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Babies
     * const baby = await prisma.baby.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BabyUpdateManyArgs>(args: SelectSubset<T, BabyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Babies and returns the data updated in the database.
     * @param {BabyUpdateManyAndReturnArgs} args - Arguments to update many Babies.
     * @example
     * // Update many Babies
     * const baby = await prisma.baby.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Babies and only return the `id`
     * const babyWithIdOnly = await prisma.baby.updateManyAndReturn({
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
    updateManyAndReturn<T extends BabyUpdateManyAndReturnArgs>(args: SelectSubset<T, BabyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Baby.
     * @param {BabyUpsertArgs} args - Arguments to update or create a Baby.
     * @example
     * // Update or create a Baby
     * const baby = await prisma.baby.upsert({
     *   create: {
     *     // ... data to create a Baby
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baby we want to update
     *   }
     * })
     */
    upsert<T extends BabyUpsertArgs>(args: SelectSubset<T, BabyUpsertArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Babies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyCountArgs} args - Arguments to filter Babies to count.
     * @example
     * // Count the number of Babies
     * const count = await prisma.baby.count({
     *   where: {
     *     // ... the filter for the Babies we want to count
     *   }
     * })
    **/
    count<T extends BabyCountArgs>(
      args?: Subset<T, BabyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BabyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BabyAggregateArgs>(args: Subset<T, BabyAggregateArgs>): Prisma.PrismaPromise<GetBabyAggregateType<T>>

    /**
     * Group by Baby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyGroupByArgs} args - Group by arguments.
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
      T extends BabyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BabyGroupByArgs['orderBy'] }
        : { orderBy?: BabyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BabyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Baby model
   */
  readonly fields: BabyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Baby.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BabyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feedings<T extends Baby$feedingsArgs<ExtArgs> = {}>(args?: Subset<T, Baby$feedingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meals<T extends Baby$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Baby$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Baby model
   */
  interface BabyFieldRefs {
    readonly id: FieldRef<"Baby", 'Int'>
    readonly userId: FieldRef<"Baby", 'Int'>
    readonly name: FieldRef<"Baby", 'String'>
    readonly birthDate: FieldRef<"Baby", 'DateTime'>
    readonly gender: FieldRef<"Baby", 'String'>
    readonly createdAt: FieldRef<"Baby", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Baby findUnique
   */
  export type BabyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby findUniqueOrThrow
   */
  export type BabyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby findFirst
   */
  export type BabyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Babies.
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Baby findFirstOrThrow
   */
  export type BabyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Babies.
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Baby findMany
   */
  export type BabyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Babies to fetch.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Babies.
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Baby create
   */
  export type BabyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * The data needed to create a Baby.
     */
    data: XOR<BabyCreateInput, BabyUncheckedCreateInput>
  }

  /**
   * Baby createMany
   */
  export type BabyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Babies.
     */
    data: BabyCreateManyInput | BabyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Baby createManyAndReturn
   */
  export type BabyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * The data used to create many Babies.
     */
    data: BabyCreateManyInput | BabyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Baby update
   */
  export type BabyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * The data needed to update a Baby.
     */
    data: XOR<BabyUpdateInput, BabyUncheckedUpdateInput>
    /**
     * Choose, which Baby to update.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby updateMany
   */
  export type BabyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Babies.
     */
    data: XOR<BabyUpdateManyMutationInput, BabyUncheckedUpdateManyInput>
    /**
     * Filter which Babies to update
     */
    where?: BabyWhereInput
    /**
     * Limit how many Babies to update.
     */
    limit?: number
  }

  /**
   * Baby updateManyAndReturn
   */
  export type BabyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * The data used to update Babies.
     */
    data: XOR<BabyUpdateManyMutationInput, BabyUncheckedUpdateManyInput>
    /**
     * Filter which Babies to update
     */
    where?: BabyWhereInput
    /**
     * Limit how many Babies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Baby upsert
   */
  export type BabyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * The filter to search for the Baby to update in case it exists.
     */
    where: BabyWhereUniqueInput
    /**
     * In case the Baby found by the `where` argument doesn't exist, create a new Baby with this data.
     */
    create: XOR<BabyCreateInput, BabyUncheckedCreateInput>
    /**
     * In case the Baby was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BabyUpdateInput, BabyUncheckedUpdateInput>
  }

  /**
   * Baby delete
   */
  export type BabyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter which Baby to delete.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby deleteMany
   */
  export type BabyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Babies to delete
     */
    where?: BabyWhereInput
    /**
     * Limit how many Babies to delete.
     */
    limit?: number
  }

  /**
   * Baby.feedings
   */
  export type Baby$feedingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    where?: FeedingWhereInput
    orderBy?: FeedingOrderByWithRelationInput | FeedingOrderByWithRelationInput[]
    cursor?: FeedingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedingScalarFieldEnum | FeedingScalarFieldEnum[]
  }

  /**
   * Baby.meals
   */
  export type Baby$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Baby without action
   */
  export type BabyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
  }


  /**
   * Model Feeding
   */

  export type AggregateFeeding = {
    _count: FeedingCountAggregateOutputType | null
    _avg: FeedingAvgAggregateOutputType | null
    _sum: FeedingSumAggregateOutputType | null
    _min: FeedingMinAggregateOutputType | null
    _max: FeedingMaxAggregateOutputType | null
  }

  export type FeedingAvgAggregateOutputType = {
    id: number | null
    babyId: number | null
    amountMl: number | null
    durationMin: number | null
  }

  export type FeedingSumAggregateOutputType = {
    id: number | null
    babyId: number | null
    amountMl: number | null
    durationMin: number | null
  }

  export type FeedingMinAggregateOutputType = {
    id: number | null
    babyId: number | null
    type: string | null
    amountMl: number | null
    durationMin: number | null
    fedAt: Date | null
    createdAt: Date | null
  }

  export type FeedingMaxAggregateOutputType = {
    id: number | null
    babyId: number | null
    type: string | null
    amountMl: number | null
    durationMin: number | null
    fedAt: Date | null
    createdAt: Date | null
  }

  export type FeedingCountAggregateOutputType = {
    id: number
    babyId: number
    type: number
    amountMl: number
    durationMin: number
    fedAt: number
    createdAt: number
    _all: number
  }


  export type FeedingAvgAggregateInputType = {
    id?: true
    babyId?: true
    amountMl?: true
    durationMin?: true
  }

  export type FeedingSumAggregateInputType = {
    id?: true
    babyId?: true
    amountMl?: true
    durationMin?: true
  }

  export type FeedingMinAggregateInputType = {
    id?: true
    babyId?: true
    type?: true
    amountMl?: true
    durationMin?: true
    fedAt?: true
    createdAt?: true
  }

  export type FeedingMaxAggregateInputType = {
    id?: true
    babyId?: true
    type?: true
    amountMl?: true
    durationMin?: true
    fedAt?: true
    createdAt?: true
  }

  export type FeedingCountAggregateInputType = {
    id?: true
    babyId?: true
    type?: true
    amountMl?: true
    durationMin?: true
    fedAt?: true
    createdAt?: true
    _all?: true
  }

  export type FeedingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feeding to aggregate.
     */
    where?: FeedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedings to fetch.
     */
    orderBy?: FeedingOrderByWithRelationInput | FeedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedings
    **/
    _count?: true | FeedingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedingMaxAggregateInputType
  }

  export type GetFeedingAggregateType<T extends FeedingAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeding[P]>
      : GetScalarType<T[P], AggregateFeeding[P]>
  }




  export type FeedingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedingWhereInput
    orderBy?: FeedingOrderByWithAggregationInput | FeedingOrderByWithAggregationInput[]
    by: FeedingScalarFieldEnum[] | FeedingScalarFieldEnum
    having?: FeedingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedingCountAggregateInputType | true
    _avg?: FeedingAvgAggregateInputType
    _sum?: FeedingSumAggregateInputType
    _min?: FeedingMinAggregateInputType
    _max?: FeedingMaxAggregateInputType
  }

  export type FeedingGroupByOutputType = {
    id: number
    babyId: number
    type: string
    amountMl: number | null
    durationMin: number | null
    fedAt: Date
    createdAt: Date
    _count: FeedingCountAggregateOutputType | null
    _avg: FeedingAvgAggregateOutputType | null
    _sum: FeedingSumAggregateOutputType | null
    _min: FeedingMinAggregateOutputType | null
    _max: FeedingMaxAggregateOutputType | null
  }

  type GetFeedingGroupByPayload<T extends FeedingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedingGroupByOutputType[P]>
            : GetScalarType<T[P], FeedingGroupByOutputType[P]>
        }
      >
    >


  export type FeedingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    babyId?: boolean
    type?: boolean
    amountMl?: boolean
    durationMin?: boolean
    fedAt?: boolean
    createdAt?: boolean
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeding"]>

  export type FeedingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    babyId?: boolean
    type?: boolean
    amountMl?: boolean
    durationMin?: boolean
    fedAt?: boolean
    createdAt?: boolean
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeding"]>

  export type FeedingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    babyId?: boolean
    type?: boolean
    amountMl?: boolean
    durationMin?: boolean
    fedAt?: boolean
    createdAt?: boolean
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeding"]>

  export type FeedingSelectScalar = {
    id?: boolean
    babyId?: boolean
    type?: boolean
    amountMl?: boolean
    durationMin?: boolean
    fedAt?: boolean
    createdAt?: boolean
  }

  export type FeedingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "babyId" | "type" | "amountMl" | "durationMin" | "fedAt" | "createdAt", ExtArgs["result"]["feeding"]>
  export type FeedingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }
  export type FeedingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }
  export type FeedingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }

  export type $FeedingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feeding"
    objects: {
      baby: Prisma.$BabyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      babyId: number
      type: string
      amountMl: number | null
      durationMin: number | null
      fedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["feeding"]>
    composites: {}
  }

  type FeedingGetPayload<S extends boolean | null | undefined | FeedingDefaultArgs> = $Result.GetResult<Prisma.$FeedingPayload, S>

  type FeedingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedingCountAggregateInputType | true
    }

  export interface FeedingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feeding'], meta: { name: 'Feeding' } }
    /**
     * Find zero or one Feeding that matches the filter.
     * @param {FeedingFindUniqueArgs} args - Arguments to find a Feeding
     * @example
     * // Get one Feeding
     * const feeding = await prisma.feeding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedingFindUniqueArgs>(args: SelectSubset<T, FeedingFindUniqueArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feeding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedingFindUniqueOrThrowArgs} args - Arguments to find a Feeding
     * @example
     * // Get one Feeding
     * const feeding = await prisma.feeding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedingFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feeding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingFindFirstArgs} args - Arguments to find a Feeding
     * @example
     * // Get one Feeding
     * const feeding = await prisma.feeding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedingFindFirstArgs>(args?: SelectSubset<T, FeedingFindFirstArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feeding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingFindFirstOrThrowArgs} args - Arguments to find a Feeding
     * @example
     * // Get one Feeding
     * const feeding = await prisma.feeding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedingFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedings
     * const feedings = await prisma.feeding.findMany()
     * 
     * // Get first 10 Feedings
     * const feedings = await prisma.feeding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedingWithIdOnly = await prisma.feeding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedingFindManyArgs>(args?: SelectSubset<T, FeedingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feeding.
     * @param {FeedingCreateArgs} args - Arguments to create a Feeding.
     * @example
     * // Create one Feeding
     * const Feeding = await prisma.feeding.create({
     *   data: {
     *     // ... data to create a Feeding
     *   }
     * })
     * 
     */
    create<T extends FeedingCreateArgs>(args: SelectSubset<T, FeedingCreateArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedings.
     * @param {FeedingCreateManyArgs} args - Arguments to create many Feedings.
     * @example
     * // Create many Feedings
     * const feeding = await prisma.feeding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedingCreateManyArgs>(args?: SelectSubset<T, FeedingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedings and returns the data saved in the database.
     * @param {FeedingCreateManyAndReturnArgs} args - Arguments to create many Feedings.
     * @example
     * // Create many Feedings
     * const feeding = await prisma.feeding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedings and only return the `id`
     * const feedingWithIdOnly = await prisma.feeding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedingCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feeding.
     * @param {FeedingDeleteArgs} args - Arguments to delete one Feeding.
     * @example
     * // Delete one Feeding
     * const Feeding = await prisma.feeding.delete({
     *   where: {
     *     // ... filter to delete one Feeding
     *   }
     * })
     * 
     */
    delete<T extends FeedingDeleteArgs>(args: SelectSubset<T, FeedingDeleteArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feeding.
     * @param {FeedingUpdateArgs} args - Arguments to update one Feeding.
     * @example
     * // Update one Feeding
     * const feeding = await prisma.feeding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedingUpdateArgs>(args: SelectSubset<T, FeedingUpdateArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedings.
     * @param {FeedingDeleteManyArgs} args - Arguments to filter Feedings to delete.
     * @example
     * // Delete a few Feedings
     * const { count } = await prisma.feeding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedingDeleteManyArgs>(args?: SelectSubset<T, FeedingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedings
     * const feeding = await prisma.feeding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedingUpdateManyArgs>(args: SelectSubset<T, FeedingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedings and returns the data updated in the database.
     * @param {FeedingUpdateManyAndReturnArgs} args - Arguments to update many Feedings.
     * @example
     * // Update many Feedings
     * const feeding = await prisma.feeding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedings and only return the `id`
     * const feedingWithIdOnly = await prisma.feeding.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedingUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feeding.
     * @param {FeedingUpsertArgs} args - Arguments to update or create a Feeding.
     * @example
     * // Update or create a Feeding
     * const feeding = await prisma.feeding.upsert({
     *   create: {
     *     // ... data to create a Feeding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feeding we want to update
     *   }
     * })
     */
    upsert<T extends FeedingUpsertArgs>(args: SelectSubset<T, FeedingUpsertArgs<ExtArgs>>): Prisma__FeedingClient<$Result.GetResult<Prisma.$FeedingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingCountArgs} args - Arguments to filter Feedings to count.
     * @example
     * // Count the number of Feedings
     * const count = await prisma.feeding.count({
     *   where: {
     *     // ... the filter for the Feedings we want to count
     *   }
     * })
    **/
    count<T extends FeedingCountArgs>(
      args?: Subset<T, FeedingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feeding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedingAggregateArgs>(args: Subset<T, FeedingAggregateArgs>): Prisma.PrismaPromise<GetFeedingAggregateType<T>>

    /**
     * Group by Feeding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedingGroupByArgs} args - Group by arguments.
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
      T extends FeedingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedingGroupByArgs['orderBy'] }
        : { orderBy?: FeedingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feeding model
   */
  readonly fields: FeedingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feeding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baby<T extends BabyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BabyDefaultArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feeding model
   */
  interface FeedingFieldRefs {
    readonly id: FieldRef<"Feeding", 'Int'>
    readonly babyId: FieldRef<"Feeding", 'Int'>
    readonly type: FieldRef<"Feeding", 'String'>
    readonly amountMl: FieldRef<"Feeding", 'Int'>
    readonly durationMin: FieldRef<"Feeding", 'Int'>
    readonly fedAt: FieldRef<"Feeding", 'DateTime'>
    readonly createdAt: FieldRef<"Feeding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feeding findUnique
   */
  export type FeedingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * Filter, which Feeding to fetch.
     */
    where: FeedingWhereUniqueInput
  }

  /**
   * Feeding findUniqueOrThrow
   */
  export type FeedingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * Filter, which Feeding to fetch.
     */
    where: FeedingWhereUniqueInput
  }

  /**
   * Feeding findFirst
   */
  export type FeedingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * Filter, which Feeding to fetch.
     */
    where?: FeedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedings to fetch.
     */
    orderBy?: FeedingOrderByWithRelationInput | FeedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedings.
     */
    cursor?: FeedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedings.
     */
    distinct?: FeedingScalarFieldEnum | FeedingScalarFieldEnum[]
  }

  /**
   * Feeding findFirstOrThrow
   */
  export type FeedingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * Filter, which Feeding to fetch.
     */
    where?: FeedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedings to fetch.
     */
    orderBy?: FeedingOrderByWithRelationInput | FeedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedings.
     */
    cursor?: FeedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedings.
     */
    distinct?: FeedingScalarFieldEnum | FeedingScalarFieldEnum[]
  }

  /**
   * Feeding findMany
   */
  export type FeedingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * Filter, which Feedings to fetch.
     */
    where?: FeedingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedings to fetch.
     */
    orderBy?: FeedingOrderByWithRelationInput | FeedingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedings.
     */
    cursor?: FeedingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedings.
     */
    distinct?: FeedingScalarFieldEnum | FeedingScalarFieldEnum[]
  }

  /**
   * Feeding create
   */
  export type FeedingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * The data needed to create a Feeding.
     */
    data: XOR<FeedingCreateInput, FeedingUncheckedCreateInput>
  }

  /**
   * Feeding createMany
   */
  export type FeedingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedings.
     */
    data: FeedingCreateManyInput | FeedingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feeding createManyAndReturn
   */
  export type FeedingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * The data used to create many Feedings.
     */
    data: FeedingCreateManyInput | FeedingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feeding update
   */
  export type FeedingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * The data needed to update a Feeding.
     */
    data: XOR<FeedingUpdateInput, FeedingUncheckedUpdateInput>
    /**
     * Choose, which Feeding to update.
     */
    where: FeedingWhereUniqueInput
  }

  /**
   * Feeding updateMany
   */
  export type FeedingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedings.
     */
    data: XOR<FeedingUpdateManyMutationInput, FeedingUncheckedUpdateManyInput>
    /**
     * Filter which Feedings to update
     */
    where?: FeedingWhereInput
    /**
     * Limit how many Feedings to update.
     */
    limit?: number
  }

  /**
   * Feeding updateManyAndReturn
   */
  export type FeedingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * The data used to update Feedings.
     */
    data: XOR<FeedingUpdateManyMutationInput, FeedingUncheckedUpdateManyInput>
    /**
     * Filter which Feedings to update
     */
    where?: FeedingWhereInput
    /**
     * Limit how many Feedings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feeding upsert
   */
  export type FeedingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * The filter to search for the Feeding to update in case it exists.
     */
    where: FeedingWhereUniqueInput
    /**
     * In case the Feeding found by the `where` argument doesn't exist, create a new Feeding with this data.
     */
    create: XOR<FeedingCreateInput, FeedingUncheckedCreateInput>
    /**
     * In case the Feeding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedingUpdateInput, FeedingUncheckedUpdateInput>
  }

  /**
   * Feeding delete
   */
  export type FeedingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
    /**
     * Filter which Feeding to delete.
     */
    where: FeedingWhereUniqueInput
  }

  /**
   * Feeding deleteMany
   */
  export type FeedingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedings to delete
     */
    where?: FeedingWhereInput
    /**
     * Limit how many Feedings to delete.
     */
    limit?: number
  }

  /**
   * Feeding without action
   */
  export type FeedingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feeding
     */
    select?: FeedingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feeding
     */
    omit?: FeedingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedingInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    babyId: number | null
    amountG: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    babyId: number | null
    amountG: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    babyId: number | null
    menu: string | null
    amountG: number | null
    reaction: string | null
    memo: string | null
    eatenAt: Date | null
    createdAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    babyId: number | null
    menu: string | null
    amountG: number | null
    reaction: string | null
    memo: string | null
    eatenAt: Date | null
    createdAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    babyId: number
    menu: number
    amountG: number
    reaction: number
    memo: number
    eatenAt: number
    createdAt: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    babyId?: true
    amountG?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    babyId?: true
    amountG?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    babyId?: true
    menu?: true
    amountG?: true
    reaction?: true
    memo?: true
    eatenAt?: true
    createdAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    babyId?: true
    menu?: true
    amountG?: true
    reaction?: true
    memo?: true
    eatenAt?: true
    createdAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    babyId?: true
    menu?: true
    amountG?: true
    reaction?: true
    memo?: true
    eatenAt?: true
    createdAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    babyId: number
    menu: string
    amountG: number | null
    reaction: string | null
    memo: string | null
    eatenAt: Date
    createdAt: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    babyId?: boolean
    menu?: boolean
    amountG?: boolean
    reaction?: boolean
    memo?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    babyId?: boolean
    menu?: boolean
    amountG?: boolean
    reaction?: boolean
    memo?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    babyId?: boolean
    menu?: boolean
    amountG?: boolean
    reaction?: boolean
    memo?: boolean
    eatenAt?: boolean
    createdAt?: boolean
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    babyId?: boolean
    menu?: boolean
    amountG?: boolean
    reaction?: boolean
    memo?: boolean
    eatenAt?: boolean
    createdAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "babyId" | "menu" | "amountG" | "reaction" | "memo" | "eatenAt" | "createdAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baby?: boolean | BabyDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      baby: Prisma.$BabyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      babyId: number
      menu: string
      amountG: number | null
      reaction: string | null
      memo: string | null
      eatenAt: Date
      createdAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baby<T extends BabyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BabyDefaultArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly babyId: FieldRef<"Meal", 'Int'>
    readonly menu: FieldRef<"Meal", 'String'>
    readonly amountG: FieldRef<"Meal", 'Int'>
    readonly reaction: FieldRef<"Meal", 'String'>
    readonly memo: FieldRef<"Meal", 'String'>
    readonly eatenAt: FieldRef<"Meal", 'DateTime'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
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


  export const PushSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    createdAt: 'createdAt'
  };

  export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BabyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    birthDate: 'birthDate',
    gender: 'gender',
    createdAt: 'createdAt'
  };

  export type BabyScalarFieldEnum = (typeof BabyScalarFieldEnum)[keyof typeof BabyScalarFieldEnum]


  export const FeedingScalarFieldEnum: {
    id: 'id',
    babyId: 'babyId',
    type: 'type',
    amountMl: 'amountMl',
    durationMin: 'durationMin',
    fedAt: 'fedAt',
    createdAt: 'createdAt'
  };

  export type FeedingScalarFieldEnum = (typeof FeedingScalarFieldEnum)[keyof typeof FeedingScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    babyId: 'babyId',
    menu: 'menu',
    amountG: 'amountG',
    reaction: 'reaction',
    memo: 'memo',
    eatenAt: 'eatenAt',
    createdAt: 'createdAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    id?: IntFilter<"PushSubscription"> | number
    userId?: IntFilter<"PushSubscription"> | number
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    endpoint?: string
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    userId?: IntFilter<"PushSubscription"> | number
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "endpoint">

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    _count?: PushSubscriptionCountOrderByAggregateInput
    _avg?: PushSubscriptionAvgOrderByAggregateInput
    _max?: PushSubscriptionMaxOrderByAggregateInput
    _min?: PushSubscriptionMinOrderByAggregateInput
    _sum?: PushSubscriptionSumOrderByAggregateInput
  }

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PushSubscription"> | number
    userId?: IntWithAggregatesFilter<"PushSubscription"> | number
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    babies?: BabyListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    babies?: BabyOrderByRelationAggregateInput
    pushSubscriptions?: PushSubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    babies?: BabyListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BabyWhereInput = {
    AND?: BabyWhereInput | BabyWhereInput[]
    OR?: BabyWhereInput[]
    NOT?: BabyWhereInput | BabyWhereInput[]
    id?: IntFilter<"Baby"> | number
    userId?: IntFilter<"Baby"> | number
    name?: StringFilter<"Baby"> | string
    birthDate?: DateTimeFilter<"Baby"> | Date | string
    gender?: StringNullableFilter<"Baby"> | string | null
    createdAt?: DateTimeFilter<"Baby"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    feedings?: FeedingListRelationFilter
    meals?: MealListRelationFilter
  }

  export type BabyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    feedings?: FeedingOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
  }

  export type BabyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BabyWhereInput | BabyWhereInput[]
    OR?: BabyWhereInput[]
    NOT?: BabyWhereInput | BabyWhereInput[]
    userId?: IntFilter<"Baby"> | number
    name?: StringFilter<"Baby"> | string
    birthDate?: DateTimeFilter<"Baby"> | Date | string
    gender?: StringNullableFilter<"Baby"> | string | null
    createdAt?: DateTimeFilter<"Baby"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    feedings?: FeedingListRelationFilter
    meals?: MealListRelationFilter
  }, "id">

  export type BabyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BabyCountOrderByAggregateInput
    _avg?: BabyAvgOrderByAggregateInput
    _max?: BabyMaxOrderByAggregateInput
    _min?: BabyMinOrderByAggregateInput
    _sum?: BabySumOrderByAggregateInput
  }

  export type BabyScalarWhereWithAggregatesInput = {
    AND?: BabyScalarWhereWithAggregatesInput | BabyScalarWhereWithAggregatesInput[]
    OR?: BabyScalarWhereWithAggregatesInput[]
    NOT?: BabyScalarWhereWithAggregatesInput | BabyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Baby"> | number
    userId?: IntWithAggregatesFilter<"Baby"> | number
    name?: StringWithAggregatesFilter<"Baby"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Baby"> | Date | string
    gender?: StringNullableWithAggregatesFilter<"Baby"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Baby"> | Date | string
  }

  export type FeedingWhereInput = {
    AND?: FeedingWhereInput | FeedingWhereInput[]
    OR?: FeedingWhereInput[]
    NOT?: FeedingWhereInput | FeedingWhereInput[]
    id?: IntFilter<"Feeding"> | number
    babyId?: IntFilter<"Feeding"> | number
    type?: StringFilter<"Feeding"> | string
    amountMl?: IntNullableFilter<"Feeding"> | number | null
    durationMin?: IntNullableFilter<"Feeding"> | number | null
    fedAt?: DateTimeFilter<"Feeding"> | Date | string
    createdAt?: DateTimeFilter<"Feeding"> | Date | string
    baby?: XOR<BabyScalarRelationFilter, BabyWhereInput>
  }

  export type FeedingOrderByWithRelationInput = {
    id?: SortOrder
    babyId?: SortOrder
    type?: SortOrder
    amountMl?: SortOrderInput | SortOrder
    durationMin?: SortOrderInput | SortOrder
    fedAt?: SortOrder
    createdAt?: SortOrder
    baby?: BabyOrderByWithRelationInput
  }

  export type FeedingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedingWhereInput | FeedingWhereInput[]
    OR?: FeedingWhereInput[]
    NOT?: FeedingWhereInput | FeedingWhereInput[]
    babyId?: IntFilter<"Feeding"> | number
    type?: StringFilter<"Feeding"> | string
    amountMl?: IntNullableFilter<"Feeding"> | number | null
    durationMin?: IntNullableFilter<"Feeding"> | number | null
    fedAt?: DateTimeFilter<"Feeding"> | Date | string
    createdAt?: DateTimeFilter<"Feeding"> | Date | string
    baby?: XOR<BabyScalarRelationFilter, BabyWhereInput>
  }, "id">

  export type FeedingOrderByWithAggregationInput = {
    id?: SortOrder
    babyId?: SortOrder
    type?: SortOrder
    amountMl?: SortOrderInput | SortOrder
    durationMin?: SortOrderInput | SortOrder
    fedAt?: SortOrder
    createdAt?: SortOrder
    _count?: FeedingCountOrderByAggregateInput
    _avg?: FeedingAvgOrderByAggregateInput
    _max?: FeedingMaxOrderByAggregateInput
    _min?: FeedingMinOrderByAggregateInput
    _sum?: FeedingSumOrderByAggregateInput
  }

  export type FeedingScalarWhereWithAggregatesInput = {
    AND?: FeedingScalarWhereWithAggregatesInput | FeedingScalarWhereWithAggregatesInput[]
    OR?: FeedingScalarWhereWithAggregatesInput[]
    NOT?: FeedingScalarWhereWithAggregatesInput | FeedingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feeding"> | number
    babyId?: IntWithAggregatesFilter<"Feeding"> | number
    type?: StringWithAggregatesFilter<"Feeding"> | string
    amountMl?: IntNullableWithAggregatesFilter<"Feeding"> | number | null
    durationMin?: IntNullableWithAggregatesFilter<"Feeding"> | number | null
    fedAt?: DateTimeWithAggregatesFilter<"Feeding"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Feeding"> | Date | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    babyId?: IntFilter<"Meal"> | number
    menu?: StringFilter<"Meal"> | string
    amountG?: IntNullableFilter<"Meal"> | number | null
    reaction?: StringNullableFilter<"Meal"> | string | null
    memo?: StringNullableFilter<"Meal"> | string | null
    eatenAt?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    baby?: XOR<BabyScalarRelationFilter, BabyWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    babyId?: SortOrder
    menu?: SortOrder
    amountG?: SortOrderInput | SortOrder
    reaction?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
    baby?: BabyOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    babyId?: IntFilter<"Meal"> | number
    menu?: StringFilter<"Meal"> | string
    amountG?: IntNullableFilter<"Meal"> | number | null
    reaction?: StringNullableFilter<"Meal"> | string | null
    memo?: StringNullableFilter<"Meal"> | string | null
    eatenAt?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    baby?: XOR<BabyScalarRelationFilter, BabyWhereInput>
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    babyId?: SortOrder
    menu?: SortOrder
    amountG?: SortOrderInput | SortOrder
    reaction?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    babyId?: IntWithAggregatesFilter<"Meal"> | number
    menu?: StringWithAggregatesFilter<"Meal"> | string
    amountG?: IntNullableWithAggregatesFilter<"Meal"> | number | null
    reaction?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    memo?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    eatenAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type PushSubscriptionCreateInput = {
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPushSubscriptionsInput
  }

  export type PushSubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionUpdateInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput
  }

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateManyInput = {
    id?: number
    userId: number
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionUpdateManyMutationInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    babies?: BabyCreateNestedManyWithoutUserInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    babies?: BabyUncheckedCreateNestedManyWithoutUserInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUpdateManyWithoutUserNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUncheckedUpdateManyWithoutUserNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyCreateInput = {
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBabiesInput
    feedings?: FeedingCreateNestedManyWithoutBabyInput
    meals?: MealCreateNestedManyWithoutBabyInput
  }

  export type BabyUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    feedings?: FeedingUncheckedCreateNestedManyWithoutBabyInput
    meals?: MealUncheckedCreateNestedManyWithoutBabyInput
  }

  export type BabyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBabiesNestedInput
    feedings?: FeedingUpdateManyWithoutBabyNestedInput
    meals?: MealUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedings?: FeedingUncheckedUpdateManyWithoutBabyNestedInput
    meals?: MealUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type BabyCreateManyInput = {
    id?: number
    userId: number
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
  }

  export type BabyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingCreateInput = {
    type: string
    amountMl?: number | null
    durationMin?: number | null
    fedAt: Date | string
    createdAt?: Date | string
    baby: BabyCreateNestedOneWithoutFeedingsInput
  }

  export type FeedingUncheckedCreateInput = {
    id?: number
    babyId: number
    type: string
    amountMl?: number | null
    durationMin?: number | null
    fedAt: Date | string
    createdAt?: Date | string
  }

  export type FeedingUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baby?: BabyUpdateOneRequiredWithoutFeedingsNestedInput
  }

  export type FeedingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    babyId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingCreateManyInput = {
    id?: number
    babyId: number
    type: string
    amountMl?: number | null
    durationMin?: number | null
    fedAt: Date | string
    createdAt?: Date | string
  }

  export type FeedingUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    babyId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateInput = {
    menu: string
    amountG?: number | null
    reaction?: string | null
    memo?: string | null
    eatenAt: Date | string
    createdAt?: Date | string
    baby: BabyCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    babyId: number
    menu: string
    amountG?: number | null
    reaction?: string | null
    memo?: string | null
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealUpdateInput = {
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baby?: BabyUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    babyId?: IntFieldUpdateOperationsInput | number
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyInput = {
    id?: number
    babyId: number
    menu: string
    amountG?: number | null
    reaction?: string | null
    memo?: string | null
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    babyId?: IntFieldUpdateOperationsInput | number
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
  }

  export type PushSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
  }

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
  }

  export type PushSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BabyListRelationFilter = {
    every?: BabyWhereInput
    some?: BabyWhereInput
    none?: BabyWhereInput
  }

  export type PushSubscriptionListRelationFilter = {
    every?: PushSubscriptionWhereInput
    some?: PushSubscriptionWhereInput
    none?: PushSubscriptionWhereInput
  }

  export type BabyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PushSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FeedingListRelationFilter = {
    every?: FeedingWhereInput
    some?: FeedingWhereInput
    none?: FeedingWhereInput
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeedingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BabyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
  }

  export type BabyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BabyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
  }

  export type BabyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
  }

  export type BabySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BabyScalarRelationFilter = {
    is?: BabyWhereInput
    isNot?: BabyWhereInput
  }

  export type FeedingCountOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    type?: SortOrder
    amountMl?: SortOrder
    durationMin?: SortOrder
    fedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedingAvgOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    amountMl?: SortOrder
    durationMin?: SortOrder
  }

  export type FeedingMaxOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    type?: SortOrder
    amountMl?: SortOrder
    durationMin?: SortOrder
    fedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedingMinOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    type?: SortOrder
    amountMl?: SortOrder
    durationMin?: SortOrder
    fedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedingSumOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    amountMl?: SortOrder
    durationMin?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    menu?: SortOrder
    amountG?: SortOrder
    reaction?: SortOrder
    memo?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    amountG?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    menu?: SortOrder
    amountG?: SortOrder
    reaction?: SortOrder
    memo?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    menu?: SortOrder
    amountG?: SortOrder
    reaction?: SortOrder
    memo?: SortOrder
    eatenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    babyId?: SortOrder
    amountG?: SortOrder
  }

  export type UserCreateNestedOneWithoutPushSubscriptionsInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    upsert?: UserUpsertWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPushSubscriptionsInput, UserUpdateWithoutPushSubscriptionsInput>, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BabyCreateNestedManyWithoutUserInput = {
    create?: XOR<BabyCreateWithoutUserInput, BabyUncheckedCreateWithoutUserInput> | BabyCreateWithoutUserInput[] | BabyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutUserInput | BabyCreateOrConnectWithoutUserInput[]
    createMany?: BabyCreateManyUserInputEnvelope
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
  }

  export type PushSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type BabyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BabyCreateWithoutUserInput, BabyUncheckedCreateWithoutUserInput> | BabyCreateWithoutUserInput[] | BabyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutUserInput | BabyCreateOrConnectWithoutUserInput[]
    createMany?: BabyCreateManyUserInputEnvelope
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
  }

  export type PushSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type BabyUpdateManyWithoutUserNestedInput = {
    create?: XOR<BabyCreateWithoutUserInput, BabyUncheckedCreateWithoutUserInput> | BabyCreateWithoutUserInput[] | BabyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutUserInput | BabyCreateOrConnectWithoutUserInput[]
    upsert?: BabyUpsertWithWhereUniqueWithoutUserInput | BabyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BabyCreateManyUserInputEnvelope
    set?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    disconnect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    delete?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    update?: BabyUpdateWithWhereUniqueWithoutUserInput | BabyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BabyUpdateManyWithWhereWithoutUserInput | BabyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BabyScalarWhereInput | BabyScalarWhereInput[]
  }

  export type PushSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type BabyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BabyCreateWithoutUserInput, BabyUncheckedCreateWithoutUserInput> | BabyCreateWithoutUserInput[] | BabyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutUserInput | BabyCreateOrConnectWithoutUserInput[]
    upsert?: BabyUpsertWithWhereUniqueWithoutUserInput | BabyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BabyCreateManyUserInputEnvelope
    set?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    disconnect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    delete?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    update?: BabyUpdateWithWhereUniqueWithoutUserInput | BabyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BabyUpdateManyWithWhereWithoutUserInput | BabyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BabyScalarWhereInput | BabyScalarWhereInput[]
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBabiesInput = {
    create?: XOR<UserCreateWithoutBabiesInput, UserUncheckedCreateWithoutBabiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBabiesInput
    connect?: UserWhereUniqueInput
  }

  export type FeedingCreateNestedManyWithoutBabyInput = {
    create?: XOR<FeedingCreateWithoutBabyInput, FeedingUncheckedCreateWithoutBabyInput> | FeedingCreateWithoutBabyInput[] | FeedingUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: FeedingCreateOrConnectWithoutBabyInput | FeedingCreateOrConnectWithoutBabyInput[]
    createMany?: FeedingCreateManyBabyInputEnvelope
    connect?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
  }

  export type MealCreateNestedManyWithoutBabyInput = {
    create?: XOR<MealCreateWithoutBabyInput, MealUncheckedCreateWithoutBabyInput> | MealCreateWithoutBabyInput[] | MealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutBabyInput | MealCreateOrConnectWithoutBabyInput[]
    createMany?: MealCreateManyBabyInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type FeedingUncheckedCreateNestedManyWithoutBabyInput = {
    create?: XOR<FeedingCreateWithoutBabyInput, FeedingUncheckedCreateWithoutBabyInput> | FeedingCreateWithoutBabyInput[] | FeedingUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: FeedingCreateOrConnectWithoutBabyInput | FeedingCreateOrConnectWithoutBabyInput[]
    createMany?: FeedingCreateManyBabyInputEnvelope
    connect?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutBabyInput = {
    create?: XOR<MealCreateWithoutBabyInput, MealUncheckedCreateWithoutBabyInput> | MealCreateWithoutBabyInput[] | MealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutBabyInput | MealCreateOrConnectWithoutBabyInput[]
    createMany?: MealCreateManyBabyInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutBabiesNestedInput = {
    create?: XOR<UserCreateWithoutBabiesInput, UserUncheckedCreateWithoutBabiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBabiesInput
    upsert?: UserUpsertWithoutBabiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBabiesInput, UserUpdateWithoutBabiesInput>, UserUncheckedUpdateWithoutBabiesInput>
  }

  export type FeedingUpdateManyWithoutBabyNestedInput = {
    create?: XOR<FeedingCreateWithoutBabyInput, FeedingUncheckedCreateWithoutBabyInput> | FeedingCreateWithoutBabyInput[] | FeedingUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: FeedingCreateOrConnectWithoutBabyInput | FeedingCreateOrConnectWithoutBabyInput[]
    upsert?: FeedingUpsertWithWhereUniqueWithoutBabyInput | FeedingUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: FeedingCreateManyBabyInputEnvelope
    set?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    disconnect?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    delete?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    connect?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    update?: FeedingUpdateWithWhereUniqueWithoutBabyInput | FeedingUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: FeedingUpdateManyWithWhereWithoutBabyInput | FeedingUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: FeedingScalarWhereInput | FeedingScalarWhereInput[]
  }

  export type MealUpdateManyWithoutBabyNestedInput = {
    create?: XOR<MealCreateWithoutBabyInput, MealUncheckedCreateWithoutBabyInput> | MealCreateWithoutBabyInput[] | MealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutBabyInput | MealCreateOrConnectWithoutBabyInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutBabyInput | MealUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: MealCreateManyBabyInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutBabyInput | MealUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: MealUpdateManyWithWhereWithoutBabyInput | MealUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type FeedingUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: XOR<FeedingCreateWithoutBabyInput, FeedingUncheckedCreateWithoutBabyInput> | FeedingCreateWithoutBabyInput[] | FeedingUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: FeedingCreateOrConnectWithoutBabyInput | FeedingCreateOrConnectWithoutBabyInput[]
    upsert?: FeedingUpsertWithWhereUniqueWithoutBabyInput | FeedingUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: FeedingCreateManyBabyInputEnvelope
    set?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    disconnect?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    delete?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    connect?: FeedingWhereUniqueInput | FeedingWhereUniqueInput[]
    update?: FeedingUpdateWithWhereUniqueWithoutBabyInput | FeedingUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: FeedingUpdateManyWithWhereWithoutBabyInput | FeedingUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: FeedingScalarWhereInput | FeedingScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: XOR<MealCreateWithoutBabyInput, MealUncheckedCreateWithoutBabyInput> | MealCreateWithoutBabyInput[] | MealUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: MealCreateOrConnectWithoutBabyInput | MealCreateOrConnectWithoutBabyInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutBabyInput | MealUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: MealCreateManyBabyInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutBabyInput | MealUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: MealUpdateManyWithWhereWithoutBabyInput | MealUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type BabyCreateNestedOneWithoutFeedingsInput = {
    create?: XOR<BabyCreateWithoutFeedingsInput, BabyUncheckedCreateWithoutFeedingsInput>
    connectOrCreate?: BabyCreateOrConnectWithoutFeedingsInput
    connect?: BabyWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BabyUpdateOneRequiredWithoutFeedingsNestedInput = {
    create?: XOR<BabyCreateWithoutFeedingsInput, BabyUncheckedCreateWithoutFeedingsInput>
    connectOrCreate?: BabyCreateOrConnectWithoutFeedingsInput
    upsert?: BabyUpsertWithoutFeedingsInput
    connect?: BabyWhereUniqueInput
    update?: XOR<XOR<BabyUpdateToOneWithWhereWithoutFeedingsInput, BabyUpdateWithoutFeedingsInput>, BabyUncheckedUpdateWithoutFeedingsInput>
  }

  export type BabyCreateNestedOneWithoutMealsInput = {
    create?: XOR<BabyCreateWithoutMealsInput, BabyUncheckedCreateWithoutMealsInput>
    connectOrCreate?: BabyCreateOrConnectWithoutMealsInput
    connect?: BabyWhereUniqueInput
  }

  export type BabyUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<BabyCreateWithoutMealsInput, BabyUncheckedCreateWithoutMealsInput>
    connectOrCreate?: BabyCreateOrConnectWithoutMealsInput
    upsert?: BabyUpsertWithoutMealsInput
    connect?: BabyWhereUniqueInput
    update?: XOR<XOR<BabyUpdateToOneWithWhereWithoutMealsInput, BabyUpdateWithoutMealsInput>, BabyUncheckedUpdateWithoutMealsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutPushSubscriptionsInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    babies?: BabyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPushSubscriptionsInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    babies?: BabyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPushSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
  }

  export type UserUpsertWithoutPushSubscriptionsInput = {
    update: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPushSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserUpdateWithoutPushSubscriptionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPushSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BabyCreateWithoutUserInput = {
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    feedings?: FeedingCreateNestedManyWithoutBabyInput
    meals?: MealCreateNestedManyWithoutBabyInput
  }

  export type BabyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    feedings?: FeedingUncheckedCreateNestedManyWithoutBabyInput
    meals?: MealUncheckedCreateNestedManyWithoutBabyInput
  }

  export type BabyCreateOrConnectWithoutUserInput = {
    where: BabyWhereUniqueInput
    create: XOR<BabyCreateWithoutUserInput, BabyUncheckedCreateWithoutUserInput>
  }

  export type BabyCreateManyUserInputEnvelope = {
    data: BabyCreateManyUserInput | BabyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PushSubscriptionCreateWithoutUserInput = {
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionCreateOrConnectWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionCreateManyUserInputEnvelope = {
    data: PushSubscriptionCreateManyUserInput | PushSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BabyUpsertWithWhereUniqueWithoutUserInput = {
    where: BabyWhereUniqueInput
    update: XOR<BabyUpdateWithoutUserInput, BabyUncheckedUpdateWithoutUserInput>
    create: XOR<BabyCreateWithoutUserInput, BabyUncheckedCreateWithoutUserInput>
  }

  export type BabyUpdateWithWhereUniqueWithoutUserInput = {
    where: BabyWhereUniqueInput
    data: XOR<BabyUpdateWithoutUserInput, BabyUncheckedUpdateWithoutUserInput>
  }

  export type BabyUpdateManyWithWhereWithoutUserInput = {
    where: BabyScalarWhereInput
    data: XOR<BabyUpdateManyMutationInput, BabyUncheckedUpdateManyWithoutUserInput>
  }

  export type BabyScalarWhereInput = {
    AND?: BabyScalarWhereInput | BabyScalarWhereInput[]
    OR?: BabyScalarWhereInput[]
    NOT?: BabyScalarWhereInput | BabyScalarWhereInput[]
    id?: IntFilter<"Baby"> | number
    userId?: IntFilter<"Baby"> | number
    name?: StringFilter<"Baby"> | string
    birthDate?: DateTimeFilter<"Baby"> | Date | string
    gender?: StringNullableFilter<"Baby"> | string | null
    createdAt?: DateTimeFilter<"Baby"> | Date | string
  }

  export type PushSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    update: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    data: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PushSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: PushSubscriptionScalarWhereInput
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type PushSubscriptionScalarWhereInput = {
    AND?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    OR?: PushSubscriptionScalarWhereInput[]
    NOT?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    id?: IntFilter<"PushSubscription"> | number
    userId?: IntFilter<"PushSubscription"> | number
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
  }

  export type UserCreateWithoutBabiesInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBabiesInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBabiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBabiesInput, UserUncheckedCreateWithoutBabiesInput>
  }

  export type FeedingCreateWithoutBabyInput = {
    type: string
    amountMl?: number | null
    durationMin?: number | null
    fedAt: Date | string
    createdAt?: Date | string
  }

  export type FeedingUncheckedCreateWithoutBabyInput = {
    id?: number
    type: string
    amountMl?: number | null
    durationMin?: number | null
    fedAt: Date | string
    createdAt?: Date | string
  }

  export type FeedingCreateOrConnectWithoutBabyInput = {
    where: FeedingWhereUniqueInput
    create: XOR<FeedingCreateWithoutBabyInput, FeedingUncheckedCreateWithoutBabyInput>
  }

  export type FeedingCreateManyBabyInputEnvelope = {
    data: FeedingCreateManyBabyInput | FeedingCreateManyBabyInput[]
    skipDuplicates?: boolean
  }

  export type MealCreateWithoutBabyInput = {
    menu: string
    amountG?: number | null
    reaction?: string | null
    memo?: string | null
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealUncheckedCreateWithoutBabyInput = {
    id?: number
    menu: string
    amountG?: number | null
    reaction?: string | null
    memo?: string | null
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type MealCreateOrConnectWithoutBabyInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutBabyInput, MealUncheckedCreateWithoutBabyInput>
  }

  export type MealCreateManyBabyInputEnvelope = {
    data: MealCreateManyBabyInput | MealCreateManyBabyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBabiesInput = {
    update: XOR<UserUpdateWithoutBabiesInput, UserUncheckedUpdateWithoutBabiesInput>
    create: XOR<UserCreateWithoutBabiesInput, UserUncheckedCreateWithoutBabiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBabiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBabiesInput, UserUncheckedUpdateWithoutBabiesInput>
  }

  export type UserUpdateWithoutBabiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBabiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedingUpsertWithWhereUniqueWithoutBabyInput = {
    where: FeedingWhereUniqueInput
    update: XOR<FeedingUpdateWithoutBabyInput, FeedingUncheckedUpdateWithoutBabyInput>
    create: XOR<FeedingCreateWithoutBabyInput, FeedingUncheckedCreateWithoutBabyInput>
  }

  export type FeedingUpdateWithWhereUniqueWithoutBabyInput = {
    where: FeedingWhereUniqueInput
    data: XOR<FeedingUpdateWithoutBabyInput, FeedingUncheckedUpdateWithoutBabyInput>
  }

  export type FeedingUpdateManyWithWhereWithoutBabyInput = {
    where: FeedingScalarWhereInput
    data: XOR<FeedingUpdateManyMutationInput, FeedingUncheckedUpdateManyWithoutBabyInput>
  }

  export type FeedingScalarWhereInput = {
    AND?: FeedingScalarWhereInput | FeedingScalarWhereInput[]
    OR?: FeedingScalarWhereInput[]
    NOT?: FeedingScalarWhereInput | FeedingScalarWhereInput[]
    id?: IntFilter<"Feeding"> | number
    babyId?: IntFilter<"Feeding"> | number
    type?: StringFilter<"Feeding"> | string
    amountMl?: IntNullableFilter<"Feeding"> | number | null
    durationMin?: IntNullableFilter<"Feeding"> | number | null
    fedAt?: DateTimeFilter<"Feeding"> | Date | string
    createdAt?: DateTimeFilter<"Feeding"> | Date | string
  }

  export type MealUpsertWithWhereUniqueWithoutBabyInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutBabyInput, MealUncheckedUpdateWithoutBabyInput>
    create: XOR<MealCreateWithoutBabyInput, MealUncheckedCreateWithoutBabyInput>
  }

  export type MealUpdateWithWhereUniqueWithoutBabyInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutBabyInput, MealUncheckedUpdateWithoutBabyInput>
  }

  export type MealUpdateManyWithWhereWithoutBabyInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutBabyInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: IntFilter<"Meal"> | number
    babyId?: IntFilter<"Meal"> | number
    menu?: StringFilter<"Meal"> | string
    amountG?: IntNullableFilter<"Meal"> | number | null
    reaction?: StringNullableFilter<"Meal"> | string | null
    memo?: StringNullableFilter<"Meal"> | string | null
    eatenAt?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
  }

  export type BabyCreateWithoutFeedingsInput = {
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBabiesInput
    meals?: MealCreateNestedManyWithoutBabyInput
  }

  export type BabyUncheckedCreateWithoutFeedingsInput = {
    id?: number
    userId: number
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutBabyInput
  }

  export type BabyCreateOrConnectWithoutFeedingsInput = {
    where: BabyWhereUniqueInput
    create: XOR<BabyCreateWithoutFeedingsInput, BabyUncheckedCreateWithoutFeedingsInput>
  }

  export type BabyUpsertWithoutFeedingsInput = {
    update: XOR<BabyUpdateWithoutFeedingsInput, BabyUncheckedUpdateWithoutFeedingsInput>
    create: XOR<BabyCreateWithoutFeedingsInput, BabyUncheckedCreateWithoutFeedingsInput>
    where?: BabyWhereInput
  }

  export type BabyUpdateToOneWithWhereWithoutFeedingsInput = {
    where?: BabyWhereInput
    data: XOR<BabyUpdateWithoutFeedingsInput, BabyUncheckedUpdateWithoutFeedingsInput>
  }

  export type BabyUpdateWithoutFeedingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBabiesNestedInput
    meals?: MealUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateWithoutFeedingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type BabyCreateWithoutMealsInput = {
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBabiesInput
    feedings?: FeedingCreateNestedManyWithoutBabyInput
  }

  export type BabyUncheckedCreateWithoutMealsInput = {
    id?: number
    userId: number
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
    feedings?: FeedingUncheckedCreateNestedManyWithoutBabyInput
  }

  export type BabyCreateOrConnectWithoutMealsInput = {
    where: BabyWhereUniqueInput
    create: XOR<BabyCreateWithoutMealsInput, BabyUncheckedCreateWithoutMealsInput>
  }

  export type BabyUpsertWithoutMealsInput = {
    update: XOR<BabyUpdateWithoutMealsInput, BabyUncheckedUpdateWithoutMealsInput>
    create: XOR<BabyCreateWithoutMealsInput, BabyUncheckedCreateWithoutMealsInput>
    where?: BabyWhereInput
  }

  export type BabyUpdateToOneWithWhereWithoutMealsInput = {
    where?: BabyWhereInput
    data: XOR<BabyUpdateWithoutMealsInput, BabyUncheckedUpdateWithoutMealsInput>
  }

  export type BabyUpdateWithoutMealsInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBabiesNestedInput
    feedings?: FeedingUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedings?: FeedingUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type BabyCreateManyUserInput = {
    id?: number
    name: string
    birthDate: Date | string
    gender?: string | null
    createdAt?: Date | string
  }

  export type PushSubscriptionCreateManyUserInput = {
    id?: number
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type BabyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedings?: FeedingUpdateManyWithoutBabyNestedInput
    meals?: MealUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedings?: FeedingUncheckedUpdateManyWithoutBabyNestedInput
    meals?: MealUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUpdateWithoutUserInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingCreateManyBabyInput = {
    id?: number
    type: string
    amountMl?: number | null
    durationMin?: number | null
    fedAt: Date | string
    createdAt?: Date | string
  }

  export type MealCreateManyBabyInput = {
    id?: number
    menu: string
    amountG?: number | null
    reaction?: string | null
    memo?: string | null
    eatenAt: Date | string
    createdAt?: Date | string
  }

  export type FeedingUpdateWithoutBabyInput = {
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingUncheckedUpdateWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedingUncheckedUpdateManyWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amountMl?: NullableIntFieldUpdateOperationsInput | number | null
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null
    fedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUpdateWithoutBabyInput = {
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyWithoutBabyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu?: StringFieldUpdateOperationsInput | string
    amountG?: NullableIntFieldUpdateOperationsInput | number | null
    reaction?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    eatenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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