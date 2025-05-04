// using System;
// using System.Linq;
// using System.Linq.Expressions;
// using formationApi.data.Entities;
// using Microsoft.EntityFrameworkCore;

// namespace formationApi.data.Extensions
// {
//     /// <summary>
//     /// Extensions methods for IQueryable to handle enabled entities
//     /// </summary>
//     public static class QueryableExtensions
//     {
//         /// <summary>
//         /// Include only enabled related entities
//         /// </summary>
//         /// <typeparam name="TEntity">The type of the entity being queried</typeparam>
//         /// <typeparam name="TProperty">The type of the related entity to be included</typeparam>
//         /// <param name="source">The source IQueryable</param>
//         /// <param name="navigationPropertyPath">A lambda expression representing the navigation property to be included</param>
//         /// <returns>A new IQueryable with the related entities included</returns>
//         public static IQueryable<TEntity> IncludeEnabled<TEntity, TProperty>(
//             this IQueryable<TEntity> source,
//             Expression<Func<TEntity, IEnumerable<TProperty>>> navigationPropertyPath)
//             where TProperty : BaseEntity
//         {
//             return source.Include(navigationPropertyPath)
//                 .Where(e => navigationPropertyPath.Compile().Invoke(e).All(p => p.Enable));
//         }

//         /// <summary>
//         /// Include only enabled related entities with filtering
//         /// </summary>
//         /// <typeparam name="TEntity">The type of the entity being queried</typeparam>
//         /// <typeparam name="TProperty">The type of the related entity to be included</typeparam>
//         /// <param name="source">The source IQueryable</param>
//         /// <param name="navigationPropertyPath">A lambda expression representing the navigation property to be included</param>
//         /// <returns>A new IQueryable with the filtered related entities included</returns>
//         public static IQueryable<TEntity> IncludeEnabled<TEntity, TProperty>(
//             this IQueryable<TEntity> source,
//             Expression<Func<TEntity, IEnumerable<TProperty>>> navigationPropertyPath,
//             Expression<Func<TProperty, bool>> filter)
//             where TProperty : BaseEntity
//         {
//             return source.Include(e => navigationPropertyPath
//                 .Compile()
//                 .Invoke(e)
//                 .Where(p => p.Enable && filter.Compile().Invoke(p)));
//         }

//         /// <summary>
//         /// Then include only enabled related entities
//         /// </summary>
//         /// <typeparam name="TEntity">The type of the entity being queried</typeparam>
//         /// <typeparam name="TPreviousProperty">The type of the entity that was just included</typeparam>
//         /// <typeparam name="TProperty">The type of the related entity to be included</typeparam>
//         /// <param name="source">The source IQueryable</param>
//         /// <param name="navigationPropertyPath">A lambda expression representing the navigation property to be included</param>
//         /// <returns>A new IQueryable with the related entities included</returns>
//         public static IQueryable<TEntity> ThenIncludeEnabled<TEntity, TPreviousProperty, TProperty>(
//             this IQueryable<TEntity> source,
//             Expression<Func<TPreviousProperty, IEnumerable<TProperty>>> navigationPropertyPath)
//             where TProperty : BaseEntity
//             where TPreviousProperty : class
//         {
//             return source.Include(navigationPropertyPath.ToString())
//                 .Where(e => navigationPropertyPath.Compile().Invoke((TPreviousProperty)e).All(p => p.Enable));
//         }
//     }
// }
