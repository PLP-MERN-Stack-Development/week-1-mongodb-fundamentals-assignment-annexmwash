// creating plp_bookstore database and  books collection
// basic crud operations


test> use plp_bookstore
switched to db plp_bookstore
plp_bookstore> db.books.find({ genre:"Fiction"}).pretty()
[
  {
    _id: ObjectId('684a9602b531fffca3127a0c'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 12.99,
    in_stock: true,
    pages: 208,
    publisher: 'HarperOne'
  }
]
plp_bookstore> db.books.find({ published_year: { $gt: 1950 } }).pretty()
[
  {
    _id: ObjectId('684a9602b531fffca3127a06'),
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    published_year: 2018,
    price: 13.99,
    in_stock: true,
    pages: 352,
    publisher: 'Random House'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a08'),
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Biography',
    published_year: 2018,
    price: 17.99,
    in_stock: true,
    pages: 448,
    publisher: 'Crown Publishing'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a0a'),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    published_year: 1960,
    price: 8.99,
    in_stock: false,
    pages: 281,
    publisher: 'J.B. Lippincott & Co.'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a0b'),
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    published_year: 1965,
    price: 19.99,
    in_stock: true,
    pages: 412,
    publisher: 'Chilton Books'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a0c'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 12.99,
    in_stock: true,
    pages: 208,
    publisher: 'HarperOne'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a0d'),
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    published_year: 2011,
    price: 18.99,
    in_stock: true,
    pages: 443,
    publisher: 'Harvill Secker'
  }
]
...   { title: "The Alchemist" },
...   { $set: { price: 12.99 } }
... )
{   _id: ObjectId('684a9602b531fffca3127a07'),
  acknowledged: true,
  insertedId: null, Orwell',
  matchedCount: 1,ian',
  modifiedCount: 0, 1949,
  upsertedCount: 0
}   in_stock: false,
plp_bookstore>
{ acknowledged: true, deletedCount: 1 }
  }
]
 
// using advenced queries ..task number 3
plp_bookstore> db.books.find(
...   { in_stock: true, published_year: { $gt: 2010 } }
... )
[
  {
    _id: ObjectId('684a9602b531fffca3127a06'),
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    published_year: 2018,
    price: 13.99,
    in_stock: true,
    pages: 352,
    publisher: 'Random House'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a08'),
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Biography',
    published_year: 2018,
    price: 17.99,
    in_stock: true,
    pages: 448,
    publisher: 'Crown Publishing'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a0d'),
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    published_year: 2011,
    price: 18.99,
    in_stock: true,
    pages: 443,
    publisher: 'Harvill Secker'
  }
]
plp_bookstore> db.books.find(
...   { in_stock: true, published_year: { $gt: 2010 } },
...   { _id: 0, title: 1, author: 1, price: 1 }
... )
[
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 }
]
plp_bookstore> db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ price: 1 })
[
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 8.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99
  },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 },
  { title: 'Dune', author: 'Frank Herbert', price: 19.99 }
]
plp_bookstore> db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ price: -1 })
[
  { title: 'Dune', author: 'Frank Herbert', price: 19.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99
  },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 8.99 }
]
plp_bookstore> db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })
[
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99
  },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 8.99 },
  { title: 'Dune', author: 'Frank Herbert', price: 19.99 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99 }
]
plp_bookstore>   .sort({ title: 1 })
Invalid REPL keyword
plp_bookstore>   .limit(5)
Invalid REPL keyword
plp_bookstore> db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })
[
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99
  },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 8.99 },
  { title: 'Dune', author: 'Frank Herbert', price: 19.99 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99 }
]
plp_bookstore>   .sort({ title: 1 })
Invalid REPL keyword
plp_bookstore>   .skip(5)
Invalid REPL keyword
plp_bookstore>   .limit(5)

