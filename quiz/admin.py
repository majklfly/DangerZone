from django.contrib import admin
import nested_admin
from .models import Quiz, Question, Answer

class AnswerInline(nested_admin.NestedTabularInline):
    model = Answer


class QuestionInline(nested_admin.NestedTabularInline):
    model = Question
    inlines = [AnswerInline,]


class QuizAdmin(nested_admin.NestedModelAdmin):
    inlines = [QuestionInline,]


admin.site.register(Quiz, QuizAdmin)
