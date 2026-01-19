from django.shortcuts import render

from django.http import HttpResponse, JsonResponse

def hello_view(request):
    if request.method == "GET":
        return HttpResponse("Hello, World!")
    return HttpResponse("Only GET requests allowed.", status=405)

def info_view(request):
    if request.method == "GET":
        data = {"app": "Books API", "version": "1.0", "status": "running"}
        return JsonResponse(data)
    return JsonResponse({"error": "Only GET requests allowed."}, status=405)

def greet_user(request):
    if request.method == "GET":
        name = request.GET.get("name", "Guest")
        return HttpResponse(f"Hello, {name}!")
    return HttpResponse("Only GET requests allowed.", status=405)