// task number aggregation pipeline
plp_bookstore> db.books.find(
...   { in_stock: true, published_year: { $gt: 2010 } }
... )
[
  {
    _id: ObjectId('684a9602b531fffca3127a06'),
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    published_year: 2018,
    price: 13.99,
    in_stock: true,
    pages: 352,
    publisher: 'Random House'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a08'),
    title: 'Becoming',
    author: 'Michelle Obama',
    genre: 'Biography',
    published_year: 2018,
    price: 17.99,
    in_stock: true,
    pages: 448,
    publisher: 'Crown Publishing'
  },
  {
    _id: ObjectId('684a9602b531fffca3127a0d'),
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    published_year: 2011,
    price: 18.99,
    in_stock: true,
    pages: 443,
    publisher: 'Harvill Secker'
  }
]
plp_bookstore> db.books.find(
...   { in_stock: true, published_year: { $gt: 2010 } },
...   { _id: 0, title: 1, author: 1, price: 1 }
... )
[
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 }
]
plp_bookstore> db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ price: 1 })
[
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 8.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99
  },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 },
  { title: 'Dune', author: 'Frank Herbert', price: 19.99 }
]
plp_bookstore> db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ price: -1 })
[
  { title: 'Dune', author: 'Frank Herbert', price: 19.99 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', price: 18.99 },
  { title: 'Becoming', author: 'Michelle Obama', price: 17.99 },
  { title: 'Educated', author: 'Tara Westover', price: 13.99 },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99 },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99
plp_bookstore> db.books.aggregate([
...   {
...     $group: {
...       _id: "$genre",
...       averagePrice: { $avg: "$price" },
...       totalBooks: { $sum: 1 }
...     }
...   },
...   {
...     $sort: { averagePrice: -1 } // Optional: sort by average price descending
...   }
... ])
[
  { _id: 'Science Fiction', averagePrice: 19.99, totalBooks: 1 },
  { _id: 'Non-Fiction', averagePrice: 18.99, totalBooks: 1 },
  { _id: 'Biography', averagePrice: 17.99, totalBooks: 1 },
  { _id: 'Memoir', averagePrice: 13.99, totalBooks: 1 },
  { _id: 'Fiction', averagePrice: 12.99, totalBooks: 1 },
  { _id: 'Fantasy', averagePrice: 11.99, totalBooks: 1 },
  { _id: 'Classic', averagePrice: 9.99, totalBooks: 2 }
]
plp_bookstore> db.books.aggregate([
...   {
...     $group: {
...       _id: "$author",
...       totalBooks: { $sum: 1 }
...     }
...   },
...   {
...     $sort: { totalBooks: -1 }
...   },
...   {
...     $limit: 1
...   }
... ])
[ { _id: 'Frank Herbert', totalBooks: 1 } ]
plp_bookstore> db.books.aggregate([
...   {
...     $project: {
...       decade: {
...         $concat: [
...           { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
...           "s"
...         ]
...       }
...     }
...   },
...   {
...     $group: {
...       _id: "$decade",
...       count: { $sum: 1 }
...     }
...   },
...   {
...     $sort: { _id: 1 }
...   }
... ])
[
  { _id: '1920s', count: 1 },
  { _id: '1930s', count: 1 },
  { _id: '1960s', count: 2 },
  { _id: '1980s', count: 1 },
  { _id: '2010s', count: 3 }
]

// task number 5
plp_bookstore> db.books.createIndex({ title: 1 })
title_1
plp_bookstore> db.books.createIndex({ author: 1, published_year: -1 })
author_1_published_year_-1
plp_bookstore> db.books.find({ title: "The Hobbit" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: { title: { '$eq': 'The Hobbit' } },
    indexFilterSet: false,
    queryHash: '79F2D0D9',
    planCacheShapeHash: '79F2D0D9',
    planCacheKey: 'E03CA69C',
    optimizationTimeMillis: 38,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 45,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: { title: 'The Hobbit' },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-ON8HURA',
    port: 27017,
    version: '8.0.10',
    gitVersion: '9d03076bb2d5147d5b6fe381c7118b0b0478b682'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
plp_bookstore> db.books.find({ title: "The Hobbit" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: { title: { '$eq': 'The Hobbit' } },
    indexFilterSet: false,
    queryHash: '79F2D0D9',
    planCacheShapeHash: '79F2D0D9',
    planCacheKey: 'E03CA69C',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 2,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: { title: 'The Hobbit' },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-ON8HURA',
    port: 27017,
    version: '8.0.10',
    gitVersion: '9d03076bb2d5147d5b6fe381c7118b0b0478b682'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
plp_bookstore> db.books.find({ title: "The Hobbit" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: { title: { '$eq': 'The Hobbit' } },
    indexFilterSet: false,
    queryHash: '79F2D0D9',
    planCacheShapeHash: '79F2D0D9',
    planCacheKey: 'E03CA69C',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: { title: 'The Hobbit' },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-ON8HURA',
    port: 27017,
    version: '8.0.10',
    gitVersion: '9d03076bb2d5147d5b6fe381c7118b0b0478b682'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
plp_bookstore> db.books.find({ title: "The Hobbit" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_bookstore.books',
    parsedQuery: { title: { '$eq': 'The Hobbit' } },
    indexFilterSet: false,
    queryHash: '79F2D0D9',
    planCacheShapeHash: '79F2D0D9',
    planCacheKey: 'E03CA69C',
    optimizationTimeMillis: 1,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 1,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { title: 1 },
        indexName: 'title_1',
        isMultiKey: false,
        multiKeyPaths: { title: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { title: [ '["The Hobbit", "The Hobbit"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'B6C1D6F79AAA979584A9BA83C2F8D87C839BED87CAE10CD5F0AE5B89BCE86C6B',
  command: {
    find: 'books',
    filter: { title: 'The Hobbit' },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-ON8HURA',
    port: 27017,
    version: '8.0.10',
    gitVersion: '9d03076bb2d5147d5b6fe381c7118b0b0478b682'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}






















