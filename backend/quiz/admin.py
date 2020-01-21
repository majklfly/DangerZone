from django.contrib import admin
import nested_admin
from .models import Quiz, Question, Answer, Response, QuizTakers

class AnswerInline(nested_admin.NestedTabularInline):
    model = Answer


class QuestionInline(nested_admin.NestedTabularInline):
    model = Question
    inlines = [AnswerInline,]


class QuizAdmin(nested_admin.NestedModelAdmin):
    inlines = [QuestionInline,]


class ResponseInline(admin.TabularInline):
    model = Response


class QuizTakersAdmin(admin.ModelAdmin):
    inlines = [ResponseInline,]


admin.site.register(Quiz, QuizAdmin)
admin.site.register(QuizTakers, QuizTakersAdmin)
admin.site.register(Response)
