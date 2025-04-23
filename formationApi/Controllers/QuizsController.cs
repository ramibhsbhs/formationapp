using formationApi.data.Repositories;
using formationApi.dtos.request;
using Microsoft.AspNetCore.Mvc;
using formationApi.data.Entities;
using Microsoft.AspNetCore.Authorization;
using formationApi.dtos.response;

namespace formationApi.Controllers
{
    public class QuizsController :BaseApiController
    {
         private readonly IRepositoryWrapper _repositoryWrapper;

        public QuizsController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> CreateQuiz([FromBody] CreateQuizDto createQuizDto)
        {

            var createdAt = DateTime.UtcNow;
            var quiz = new Quiz
            {
                Title = createQuizDto.Title,
                Questions = createQuizDto.Questions.Select(q => new Question
                {
                    Title = q.Title,
                    CreatedAt = createdAt,
                    Enable = true,
                    Answers = q.Answers.Select(a => new Answer
                    {
                        Text = a.Text,
                        IsCorrect = a.IsCorrect,
                        CreatedAt = createdAt,Enable = true
                    }).ToList()
                }).ToList()
            };

            await _repositoryWrapper.Quiz.Create(quiz);

            return CreatedAtAction(nameof(CreateQuiz), new { id = quiz.Id }, quiz);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllQuizzes()
        {
            var quizzes = await _repositoryWrapper.Quiz.GetAll();
            return Ok(quizzes.ToDtoList());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetQuizById(int id)
        {
            var quiz = await _repositoryWrapper.Quiz.Get(id);
            if (quiz == null)
            {
                return NotFound();
            }
            return Ok(quiz.ToDto());
        }
    }
}