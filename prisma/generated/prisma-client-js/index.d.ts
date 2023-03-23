
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model BudgetCategories
 * 
 */
export type BudgetCategories = {
  id: number
  name: string
  budget: number
  budget_left: number
}

/**
 * Model Expenses
 * 
 */
export type Expenses = {
  id: number
  quantity: number
  categoryId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BudgetCategories
 * const budgetCategories = await prisma.budgetCategories.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BudgetCategories
   * const budgetCategories = await prisma.budgetCategories.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.budgetCategories`: Exposes CRUD operations for the **BudgetCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BudgetCategories
    * const budgetCategories = await prisma.budgetCategories.findMany()
    * ```
    */
  get budgetCategories(): Prisma.BudgetCategoriesDelegate<GlobalReject>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **Expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.ExpensesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BudgetCategories: 'BudgetCategories',
    Expenses: 'Expenses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BudgetCategoriesCountOutputType
   */


  export type BudgetCategoriesCountOutputType = {
    expenses: number
  }

  export type BudgetCategoriesCountOutputTypeSelect = {
    expenses?: boolean
  }

  export type BudgetCategoriesCountOutputTypeGetPayload<S extends boolean | null | undefined | BudgetCategoriesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BudgetCategoriesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BudgetCategoriesCountOutputTypeArgs)
    ? BudgetCategoriesCountOutputType 
    : S extends { select: any } & (BudgetCategoriesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BudgetCategoriesCountOutputType ? BudgetCategoriesCountOutputType[P] : never
  } 
      : BudgetCategoriesCountOutputType




  // Custom InputTypes

  /**
   * BudgetCategoriesCountOutputType without action
   */
  export type BudgetCategoriesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategoriesCountOutputType
     */
    select?: BudgetCategoriesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model BudgetCategories
   */


  export type AggregateBudgetCategories = {
    _count: BudgetCategoriesCountAggregateOutputType | null
    _avg: BudgetCategoriesAvgAggregateOutputType | null
    _sum: BudgetCategoriesSumAggregateOutputType | null
    _min: BudgetCategoriesMinAggregateOutputType | null
    _max: BudgetCategoriesMaxAggregateOutputType | null
  }

  export type BudgetCategoriesAvgAggregateOutputType = {
    id: number | null
    budget: number | null
    budget_left: number | null
  }

  export type BudgetCategoriesSumAggregateOutputType = {
    id: number | null
    budget: number | null
    budget_left: number | null
  }

  export type BudgetCategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    budget: number | null
    budget_left: number | null
  }

  export type BudgetCategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    budget: number | null
    budget_left: number | null
  }

  export type BudgetCategoriesCountAggregateOutputType = {
    id: number
    name: number
    budget: number
    budget_left: number
    _all: number
  }


  export type BudgetCategoriesAvgAggregateInputType = {
    id?: true
    budget?: true
    budget_left?: true
  }

  export type BudgetCategoriesSumAggregateInputType = {
    id?: true
    budget?: true
    budget_left?: true
  }

  export type BudgetCategoriesMinAggregateInputType = {
    id?: true
    name?: true
    budget?: true
    budget_left?: true
  }

  export type BudgetCategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    budget?: true
    budget_left?: true
  }

  export type BudgetCategoriesCountAggregateInputType = {
    id?: true
    name?: true
    budget?: true
    budget_left?: true
    _all?: true
  }

  export type BudgetCategoriesAggregateArgs = {
    /**
     * Filter which BudgetCategories to aggregate.
     */
    where?: BudgetCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: Enumerable<BudgetCategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BudgetCategories
    **/
    _count?: true | BudgetCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetCategoriesMaxAggregateInputType
  }

  export type GetBudgetCategoriesAggregateType<T extends BudgetCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgetCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgetCategories[P]>
      : GetScalarType<T[P], AggregateBudgetCategories[P]>
  }




  export type BudgetCategoriesGroupByArgs = {
    where?: BudgetCategoriesWhereInput
    orderBy?: Enumerable<BudgetCategoriesOrderByWithAggregationInput>
    by: BudgetCategoriesScalarFieldEnum[]
    having?: BudgetCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCategoriesCountAggregateInputType | true
    _avg?: BudgetCategoriesAvgAggregateInputType
    _sum?: BudgetCategoriesSumAggregateInputType
    _min?: BudgetCategoriesMinAggregateInputType
    _max?: BudgetCategoriesMaxAggregateInputType
  }


  export type BudgetCategoriesGroupByOutputType = {
    id: number
    name: string
    budget: number
    budget_left: number
    _count: BudgetCategoriesCountAggregateOutputType | null
    _avg: BudgetCategoriesAvgAggregateOutputType | null
    _sum: BudgetCategoriesSumAggregateOutputType | null
    _min: BudgetCategoriesMinAggregateOutputType | null
    _max: BudgetCategoriesMaxAggregateOutputType | null
  }

  type GetBudgetCategoriesGroupByPayload<T extends BudgetCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BudgetCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type BudgetCategoriesSelect = {
    id?: boolean
    name?: boolean
    budget?: boolean
    budget_left?: boolean
    expenses?: boolean | BudgetCategories$expensesArgs
    _count?: boolean | BudgetCategoriesCountOutputTypeArgs
  }


  export type BudgetCategoriesInclude = {
    expenses?: boolean | BudgetCategories$expensesArgs
    _count?: boolean | BudgetCategoriesCountOutputTypeArgs
  }

  export type BudgetCategoriesGetPayload<S extends boolean | null | undefined | BudgetCategoriesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BudgetCategories :
    S extends undefined ? never :
    S extends { include: any } & (BudgetCategoriesArgs | BudgetCategoriesFindManyArgs)
    ? BudgetCategories  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'expenses' ? Array < ExpensesGetPayload<S['include'][P]>>  :
        P extends '_count' ? BudgetCategoriesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BudgetCategoriesArgs | BudgetCategoriesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'expenses' ? Array < ExpensesGetPayload<S['select'][P]>>  :
        P extends '_count' ? BudgetCategoriesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BudgetCategories ? BudgetCategories[P] : never
  } 
      : BudgetCategories


  type BudgetCategoriesCountArgs = 
    Omit<BudgetCategoriesFindManyArgs, 'select' | 'include'> & {
      select?: BudgetCategoriesCountAggregateInputType | true
    }

  export interface BudgetCategoriesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BudgetCategories that matches the filter.
     * @param {BudgetCategoriesFindUniqueArgs} args - Arguments to find a BudgetCategories
     * @example
     * // Get one BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BudgetCategoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BudgetCategoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BudgetCategories'> extends True ? Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>> : Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T> | null, null>

    /**
     * Find one BudgetCategories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BudgetCategoriesFindUniqueOrThrowArgs} args - Arguments to find a BudgetCategories
     * @example
     * // Get one BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BudgetCategoriesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BudgetCategoriesFindUniqueOrThrowArgs>
    ): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>>

    /**
     * Find the first BudgetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesFindFirstArgs} args - Arguments to find a BudgetCategories
     * @example
     * // Get one BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BudgetCategoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BudgetCategoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BudgetCategories'> extends True ? Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>> : Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T> | null, null>

    /**
     * Find the first BudgetCategories that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesFindFirstOrThrowArgs} args - Arguments to find a BudgetCategories
     * @example
     * // Get one BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BudgetCategoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BudgetCategoriesFindFirstOrThrowArgs>
    ): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>>

    /**
     * Find zero or more BudgetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.findMany()
     * 
     * // Get first 10 BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetCategoriesWithIdOnly = await prisma.budgetCategories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BudgetCategoriesFindManyArgs>(
      args?: SelectSubset<T, BudgetCategoriesFindManyArgs>
    ): Prisma.PrismaPromise<Array<BudgetCategoriesGetPayload<T>>>

    /**
     * Create a BudgetCategories.
     * @param {BudgetCategoriesCreateArgs} args - Arguments to create a BudgetCategories.
     * @example
     * // Create one BudgetCategories
     * const BudgetCategories = await prisma.budgetCategories.create({
     *   data: {
     *     // ... data to create a BudgetCategories
     *   }
     * })
     * 
    **/
    create<T extends BudgetCategoriesCreateArgs>(
      args: SelectSubset<T, BudgetCategoriesCreateArgs>
    ): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>>

    /**
     * Delete a BudgetCategories.
     * @param {BudgetCategoriesDeleteArgs} args - Arguments to delete one BudgetCategories.
     * @example
     * // Delete one BudgetCategories
     * const BudgetCategories = await prisma.budgetCategories.delete({
     *   where: {
     *     // ... filter to delete one BudgetCategories
     *   }
     * })
     * 
    **/
    delete<T extends BudgetCategoriesDeleteArgs>(
      args: SelectSubset<T, BudgetCategoriesDeleteArgs>
    ): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>>

    /**
     * Update one BudgetCategories.
     * @param {BudgetCategoriesUpdateArgs} args - Arguments to update one BudgetCategories.
     * @example
     * // Update one BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BudgetCategoriesUpdateArgs>(
      args: SelectSubset<T, BudgetCategoriesUpdateArgs>
    ): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>>

    /**
     * Delete zero or more BudgetCategories.
     * @param {BudgetCategoriesDeleteManyArgs} args - Arguments to filter BudgetCategories to delete.
     * @example
     * // Delete a few BudgetCategories
     * const { count } = await prisma.budgetCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BudgetCategoriesDeleteManyArgs>(
      args?: SelectSubset<T, BudgetCategoriesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BudgetCategoriesUpdateManyArgs>(
      args: SelectSubset<T, BudgetCategoriesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BudgetCategories.
     * @param {BudgetCategoriesUpsertArgs} args - Arguments to update or create a BudgetCategories.
     * @example
     * // Update or create a BudgetCategories
     * const budgetCategories = await prisma.budgetCategories.upsert({
     *   create: {
     *     // ... data to create a BudgetCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BudgetCategories we want to update
     *   }
     * })
    **/
    upsert<T extends BudgetCategoriesUpsertArgs>(
      args: SelectSubset<T, BudgetCategoriesUpsertArgs>
    ): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T>>

    /**
     * Count the number of BudgetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesCountArgs} args - Arguments to filter BudgetCategories to count.
     * @example
     * // Count the number of BudgetCategories
     * const count = await prisma.budgetCategories.count({
     *   where: {
     *     // ... the filter for the BudgetCategories we want to count
     *   }
     * })
    **/
    count<T extends BudgetCategoriesCountArgs>(
      args?: Subset<T, BudgetCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BudgetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetCategoriesAggregateArgs>(args: Subset<T, BudgetCategoriesAggregateArgs>): Prisma.PrismaPromise<GetBudgetCategoriesAggregateType<T>>

    /**
     * Group by BudgetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCategoriesGroupByArgs} args - Group by arguments.
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
      T extends BudgetCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: BudgetCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BudgetCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BudgetCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BudgetCategoriesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    expenses<T extends BudgetCategories$expensesArgs= {}>(args?: Subset<T, BudgetCategories$expensesArgs>): Prisma.PrismaPromise<Array<ExpensesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BudgetCategories base type for findUnique actions
   */
  export type BudgetCategoriesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * Filter, which BudgetCategories to fetch.
     */
    where: BudgetCategoriesWhereUniqueInput
  }

  /**
   * BudgetCategories findUnique
   */
  export interface BudgetCategoriesFindUniqueArgs extends BudgetCategoriesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BudgetCategories findUniqueOrThrow
   */
  export type BudgetCategoriesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * Filter, which BudgetCategories to fetch.
     */
    where: BudgetCategoriesWhereUniqueInput
  }


  /**
   * BudgetCategories base type for findFirst actions
   */
  export type BudgetCategoriesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * Filter, which BudgetCategories to fetch.
     */
    where?: BudgetCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: Enumerable<BudgetCategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetCategories.
     */
    cursor?: BudgetCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetCategories.
     */
    distinct?: Enumerable<BudgetCategoriesScalarFieldEnum>
  }

  /**
   * BudgetCategories findFirst
   */
  export interface BudgetCategoriesFindFirstArgs extends BudgetCategoriesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BudgetCategories findFirstOrThrow
   */
  export type BudgetCategoriesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * Filter, which BudgetCategories to fetch.
     */
    where?: BudgetCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: Enumerable<BudgetCategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetCategories.
     */
    cursor?: BudgetCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetCategories.
     */
    distinct?: Enumerable<BudgetCategoriesScalarFieldEnum>
  }


  /**
   * BudgetCategories findMany
   */
  export type BudgetCategoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * Filter, which BudgetCategories to fetch.
     */
    where?: BudgetCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetCategories to fetch.
     */
    orderBy?: Enumerable<BudgetCategoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BudgetCategories.
     */
    cursor?: BudgetCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetCategories.
     */
    skip?: number
    distinct?: Enumerable<BudgetCategoriesScalarFieldEnum>
  }


  /**
   * BudgetCategories create
   */
  export type BudgetCategoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * The data needed to create a BudgetCategories.
     */
    data: XOR<BudgetCategoriesCreateInput, BudgetCategoriesUncheckedCreateInput>
  }


  /**
   * BudgetCategories update
   */
  export type BudgetCategoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * The data needed to update a BudgetCategories.
     */
    data: XOR<BudgetCategoriesUpdateInput, BudgetCategoriesUncheckedUpdateInput>
    /**
     * Choose, which BudgetCategories to update.
     */
    where: BudgetCategoriesWhereUniqueInput
  }


  /**
   * BudgetCategories updateMany
   */
  export type BudgetCategoriesUpdateManyArgs = {
    /**
     * The data used to update BudgetCategories.
     */
    data: XOR<BudgetCategoriesUpdateManyMutationInput, BudgetCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which BudgetCategories to update
     */
    where?: BudgetCategoriesWhereInput
  }


  /**
   * BudgetCategories upsert
   */
  export type BudgetCategoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * The filter to search for the BudgetCategories to update in case it exists.
     */
    where: BudgetCategoriesWhereUniqueInput
    /**
     * In case the BudgetCategories found by the `where` argument doesn't exist, create a new BudgetCategories with this data.
     */
    create: XOR<BudgetCategoriesCreateInput, BudgetCategoriesUncheckedCreateInput>
    /**
     * In case the BudgetCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetCategoriesUpdateInput, BudgetCategoriesUncheckedUpdateInput>
  }


  /**
   * BudgetCategories delete
   */
  export type BudgetCategoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
    /**
     * Filter which BudgetCategories to delete.
     */
    where: BudgetCategoriesWhereUniqueInput
  }


  /**
   * BudgetCategories deleteMany
   */
  export type BudgetCategoriesDeleteManyArgs = {
    /**
     * Filter which BudgetCategories to delete
     */
    where?: BudgetCategoriesWhereInput
  }


  /**
   * BudgetCategories.expenses
   */
  export type BudgetCategories$expensesArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    where?: ExpensesWhereInput
    orderBy?: Enumerable<ExpensesOrderByWithRelationInput>
    cursor?: ExpensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExpensesScalarFieldEnum>
  }


  /**
   * BudgetCategories without action
   */
  export type BudgetCategoriesArgs = {
    /**
     * Select specific fields to fetch from the BudgetCategories
     */
    select?: BudgetCategoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BudgetCategoriesInclude | null
  }



  /**
   * Model Expenses
   */


  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    categoryId: number | null
  }

  export type ExpensesSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    categoryId: number | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    categoryId: number | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    categoryId: number | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    quantity: number
    categoryId: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    id?: true
    quantity?: true
    categoryId?: true
  }

  export type ExpensesSumAggregateInputType = {
    id?: true
    quantity?: true
    categoryId?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    quantity?: true
    categoryId?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    quantity?: true
    categoryId?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    quantity?: true
    categoryId?: true
    _all?: true
  }

  export type ExpensesAggregateArgs = {
    /**
     * Filter which Expenses to aggregate.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpensesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type ExpensesGroupByArgs = {
    where?: ExpensesWhereInput
    orderBy?: Enumerable<ExpensesOrderByWithAggregationInput>
    by: ExpensesScalarFieldEnum[]
    having?: ExpensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }


  export type ExpensesGroupByOutputType = {
    id: number
    quantity: number
    categoryId: number
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends ExpensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type ExpensesSelect = {
    id?: boolean
    quantity?: boolean
    categoryId?: boolean
    category?: boolean | BudgetCategoriesArgs
  }


  export type ExpensesInclude = {
    category?: boolean | BudgetCategoriesArgs
  }

  export type ExpensesGetPayload<S extends boolean | null | undefined | ExpensesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Expenses :
    S extends undefined ? never :
    S extends { include: any } & (ExpensesArgs | ExpensesFindManyArgs)
    ? Expenses  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? BudgetCategoriesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExpensesArgs | ExpensesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? BudgetCategoriesGetPayload<S['select'][P]> :  P extends keyof Expenses ? Expenses[P] : never
  } 
      : Expenses


  type ExpensesCountArgs = 
    Omit<ExpensesFindManyArgs, 'select' | 'include'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface ExpensesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Expenses that matches the filter.
     * @param {ExpensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpensesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExpensesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Expenses'> extends True ? Prisma__ExpensesClient<ExpensesGetPayload<T>> : Prisma__ExpensesClient<ExpensesGetPayload<T> | null, null>

    /**
     * Find one Expenses that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpensesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExpensesFindUniqueOrThrowArgs>
    ): Prisma__ExpensesClient<ExpensesGetPayload<T>>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpensesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExpensesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Expenses'> extends True ? Prisma__ExpensesClient<ExpensesGetPayload<T>> : Prisma__ExpensesClient<ExpensesGetPayload<T> | null, null>

    /**
     * Find the first Expenses that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpensesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExpensesFindFirstOrThrowArgs>
    ): Prisma__ExpensesClient<ExpensesGetPayload<T>>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExpensesFindManyArgs>(
      args?: SelectSubset<T, ExpensesFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExpensesGetPayload<T>>>

    /**
     * Create a Expenses.
     * @param {ExpensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
    **/
    create<T extends ExpensesCreateArgs>(
      args: SelectSubset<T, ExpensesCreateArgs>
    ): Prisma__ExpensesClient<ExpensesGetPayload<T>>

    /**
     * Delete a Expenses.
     * @param {ExpensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
    **/
    delete<T extends ExpensesDeleteArgs>(
      args: SelectSubset<T, ExpensesDeleteArgs>
    ): Prisma__ExpensesClient<ExpensesGetPayload<T>>

    /**
     * Update one Expenses.
     * @param {ExpensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpensesUpdateArgs>(
      args: SelectSubset<T, ExpensesUpdateArgs>
    ): Prisma__ExpensesClient<ExpensesGetPayload<T>>

    /**
     * Delete zero or more Expenses.
     * @param {ExpensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpensesDeleteManyArgs>(
      args?: SelectSubset<T, ExpensesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpensesUpdateManyArgs>(
      args: SelectSubset<T, ExpensesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expenses.
     * @param {ExpensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
    **/
    upsert<T extends ExpensesUpsertArgs>(
      args: SelectSubset<T, ExpensesUpsertArgs>
    ): Prisma__ExpensesClient<ExpensesGetPayload<T>>

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpensesCountArgs>(
      args?: Subset<T, ExpensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesGroupByArgs} args - Group by arguments.
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
      T extends ExpensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpensesGroupByArgs['orderBy'] }
        : { orderBy?: ExpensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExpensesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends BudgetCategoriesArgs= {}>(args?: Subset<T, BudgetCategoriesArgs>): Prisma__BudgetCategoriesClient<BudgetCategoriesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Expenses base type for findUnique actions
   */
  export type ExpensesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findUnique
   */
  export interface ExpensesFindUniqueArgs extends ExpensesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Expenses findUniqueOrThrow
   */
  export type ExpensesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }


  /**
   * Expenses base type for findFirst actions
   */
  export type ExpensesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpensesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: Enumerable<ExpensesScalarFieldEnum>
  }

  /**
   * Expenses findFirst
   */
  export interface ExpensesFindFirstArgs extends ExpensesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Expenses findFirstOrThrow
   */
  export type ExpensesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpensesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: Enumerable<ExpensesScalarFieldEnum>
  }


  /**
   * Expenses findMany
   */
  export type ExpensesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: Enumerable<ExpensesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: Enumerable<ExpensesScalarFieldEnum>
  }


  /**
   * Expenses create
   */
  export type ExpensesCreateArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * The data needed to create a Expenses.
     */
    data: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
  }


  /**
   * Expenses update
   */
  export type ExpensesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * The data needed to update a Expenses.
     */
    data: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
    /**
     * Choose, which Expenses to update.
     */
    where: ExpensesWhereUniqueInput
  }


  /**
   * Expenses updateMany
   */
  export type ExpensesUpdateManyArgs = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
  }


  /**
   * Expenses upsert
   */
  export type ExpensesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * The filter to search for the Expenses to update in case it exists.
     */
    where: ExpensesWhereUniqueInput
    /**
     * In case the Expenses found by the `where` argument doesn't exist, create a new Expenses with this data.
     */
    create: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
    /**
     * In case the Expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
  }


  /**
   * Expenses delete
   */
  export type ExpensesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
    /**
     * Filter which Expenses to delete.
     */
    where: ExpensesWhereUniqueInput
  }


  /**
   * Expenses deleteMany
   */
  export type ExpensesDeleteManyArgs = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpensesWhereInput
  }


  /**
   * Expenses without action
   */
  export type ExpensesArgs = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpensesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BudgetCategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    budget: 'budget',
    budget_left: 'budget_left'
  };

  export type BudgetCategoriesScalarFieldEnum = (typeof BudgetCategoriesScalarFieldEnum)[keyof typeof BudgetCategoriesScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    categoryId: 'categoryId'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type BudgetCategoriesWhereInput = {
    AND?: Enumerable<BudgetCategoriesWhereInput>
    OR?: Enumerable<BudgetCategoriesWhereInput>
    NOT?: Enumerable<BudgetCategoriesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    budget?: IntFilter | number
    budget_left?: IntFilter | number
    expenses?: ExpensesListRelationFilter
  }

  export type BudgetCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
    expenses?: ExpensesOrderByRelationAggregateInput
  }

  export type BudgetCategoriesWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type BudgetCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
    _count?: BudgetCategoriesCountOrderByAggregateInput
    _avg?: BudgetCategoriesAvgOrderByAggregateInput
    _max?: BudgetCategoriesMaxOrderByAggregateInput
    _min?: BudgetCategoriesMinOrderByAggregateInput
    _sum?: BudgetCategoriesSumOrderByAggregateInput
  }

  export type BudgetCategoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BudgetCategoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<BudgetCategoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BudgetCategoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    budget?: IntWithAggregatesFilter | number
    budget_left?: IntWithAggregatesFilter | number
  }

  export type ExpensesWhereInput = {
    AND?: Enumerable<ExpensesWhereInput>
    OR?: Enumerable<ExpensesWhereInput>
    NOT?: Enumerable<ExpensesWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    categoryId?: IntFilter | number
    category?: XOR<BudgetCategoriesRelationFilter, BudgetCategoriesWhereInput>
  }

  export type ExpensesOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    category?: BudgetCategoriesOrderByWithRelationInput
  }

  export type ExpensesWhereUniqueInput = {
    id?: number
  }

  export type ExpensesOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    _count?: ExpensesCountOrderByAggregateInput
    _avg?: ExpensesAvgOrderByAggregateInput
    _max?: ExpensesMaxOrderByAggregateInput
    _min?: ExpensesMinOrderByAggregateInput
    _sum?: ExpensesSumOrderByAggregateInput
  }

  export type ExpensesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExpensesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExpensesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExpensesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
  }

  export type BudgetCategoriesCreateInput = {
    name: string
    budget: number
    budget_left?: number
    expenses?: ExpensesCreateNestedManyWithoutCategoryInput
  }

  export type BudgetCategoriesUncheckedCreateInput = {
    id?: number
    name: string
    budget: number
    budget_left?: number
    expenses?: ExpensesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BudgetCategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    budget_left?: IntFieldUpdateOperationsInput | number
    expenses?: ExpensesUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetCategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    budget_left?: IntFieldUpdateOperationsInput | number
    expenses?: ExpensesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BudgetCategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    budget_left?: IntFieldUpdateOperationsInput | number
  }

  export type BudgetCategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    budget_left?: IntFieldUpdateOperationsInput | number
  }

  export type ExpensesCreateInput = {
    quantity: number
    category: BudgetCategoriesCreateNestedOneWithoutExpensesInput
  }

  export type ExpensesUncheckedCreateInput = {
    id?: number
    quantity: number
    categoryId: number
  }

  export type ExpensesUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    category?: BudgetCategoriesUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpensesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpensesUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ExpensesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ExpensesListRelationFilter = {
    every?: ExpensesWhereInput
    some?: ExpensesWhereInput
    none?: ExpensesWhereInput
  }

  export type ExpensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
  }

  export type BudgetCategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
  }

  export type BudgetCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
  }

  export type BudgetCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
  }

  export type BudgetCategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
    budget_left?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BudgetCategoriesRelationFilter = {
    is?: BudgetCategoriesWhereInput
    isNot?: BudgetCategoriesWhereInput
  }

  export type ExpensesCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpensesAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpensesMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpensesMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpensesSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
  }

  export type ExpensesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ExpensesCreateWithoutCategoryInput>, Enumerable<ExpensesUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ExpensesCreateOrConnectWithoutCategoryInput>
    connect?: Enumerable<ExpensesWhereUniqueInput>
  }

  export type ExpensesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ExpensesCreateWithoutCategoryInput>, Enumerable<ExpensesUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ExpensesCreateOrConnectWithoutCategoryInput>
    connect?: Enumerable<ExpensesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpensesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ExpensesCreateWithoutCategoryInput>, Enumerable<ExpensesUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ExpensesCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ExpensesUpsertWithWhereUniqueWithoutCategoryInput>
    set?: Enumerable<ExpensesWhereUniqueInput>
    disconnect?: Enumerable<ExpensesWhereUniqueInput>
    delete?: Enumerable<ExpensesWhereUniqueInput>
    connect?: Enumerable<ExpensesWhereUniqueInput>
    update?: Enumerable<ExpensesUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ExpensesUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ExpensesScalarWhereInput>
  }

  export type ExpensesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ExpensesCreateWithoutCategoryInput>, Enumerable<ExpensesUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ExpensesCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ExpensesUpsertWithWhereUniqueWithoutCategoryInput>
    set?: Enumerable<ExpensesWhereUniqueInput>
    disconnect?: Enumerable<ExpensesWhereUniqueInput>
    delete?: Enumerable<ExpensesWhereUniqueInput>
    connect?: Enumerable<ExpensesWhereUniqueInput>
    update?: Enumerable<ExpensesUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ExpensesUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ExpensesScalarWhereInput>
  }

  export type BudgetCategoriesCreateNestedOneWithoutExpensesInput = {
    create?: XOR<BudgetCategoriesCreateWithoutExpensesInput, BudgetCategoriesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: BudgetCategoriesCreateOrConnectWithoutExpensesInput
    connect?: BudgetCategoriesWhereUniqueInput
  }

  export type BudgetCategoriesUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<BudgetCategoriesCreateWithoutExpensesInput, BudgetCategoriesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: BudgetCategoriesCreateOrConnectWithoutExpensesInput
    upsert?: BudgetCategoriesUpsertWithoutExpensesInput
    connect?: BudgetCategoriesWhereUniqueInput
    update?: XOR<BudgetCategoriesUpdateWithoutExpensesInput, BudgetCategoriesUncheckedUpdateWithoutExpensesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type ExpensesCreateWithoutCategoryInput = {
    quantity: number
  }

  export type ExpensesUncheckedCreateWithoutCategoryInput = {
    id?: number
    quantity: number
  }

  export type ExpensesCreateOrConnectWithoutCategoryInput = {
    where: ExpensesWhereUniqueInput
    create: XOR<ExpensesCreateWithoutCategoryInput, ExpensesUncheckedCreateWithoutCategoryInput>
  }

  export type ExpensesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ExpensesWhereUniqueInput
    update: XOR<ExpensesUpdateWithoutCategoryInput, ExpensesUncheckedUpdateWithoutCategoryInput>
    create: XOR<ExpensesCreateWithoutCategoryInput, ExpensesUncheckedCreateWithoutCategoryInput>
  }

  export type ExpensesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ExpensesWhereUniqueInput
    data: XOR<ExpensesUpdateWithoutCategoryInput, ExpensesUncheckedUpdateWithoutCategoryInput>
  }

  export type ExpensesUpdateManyWithWhereWithoutCategoryInput = {
    where: ExpensesScalarWhereInput
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyWithoutExpensesInput>
  }

  export type ExpensesScalarWhereInput = {
    AND?: Enumerable<ExpensesScalarWhereInput>
    OR?: Enumerable<ExpensesScalarWhereInput>
    NOT?: Enumerable<ExpensesScalarWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    categoryId?: IntFilter | number
  }

  export type BudgetCategoriesCreateWithoutExpensesInput = {
    name: string
    budget: number
    budget_left?: number
  }

  export type BudgetCategoriesUncheckedCreateWithoutExpensesInput = {
    id?: number
    name: string
    budget: number
    budget_left?: number
  }

  export type BudgetCategoriesCreateOrConnectWithoutExpensesInput = {
    where: BudgetCategoriesWhereUniqueInput
    create: XOR<BudgetCategoriesCreateWithoutExpensesInput, BudgetCategoriesUncheckedCreateWithoutExpensesInput>
  }

  export type BudgetCategoriesUpsertWithoutExpensesInput = {
    update: XOR<BudgetCategoriesUpdateWithoutExpensesInput, BudgetCategoriesUncheckedUpdateWithoutExpensesInput>
    create: XOR<BudgetCategoriesCreateWithoutExpensesInput, BudgetCategoriesUncheckedCreateWithoutExpensesInput>
  }

  export type BudgetCategoriesUpdateWithoutExpensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    budget_left?: IntFieldUpdateOperationsInput | number
  }

  export type BudgetCategoriesUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    budget?: IntFieldUpdateOperationsInput | number
    budget_left?: IntFieldUpdateOperationsInput | number
  }

  export type ExpensesUpdateWithoutCategoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ExpensesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ExpensesUncheckedUpdateManyWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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