using System.Collections.Generic;
using System.Linq;
using formationApi.data.Entities;

namespace formationApi.dtos.response
{
    public class QuizDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<QuestionDto> Questions { get; set; }
        public DateTime CreatedAt { get; set; }

        public class QuestionDto
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public List<AnswerDto> Answers { get; set; }
        }

        public class AnswerDto
        {
            public int Id { get; set; }
            public string Text { get; set; }
            public bool IsCorrect { get; set; }
        }
    }

    public static class QuizMapper
    {
        public static QuizDto ToDto(this Quiz quiz)
        {
            return new QuizDto
            {
                Id = quiz.Id,
                Title = quiz.Title,
                Questions = quiz.Questions?.Select(q => q.ToDto()).ToList() ?? new List<QuizDto.QuestionDto>(),
                CreatedAt = quiz.CreatedAt
            };
        }

        public static QuizDto.QuestionDto ToDto(this Question question)
        {
            return new QuizDto.QuestionDto
            {
                Id = question.Id,
                Title = question.Title,
                Answers = question.Answers?.Select(a => a.ToDto()).ToList() ?? new List<QuizDto.AnswerDto>()
            };
        }

        public static QuizDto.AnswerDto ToDto(this Answer answer)
        {
            return new QuizDto.AnswerDto
            {
                Id = answer.Id,
                Text = answer.Text,
                IsCorrect = answer.IsCorrect
            };
        }

        public static ICollection<QuizDto> ToDtoList(this ICollection<Quiz> quizzes)
        {
            return quizzes.Select(quiz => quiz.ToDto()).ToArray();
        }
    }
} 