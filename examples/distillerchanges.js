var data2 = [
	{
		"linetupleid" : 145,
		"linenumber" : 491,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "errorHandler.handle(((StringLiteralConcatenation{\"Could not find a suitable constructor\"+\n\" in \"+\n} + implementation.getName()) + \".\"));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 145,
		"linenumber" : 520,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "errorHandler.handle(ErrorMessage.MISSING_CONSTRUCTOR, implementation);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 195,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InternalFactory<String> stringFactory = (InternalFactory<String>) factories.get(Key.get(String.class, key.getName()));]Binding<String> stringBinding = getBinding(Key.get(String.class, key.getName()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 196,
		"linenumber" : 154,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((stringFactory == null) || (! (stringFactory instanceof ConstantFactory)))]((stringBinding == null) || (! stringBinding.isConstant()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 273,
		"linenumber" : 119,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List bindings = bindingsByType.get(type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 290,
		"linenumber" : 225,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "T t = null;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 290,
		"linenumber" : 228,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "T t;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 293,
		"linenumber" : 412,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<ParameterInjector<?>> parameterInjectors = new ArrayList<ParameterInjector<?>>();]ParameterInjector<?>[] parameterInjectors = new ParameterInjector<?>[parameterTypes.length];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 319,
		"linenumber" : 56,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((source + \" \") + message);]((getSourceString() + \" \") + message);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 360,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final Factory<?> factory = getFactory(Key.get(entryType, key.getName()));]final Factory<?> factory = getFactory(key.ofType(entryType));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 362,
		"linenumber" : 183,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Binding<?> counterpartBinding = getBinding(Key.get(primitiveCounterpart, key.getName()));]Binding<?> counterpartBinding = getBinding(key.ofType(primitiveCounterpart));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 366,
		"linenumber" : 353,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "inject.required()](! inject.optional())",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 438,
		"linenumber" : 163,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (factoryType instanceof ParameterizedType))](! (locatorType instanceof ParameterizedType))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 461,
		"linenumber" : 619,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final BoundGenerator<T> boundGenerator = new BoundGenerator<T>(generatorKey, errorHandler);]final BoundFactory<T> boundFactory = new BoundFactory<T>(factoryKey, errorHandler);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 487,
		"linenumber" : 271,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "new ConfigurationErrorHandler(source).handle(message, arguments);]configurationErrorHandler.handle(source, message, arguments);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 554,
		"linenumber" : 281,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ToStringBuilder(Locator.class).add(\"implementation\", implementation).toString();]new ToStringBuilder(Provider.class).add(\"implementation\", implementation).toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 615,
		"linenumber" : 369,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Collections.unmodifiableMap(bindings);]Collections.<Key<?>, Binding<?>>unmodifiableMap(bindings);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 698,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "injectors = container.injectors.get(implementation).toArray(new ContainerImpl.Injector[0]);]memberInjectors = injector.injectors.get(implementation).toArray(new InjectorImpl.SingleMemberInjector[0]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 702,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ContainerImpl.MissingDependencyException]InjectorImpl.MissingDependencyException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 728,
		"linenumber" : 38,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(SourceProviders.UNKNOWN_SOURCE, message);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 728,
		"linenumber" : 38,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(\"[unknown source]\", message);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 731,
		"linenumber" : 267,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((rawType.isArray() || rawType.isEnum()) || Modifier.isAbstract(modifiers)) || rawType.isPrimitive())]((rawType.isArray() || rawType.isEnum()) || rawType.isPrimitive())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 754,
		"linenumber" : 999,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "constructorInjector.construct(context, implementation);](T) constructorInjector.construct(context, context.getExpectedType());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 764,
		"linenumber" : 42,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((provided != null) || allowNullsBadBadBad)]((provided != null) || allowNullsBadBadBad())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 843,
		"linenumber" : 34,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "value;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 843,
		"linenumber" : 36,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "context.sanitize(value, source);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 988,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((\"bind \" + key) + ((bindTarget == null) ? \"\" : (\" to \" + bindTarget))) + ((bindScoping == null) ? \"\" : (\" in \" + bindScoping)));](((\"bind \" + key) + ((bindTarget == EMPTY_BIND_TARGET) ? \"\" : (\" to \" + bindTarget))) + ((bindScoping == EMPTY_SCOPING) ? \"\" : (\" in \" + bindScoping)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1019,
		"linenumber" : 41,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.interceptors = Arrays.asList(Objects.nonNull(interceptors, \"interceptors\"));]this.interceptors = Objects.nonNull(interceptors, \"interceptors\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1030,
		"linenumber" : 194,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.stage = stage;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1030,
		"linenumber" : 195,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.stage = Objects.nonNull(stage, \"stage\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1042,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((constructor.getParameterTypes().length == 0) ? null : injector.getParametersInjectors(constructor, constructor.getParameterAnnotations(), constructor.getGenericParameterTypes()));](constructionProxy.getParameters().isEmpty() ? null : injector.getParametersInjectors(constructionProxy.getMember(), constructionProxy.getParameters()));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 1069,
		"linenumber" : 185,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.closeScope(\"}\");",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1069,
		"linenumber" : 196,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeLine(\"        }\");",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1125,
		"linenumber" : 111,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "newMapBinder(binder, Key.get(MapBinder.<K, V>mapOf(keyType, valueType), annotation), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType), annotation), Multibinder.<K>newSetBinder(binder, keyType, annotation), Multibinder.<V>newSetBinder(binder, valueType, annotation));]newMapBinder(binder, valueType, Key.get(MapBinder.<K, V>mapOf(keyType, valueType), annotation), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType), annotation), Multibinder.<Entry<K, Provider<V>>>newSetBinder(binder, entryOfProviderOf(keyType, valueType), annotation));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1223,
		"linenumber" : 405,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(injector, key, SourceProviders.UNKNOWN_SOURCE, new ConstantFactory<T>(value), Scopes.NO_SCOPE);]super(injector, key, SourceProviders.UNKNOWN_SOURCE, new ConstantFactory<T>(value), Scopes.NO_SCOPE, LoadStrategy.LAZY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1233,
		"linenumber" : 196,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "final BindingImpl<?> binding:injector.explicitBindings.values()]final BindingImpl<?> binding:concat(injector.explicitBindings.values(), injector.jitBindings.values())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1330,
		"linenumber" : 59,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object toInject:outstandingInjections.keySet()]Object toInject:outstandingInjections",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1341,
		"linenumber" : 755,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(List<Binding<T>>) (List) multimap.get(type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1344,
		"linenumber" : 895,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.methodInvoker = new MethodInvoker() {\n  public Object invoke(Object target, Object... parameters) throws IllegalAccessException, InvocationTargetException {\n    return fastMethod.invoke(target, parameters);\n  }\n};]methodInvoker = new MethodInvoker() {\n  public Object invoke(Object target, Object... parameters) throws IllegalAccessException, InvocationTargetException {\n    return fastMethod.invoke(target, parameters);\n  }\n};",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 1346,
		"linenumber" : 1135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<Dependency<?>> dependencies = new ArrayList<Dependency<?>>();]List<Dependency<?>> dependencies = Lists.newArrayList();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1383,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String message = ((getMember() != null) ? String.format(ErrorMessages.CANNOT_INJECT_NULL_INTO_MEMBER, source, getMember()) : String.format(ErrorMessages.CANNOT_INJECT_NULL, source));]String message = ((getMember() != null) ? ErrorMessage.cannotInjectNullIntoMember(source, getMember()).toString() : ErrorMessage.cannotInjectNull(source).toString());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1480,
		"linenumber" : 646,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ResolveFailedException(ErrorMessage.missingBinding(key));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 1480,
		"linenumber" : 655,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "errors.missingImplementation(key).toException();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 1493,
		"linenumber" : 785,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Collections.<Dependency<?>>singleton(injectionPoint);]Collections.<InjectionPoint<?>>singleton(injectionPoint);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1567,
		"linenumber" : 45,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ProvisionException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 1568,
		"linenumber" : 46,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "e;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 1585,
		"linenumber" : 114,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "addMessage(\"Converter returned %s but we expected a[n] %s.\", converted, type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1706,
		"linenumber" : 95,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Annotation annotation:implementation.getAnnotations()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1756,
		"linenumber" : 55,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object toInject:outstandingInjections]Map.Entry<Object, Object> entry:outstandingInjections.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1769,
		"linenumber" : 460,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ClassBindingImpl<T>(this, key, source, scopedFactory, scope, lateBoundConstructor, loadStrategy);]new ClassBindingImpl<T>(this, keyForRawType, source, scopedFactory, scope, lateBoundConstructor, loadStrategy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1819,
		"linenumber" : 142,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "elements.add(new RequestInjection(getSource(), instances));]elements.add(new InjectionRequest(getSource(), instances));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1875,
		"linenumber" : 187,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((stage == Stage.PRODUCTION) && (binding.getScope() == Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))](((stage == Stage.PRODUCTION) && (binding.getScope() == SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1896,
		"linenumber" : 587,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new LinkedBindingImpl<T>(this, key, StackTraceElements.forType(type), Scopes.<T>scope(key, this, internalFactory, scope), scope, Key.get(subclass), loadStrategy);]new LinkedBindingImpl<T>(this, key, type, Scopes.<T>scope(key, this, internalFactory, scope), scope, Key.get(subclass), loadStrategy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1909,
		"linenumber" : 362,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(BindingImpl<String>) originalBinding;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1909,
		"linenumber" : 376,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(OldVersionBinding) originalBinding;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1931,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(source, (\"An exception was caught and reported. Message: \" + throwable.getMessage()), ImmutableList.<InjectionPoint>of(), throwable);]this(source, (\"An exception was caught and reported. Message: \" + throwable.getMessage()), ImmutableList.<Dependency>of(), throwable);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1959,
		"linenumber" : 129,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Parameter<?> parameter:entry.getValue().getParameters()]Dependency<?> dependency:entry.getValue().getInjectionPoint().getDependencies()",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1963,
		"linenumber" : 178,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.openScope(\"public %s<%s<?>> getParameters() {\", List.class, Parameter.class).openScope(\"return %s.<%s<?>>asList(\", Arrays.class, Parameter.class);]out.openScope(\"public %s<%s<?>> getParameters() {\", List.class, Dependency.class).openScope(\"return %s.<%s<?>>asList(\", Arrays.class, Dependency.class);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 2027,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(source, (\"An exception was caught and reported. Message: \" + throwable.getMessage()), ImmutableList.<Dependency>of(), throwable);]this((\"An exception was caught and reported. Message: \" + throwable.getMessage()), throwable, ImmutableList.of(source));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2047,
		"linenumber" : 674,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint.getMember()) : errors.withSource(injectionPoint.getMember()));]Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint) : errors);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 2070,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(message, null, ImmutableList.of(source));]this(ImmutableList.of(source), message, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2071,
		"linenumber" : 61,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(message, (Throwable) null);]this(ImmutableList.of(), message, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2072,
		"linenumber" : 297,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new Message(message.getMessage(), message.getCause(), stripDuplicates(sources));]new Message(stripDuplicates(sources), message.getMessage(), message.getCause());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2118,
		"linenumber" : 188,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Set<BindingImpl<?>> candidateBindings = ImmutableSet.copyOf(Iterables.concat(injector.explicitBindings.values(), injector.jitBindings.values()));]@SuppressWarnings(\"unchecked\") Set<BindingImpl<?>> candidateBindings = ImmutableSet.copyOf(Iterables.concat((Collection) injector.state.getExplicitBindingsThisLevel().values(), injector.jitBindings.values()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2124,
		"linenumber" : 32,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.initializable = initializable;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2124,
		"linenumber" : 32,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.value = value;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2148,
		"linenumber" : 1009,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ToStringBuilder(Injector.class).add(\"bindings\", explicitBindings).toString();]new ToStringBuilder(Injector.class).add(\"bindings\", state.getExplicitBindingsThisLevel()).toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2149,
		"linenumber" : 68,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<Object, Object> entry:outstandingInjections.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2149,
		"linenumber" : 77,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "InjectableReference<?> reference:pendingInjection.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2202,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ConfigurationException(errors);]new ConfigurationException(errors.getMessages());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 2269,
		"linenumber" : 610,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint) : errors);]Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint) : errors.withSource(injectionPoint));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 2356,
		"linenumber" : 155,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "state.lock();",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 2356,
		"linenumber" : 155,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "jitBindings]state.lock()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2369,
		"linenumber" : 292,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "M member:factory.getMembers(typeResolver.getRawType())]M member:factory.getMembers(MoreTypes.getRawType(typeResolver.getType()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2370,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.typeResolver = new TypeResolver(this.delegate.getClass());]this.typeLiteral = TypeLiteral.get(this.delegate.getClass());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2385,
		"linenumber" : 158,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Type[] result = new Type[types.length];]TypeLiteral<?>[] result = new TypeLiteral<?>[types.length];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2401,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>) TypeLiteral.get(typeLiteral.getReturnType(method));]@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>) typeLiteral.getReturnType(method);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2463,
		"linenumber" : 191,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((stage == Stage.PRODUCTION) && (binding.getScope() == com.google.inject.Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))](((stage == Stage.PRODUCTION) && (binding.getScope() == Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 2468,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "newMapBinder(binder, valueType, Key.get(MapBinder.<K, V>mapOf(keyType, valueType)), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType)), Multibinder.<Entry<K, Provider<V>>>newSetBinder(binder, entryOfProviderOf(keyType, valueType)));]newMapBinder(binder, valueType, Key.get(mapOf(keyType, valueType)), Key.get(mapOfProviderOf(keyType, valueType)), Multibinder.newSetBinder(binder, entryOfProviderOf(keyType, valueType)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2480,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "filterChain.doFilter(servletRequest, servletResponse);]filterPipeline.dispatch(servletRequest, servletResponse, filterChain);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 2488,
		"linenumber" : 71,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(GuiceFilter.pipeline.get() instanceof ManagedFilterPipeline)](GuiceFilter.pipeline instanceof ManagedFilterPipeline)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2508,
		"linenumber" : 93,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((scope == null) || (scope == Scopes.NO_SCOPE))]scoping.isNoScope()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2533,
		"linenumber" : 431,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constructorInjector = (ConstructorInjector<T>) injector.constructors.get(implementation, errors);]constructorInjector = (ConstructorInjector<T>) injectorImpl.constructors.get(implementation, errors);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2537,
		"linenumber" : 530,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new LinkedBindingImpl<T>(this, key, rawType, Scopes.<T>scope(key, this, internalFactory, scope), scope, targetKey, loadStrategy);]new LinkedBindingImpl<T>(this, key, rawType, Scopes.<T>scope(key, this, internalFactory, scoping), scoping, targetKey);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2554,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "staticInjections.add(new StaticInjection(injector, command.getSource(), command.getType()));]staticInjections.add(new StaticInjection(injector, request));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2604,
		"linenumber" : 160,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PrivateEnvironmentProcessor processor = new PrivateEnvironmentProcessor(errors, stage);]PrivateElementProcessor processor = new PrivateElementProcessor(errors, stage);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2626,
		"linenumber" : 244,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "newClassImplementationNode(binding, binding.getInjectionPoints());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2650,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "binder.withSource(element.getSource()).bindInterceptor(element.getClassMatcher(), element.getMethodMatcher(), interceptors.toArray(new MethodInterceptor[interceptors.size()]));]binder.withSource(element.getSource()).bindInterceptor(element.getClassMatcher(), element.getMethodMatcher(), interceptors.toArray(new org.aopalliance.intercept.MethodInterceptor[interceptors.size()]));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2653,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enhancer enhancer = new Enhancer();]net.sf.cglib.proxy.Enhancer enhancer = new net.sf.cglib.proxy.Enhancer();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2674,
		"linenumber" : 126,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "factory = factoryType.cast(Proxy.newProxyInstance(factoryType.getClassLoader(), new Class[]{factoryType}, this));]factory = factoryRawType.cast(Proxy.newProxyInstance(factoryRawType.getClassLoader(), new Class[]{factoryRawType}, this));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2676,
		"linenumber" : 109,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((classLoader != null) ? classLoader : ClassLoader.getSystemClassLoader());]((classLoader != null) ? classLoader : checkNotNull(getSystemClassLoaderOrNull(), \"Couldn\\\'t get a ClassLoader\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2683,
		"linenumber" : 339,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(binding instanceof ClassBindingImpl<?>)](binding instanceof ConstructorBindingImpl<?>)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2717,
		"linenumber" : 287,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "Exception]RuntimeException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 2749,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "binder.withSource(getSource()).getProvider(key);]initializeDelegate(binder.withSource(getSource()).getProvider(key));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2800,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "parameters[(i ++)] = parameterInjector.inject(errors, context);]parameters[i] = parameterInjector.inject(errors, context);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 2877,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.hashCode = MoreTypes.hashCode(type);]this.hashCode = type.hashCode();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2915,
		"linenumber" : 412,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! inject.optional())](! optional)",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 2922,
		"linenumber" : 244,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "annotation.annotationType().isAnnotationPresent(ScopeAnnotation.class)]Annotations.isScopeAnnotation(annotation.annotationType())",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 2936,
		"linenumber" : 524,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! injectableMember.optional)",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 2944,
		"linenumber" : 77,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "expectedType.cast(Proxy.newProxyInstance(classLoader, new Class[]{expectedType}, invocationHandler));]expectedType.cast(Proxy.newProxyInstance(classLoader, new Class[]{expectedType, CircularDependencyProxy.class}, invocationHandler));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2949,
		"linenumber" : 78,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "servletDefinitions.toArray(new ServletDefinition[servletDefinitions.size()]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2949,
		"linenumber" : 78,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "servletDefinitions;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2950,
		"linenumber" : 58,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(index < filterDefinitions.size())](index < filterDefinitions.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3008,
		"linenumber" : 177,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((jitDisabled && (jitType == JitLimitation.NO_JIT)) && (! isProvider(key)))]((options.jitDisabled && (jitType == JitLimitation.NO_JIT)) && (! isProvider(key)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3011,
		"linenumber" : 587,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((parent != null) && (! parent.jitDisabled))]((parent != null) && (! parent.options.jitDisabled))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3019,
		"linenumber" : 368,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "factoryRawType.cast(Proxy.newProxyInstance(factoryRawType.getClassLoader(), new Class[]{factoryRawType}, invocationHandler));]factoryRawType.cast(Proxy.newProxyInstance(BytecodeGen.getClassLoader(factoryRawType), new Class[]{factoryRawType}, invocationHandler));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3025,
		"linenumber" : 520,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3025,
		"linenumber" : 523,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "false;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3095,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(EntityManagerFactory.class).toProvider(EntityManagerProvider.EntityManagerFactoryProvider.class);]bind(EntityManagerFactory.class).toProvider(JpaPersistService.EntityManagerFactoryProvider.class);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3114,
		"linenumber" : 300,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((a.annotationType().getAnnotation(javax.inject.Qualifier.class) == null) && (a.annotationType().getAnnotation(com.google.inject.BindingAnnotation.class) == null))](a.annotationType().getAnnotation(javax.inject.Qualifier.class) == null)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3138,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dependency previous = dependency;]Dependency previous = this.dependency;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3205,
		"linenumber" : 124,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(shellBuilder.getInjectorOptions().stage == Stage.TOOL)](shellBuilder.getStage() == Stage.TOOL)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3269,
		"linenumber" : 38,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(key, source, allowProxy);]super(source, allowProxy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3276,
		"linenumber" : 665,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final Class<?> rawType = key.getTypeLiteral().getRawType();]Class<?> rawType = key.getTypeLiteral().getRawType();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3284,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ConstructionContext<T> constructionContext = context.getConstructionContext(this);]final ConstructionContext<T> constructionContext = context.getConstructionContext(this);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3296,
		"linenumber" : 255,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(T) constructorInjector.construct(errors, context, dependency.getKey().getTypeLiteral().getRawType(), allowCircularProxy);](T) constructorInjector.construct(errors, context, dependency.getKey().getTypeLiteral().getRawType(), allowCircularProxy, provisionCallback);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3334,
		"linenumber" : 249,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "filtersModuleBuilder.filterRegex(Lists.newArrayList(regex, regexes));]filtersModuleBuilder.filterRegex(ImmutableList.<String>builder().add(regex).add(regexes).build());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3371,
		"linenumber" : 157,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Injector injector = (Injector) linkedBinding.getInjector();]Injector injector = linkedBinding.getInjector();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3457,
		"linenumber" : 77,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "binding.getKeyMatcher().matches(key)]provisionBinding.getBindingMatcher().matches(binding)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3521,
		"linenumber" : 252,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "gnode.setStyle(NodeStyle.INVISIBLE);]gnode.setStyle(NodeStyle.SOLID);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3562,
		"linenumber" : 368,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(List) bindings;](List<Binding<?>>) (List<?>) bindings;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3563,
		"linenumber" : 384,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Binding binding = (Binding) element;]Binding<?> binding = (Binding<?>) element;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3572,
		"linenumber" : 33,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "uniqueId = nextUniqueId.getAndIncrement();]this.uniqueId = nextUniqueId.incrementAndGet();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3594,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((scope != null) ? scope : parent.getScope(annotationType));]((scopeBinding != null) ? scopeBinding : parent.getScopeBinding(annotationType));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3616,
		"linenumber" : 420,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "StackTraceElement[] callStack;]StackTraceElement[] callStack = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3628,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((source == SourceProvider.UNKNOWN_SOURCE) ? this : new Errors(this, source));](((source == this.source) || (source == SourceProvider.UNKNOWN_SOURCE)) ? this : new Errors(this, source));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3701,
		"linenumber" : 101,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(destinationFile.exists() && (! file.endsWith(SNAPSHOT_SIGNATURE)))](destinationFile.exists() && (file.indexOf(SNAPSHOT_SIGNATURE) < 0))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 3828,
		"linenumber" : 103,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "0;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3828,
		"linenumber" : 103,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 4079,
		"linenumber" : 376,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "value = parameter.getDefaultValue();]value = PluginParameterExpressionEvaluator.evaluate(parameter.getDefaultValue(), session);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 4113,
		"linenumber" : 171,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "i.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4113,
		"linenumber" : 171,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = testClasspathElements.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 4113,
		"linenumber" : 174,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 4113,
		"linenumber" : 174,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 4113,
		"linenumber" : 174,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < classpathElements.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4155,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(localRepository, eventDispatcher, properties, goals);]super(localRepository, userModel, eventDispatcher, properties, goals);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4199,
		"linenumber" : 67,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String key = def.getId();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4199,
		"linenumber" : 72,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String key = constructPluginKey(def);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4216,
		"linenumber" : 399,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((expression != null) & expression.startsWith(\"#component\"))]((expression != null) && expression.startsWith(\"#component\"))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4595,
		"linenumber" : 686,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "j.hasNext()](j.hasNext() && (dom == null))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 4608,
		"linenumber" : 686,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "j.hasNext()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 4608,
		"linenumber" : 686,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j.hasNext() && (dom == null))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 4745,
		"linenumber" : 815,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] classpath = new String[(dependencies.size() + 1)];]List classpath = new ArrayList((dependencies.size() + 1));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4789,
		"linenumber" : 615,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] args = {\"descriptor\", sourceDirectory, outputDirectory, pom, repoLocal};]String[] args = {\"descriptor\", sourceDirectory, outputDirectory, pom, localRepository.getBasedir()};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4797,
		"linenumber" : 802,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String element = ((repoLocal + \"/\") + d.getRepositoryPath());]String element = localRepository.getArtifactFile(d).getAbsolutePath();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4822,
		"linenumber" : 823,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dependency d = (Dependency) dependencies.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4822,
		"linenumber" : 823,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dependency d = (Dependency) dependencies.get(i);]Dependency d = (Dependency) i.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4904,
		"linenumber" : 703,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin\", \"plexus-container-default\", \"plexus-artifact-container\", \"wagon-provider-api\", \"classworlds\"});]artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"plexus-container-default\", \"plexus-artifact-container\", \"wagon-provider-api\", \"classworlds\"});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4999,
		"linenumber" : 83,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "Exception",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 4999,
		"linenumber" : 83,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "Exception]FileNotFoundException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 5034,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5034,
		"linenumber" : 48,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(message, artifact.getGroupId(), artifact.getArtifactId(), artifact.getVersion(), artifact.getType(), t);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5162,
		"linenumber" : 128,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "tag = javaClass.getTagByName(MAVEN_PLUGIN_DESCRIPTION);]tag = findInClassHierarchy(javaClass, MAVEN_PLUGIN_DESCRIPTION);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5424,
		"linenumber" : 153,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (componentSetDescriptor instanceof MavenPluginDescriptor))](! (componentSetDescriptor instanceof PluginDescriptor))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5537,
		"linenumber" : 61,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "artifact.setBaseVersion((m.group(1) + \"-SNAPSHOT\"));]artifact.setBaseVersion(((m.group(1) + \"-\") + SNAPSHOT_VERSION));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 5581,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteRenderer.copyResources(siteDirectory, outputDirectory, flavour);]siteRenderer.copyResources(outputDirectory, flavour, siteDirectory);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 5712,
		"linenumber" : 793,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"plexus-container-default\", \"maven-project\", \"plexus-container-artifact\", \"maven-reporting-api\", \"doxia-core\", \"wagon-provider-api\", \"classworlds\", \"maven-plugin\", \"plexus-marmalade-factory\", \"maven-script-marmalade\", \"maven-script-beanshell\", \"plexus-bsh-factory\", \"bsh\"\n  , \"marmalade-core\"});]artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"plexus-container-default\", \"maven-project\", \"plexus-container-artifact\", \"maven-reporting-api\", \"doxia-core\", \"wagon-provider-api\", \"classworlds\", \"maven-plugin\", \"plexus-marmalade-factory\", \"maven-script-marmalade\", \"maven-script-beanshell\", \"plexus-bsh-factory\", \"bsh\"\n  , \"marmalade-core\", \"plexus-utils\"});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5840,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "localRepository.setLocation(new File(System.getProperty(\"user.home\"), \".m2/repository\"));]localRepository.setLocation(new File(settings.getLocalRepository()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5950,
		"linenumber" : 252,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "Artifact.SCOPE_COMPILE.equals(a.getScope())](Artifact.SCOPE_COMPILE.equals(a.getScope()) || Artifact.SCOPE_PROVIDED.equals(a.getScope()))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6051,
		"linenumber" : 232,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Reporter childReporter = (Reporter) childReportersByKey.get(parentReporter.getKey());]ReportPlugin childReportPlugin = (ReportPlugin) childReportersByKey.get(parentReportPlugin.getKey());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6257,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(message, artifact, path);]super(message, artifact);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6274,
		"linenumber" : 190,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tableHeader(new String[]{\"Name\", \"Subscribe\", \"Unsubscribe\", \"Post\", \"Archive\", \"Other Archives\"});]tableHeader(new String[]{name, subscribe, unsubscribe, post, archive, archivesOther});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6310,
		"linenumber" : 438,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println((\"Maven version: \" + version));]System.out.println((\"Maven version: \" + properties.getProperty(\"version\", \"unknown\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6347,
		"linenumber" : 144,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new PluginManagerException((((\"Error occurred in the artifact container attempting to download plugin \" + groupId) + \":\") + artifactId), e);]new PluginManagerException((\"Error occurred in the artifact container attempting to download plugin \" + plugin.getKey()), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 6481,
		"linenumber" : 83,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.version = ((versionRange != null) ? versionRange.getRecommendedVersion() : null);]this.version = ((versionRange != null) ? versionRange.getRecommendedVersion().toString() : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6570,
		"linenumber" : 96,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "expression.equals(\"project\")]\"project\".equals(expression)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 6677,
		"linenumber" : 16,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(artifact, ((((artifact.getArtifactId() + \"-\") + LatestArtifactTransformation.LATEST_VERSION) + \".\") + SNAPSHOT_VERSION_FILE));]super(artifact, ((((artifact.getArtifactId() + \"-\") + Artifact.LATEST_VERSION) + \".\") + SNAPSHOT_VERSION_FILE));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6708,
		"linenumber" : 554,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(FORCE_PLUGIN_LATEST_CHECK).withDescription(\"Force checking of LATEST metadata for plugin versions\").create(\"cpl\"));]options.addOption(OptionBuilder.withLongOpt(\"check-plugin-latest\").withDescription(\"Force checking of LATEST metadata for plugin versions\").create(FORCE_PLUGIN_LATEST_CHECK));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6785,
		"linenumber" : 1054,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "project.setDependencyArtifacts(MavenProject.createArtifacts(artifactFactory, project.getDependencies()));]project.setDependencyArtifacts(project.createArtifacts(artifactFactory));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6801,
		"linenumber" : 192,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenProject project = (MavenProject) iterator.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6865,
		"linenumber" : 335,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "org.apache.maven.project.MailingList v3List = (org.apache.maven.project.MailingList) it.next();]org.apache.maven.model.v3_0_0.MailingList v3List = (org.apache.maven.model.v3_0_0.MailingList) it.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7002,
		"linenumber" : 419,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append(\"$>svn checkout \").append(svnRepo.getUrl()).append(\" \").append(model.getArtifactId());]sb.append(\"$ svn checkout \").append(svnRepo.getUrl()).append(\" \").append(model.getArtifactId());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7130,
		"linenumber" : 776,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.bottom += DEFAULT_ORGANIZATION_NAME;]bottom += DEFAULT_ORGANIZATION_NAME;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 7175,
		"linenumber" : 842,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final int exitCode = CommandLineUtils.executeCommandLine(cmd, new DefaultConsumer(), new DefaultConsumer());]int exitCode = CommandLineUtils.executeCommandLine(cmd, new DefaultConsumer(), new DefaultConsumer());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 7248,
		"linenumber" : 426,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 7248,
		"linenumber" : 426,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 7248,
		"linenumber" : 426,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < PROJECT_INFO_FILES.length)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7384,
		"linenumber" : 323,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(d.getGroupId().equals(\"surefire\") || d.getGroupId().equals(\"junit\"))](\"surefire\".equals(d.getGroupId()) || \"junit\".equals(d.getGroupId()))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7455,
		"linenumber" : 58,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String developerConnection = model.getScm().getDeveloperConnection();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7455,
		"linenumber" : 58,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String developerConnection = model.getScm().getDeveloperConnection();]String developerConnection = scm.getDeveloperConnection();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7611,
		"linenumber" : 940,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Model) modelCache.get(createCacheKey(groupId, artifactId, version));](MavenProject) modelCache.get(createCacheKey(groupId, artifactId, version));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7701,
		"linenumber" : 217,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "freshenSupplementalMetadata(snapshotSource, snapshotTarget, transaction, artifactReporter, reportOnly);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7701,
		"linenumber" : 217,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "freshenSupplementalMetadata(snapshotSource, snapshotTarget, transaction, artifactReporter, reportOnly);]mergeMetadata(metadataSource, metadataTarget, transaction, artifactReporter, reportOnly);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7750,
		"linenumber" : 988,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((line = reader.readLine()) != null)](line != null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8253,
		"linenumber" : 388,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(File[]) files.toArray(new File[0]);](File[]) files.toArray(EMPTY_FILE_ARRAY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8265,
		"linenumber" : 379,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "excludesStr.append(DEFAULT_EXCLUDES[i]);]excludesStr.append(defaultExcludes[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 8290,
		"linenumber" : 779,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addArgIfNotEmpty(arguments, \"-docencoding\", docencoding);]addArgIfNotEmpty(arguments, \"-docencoding\", quotedArgument(docencoding));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8458,
		"linenumber" : 373,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "IOException]FileNotFoundException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 8464,
		"linenumber" : 827,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MavenReportException((\"Exit code: \" + exitCode));]new MavenReportException((((\"Exit code: \" + exitCode) + \" - \") + err.getOutput()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8554,
		"linenumber" : 136,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "num ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 8694,
		"linenumber" : 1144,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new LifecycleExecutionException((\"Error resolving plugin version: \" + e.getMessage()), e);]new LifecycleExecutionException(e.getMessage(), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 8702,
		"linenumber" : 621,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "isAddedToClasspath(a)]a.getArtifactHandler().isAddedToClasspath()",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 8757,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Assembly assembly = null;]Assembly assembly;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8767,
		"linenumber" : 435,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "repository = new Repository();]repository = new DeploymentRepository();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8784,
		"linenumber" : 22,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(true == true)](true == true):\"true was not true\"",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9083,
		"linenumber" : 271,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ProfileManager globalProfileManager = request.getGlobalProfileManager();]ProfileManager globalProfileManager = new DefaultProfileManager(container);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9095,
		"linenumber" : 930,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "project.setRemoteArtifactRepositories(ProjectUtils.buildArtifactRepositories(model.getRepositories(), artifactRepositoryFactory, container));]project.setRemoteArtifactRepositories(mavenTools.buildArtifactRepositories(model.getRepositories()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9390,
		"linenumber" : 116,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PlexusContainer container = getWagonContainer(protocol);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9392,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new UnsupportedProtocolException((\"Cannot find wagon which supports the requested protocol: \" + protocol), e);]new UnsupportedProtocolException((\"Cannot find wagon which supports the requested protocol: \" + protocol), e1);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 9680,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((\"Plugin could not be found - check that the goal name is correct: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", e.getRemoteRepositories(), null, e.getCause());]super((\"Plugin could not be found - check that the goal name is correct: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", null, e.getRemoteRepositories(), null, e.getCause());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10092,
		"linenumber" : 127,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.create(SUPRESS_SNAPSHOT_UPDATES));]options.addOption(OptionBuilder.withLongOpt(\"no-snapshot-updates\").withDescription(\"Supress SNAPSHOT updates\").create(SUPRESS_SNAPSHOT_UPDATES));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10188,
		"linenumber" : 206,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((extensionArtifact != null) && (! projectSession.containsRealm(extensionArtifact)))]((extensionArtifact != null) && (! projectSession.containsExtensionRealm(extensionArtifact)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10259,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(projectId, message, new File(pomLocation), cause);]super(projectId, message, pomLocation, cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10289,
		"linenumber" : 167,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(message, cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10289,
		"linenumber" : 244,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(projectId, message, pomLocation, (Throwable) cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10396,
		"linenumber" : 906,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(report && (! (plugin instanceof MavenReport)))](report && (! (mojo instanceof MavenReport)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10477,
		"linenumber" : 600,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new PluginExecutionException(mojoExecution, project, e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 10477,
		"linenumber" : 600,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "e;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 10683,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "id.append(\'@\').append(depId.toString().hashCode());]id.append(\'@\').append(depId.toString().hashCode()).append(\"/thread:\").append(Thread.currentThread().getId());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11012,
		"linenumber" : 143,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String groupId = ((model.getGroupId() == null) ? model.getParent().getGroupId() : model.getGroupId());]String groupId = (((model.getGroupId() == null) && (model.getParent() != null)) ? model.getParent().getGroupId() : model.getGroupId());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 11016,
		"linenumber" : 333,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((domainModels.indexOf(domainModel) > 0) && (((((uri.equals(ProjectUri.name) || uri.equals(ProjectUri.packaging)) || uri.startsWith(ProjectUri.Profiles.xUri)) || uri.startsWith(ProjectUri.Build.Resources.xUri)) || uri.startsWith(ProjectUri.Build.TestResources.xUri)) || uri.startsWith(ProjectUri.PluginRepositories.xUri)))]((domainModels.indexOf(domainModel) > 0) && ((uri.equals(ProjectUri.name) || uri.equals(ProjectUri.packaging)) || uri.startsWith(ProjectUri.Profiles.xUri)))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 11134,
		"linenumber" : 383,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteUrl.append(\"/\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 11134,
		"linenumber" : 384,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteUrl.append(\"/\").append(projectName);]siteUrl.append(projectName);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 11177,
		"linenumber" : 663,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "buildPlanner = (BuildPlanner) container.lookup(BuildPlanner.class);]buildPlanner = container.lookup(BuildPlanner.class);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 11255,
		"linenumber" : 151,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "mp.getUri().startsWith(ProjectUri.DependencyManagement.xUri)]mp.getUri().startsWith(ProjectUri.Build.PluginManagement.xUri)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 11256,
		"linenumber" : 153,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "transformedProperties.add(new ModelProperty(mp.getUri().replace(ProjectUri.DependencyManagement.xUri, ProjectUri.xUri), mp.getResolvedValue()));]transformedProperties.add(new ModelProperty(mp.getUri().replace(ProjectUri.Build.PluginManagement.xUri, ProjectUri.Build.xUri), mp.getResolvedValue()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 11353,
		"linenumber" : 160,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ModelTransformerContext ctx = new ModelTransformerContext(PomTransformer.MODEL_CONTAINER_FACTORIES);]ModelTransformerContext ctx = new ModelTransformerContext(PomTransformer.MODEL_CONTAINER_INFOS);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11760,
		"linenumber" : 38,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Dependency d1:c.getDependencies()]Dependency d1:c",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 11843,
		"linenumber" : 117,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((source.getArtifactId() != null) && ((targetDependency.getArtifactId() == null) || (! isParent)))]isMatch(source.getArtifactId(), targetDependency.getArtifactId(), isDependencyManagement)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11925,
		"linenumber" : 135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "decodeUrl(normalized);]normalized;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 11972,
		"linenumber" : 225,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenExecutionRequest request = new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setUseReactor(useReactor).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy);]MavenExecutionRequest request = new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setUseReactor(useReactor).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy).setUserToolchainsFile(userToolchainsFile);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12000,
		"linenumber" : 124,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "root = (isPlugin ? mavenPluginArtifact : mavenRootArtifact);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12000,
		"linenumber" : 124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "root = (isPlugin ? mavenPluginArtifact : mavenRootArtifact);]root = (isPlugin ? mavenPluginArtifact : rootArtifact);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 12000,
		"linenumber" : 190,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "root = (isPlugin ? mavenPluginArtifact : rootArtifact);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12012,
		"linenumber" : 457,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<ModelProperty> modelProperties = dm.getModelProperties();]List<ModelProperty> modelProperties = getModelProperties(dm.getInputStream());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12145,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(List<String>) lifecycle.getPhases().values();](List<String>) lifecycle.getPhases();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12180,
		"linenumber" : 187,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "MojoDescriptor md:lifecyclePlan]MojoDescriptor mojoDescriptor:lifecyclePlan",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12198,
		"linenumber" : 235,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenExecutionRequest request = new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setUseReactor(useReactor).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy).setUserToolchainsFile(userToolchainsFile);]MavenExecutionRequest request = new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12271,
		"linenumber" : 96,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new BuildFailureException(\"\\n\\nYou must specify at least one goal. Try \\\'mvn install\\\' to build or \\\'mvn --help\\\' for options \\nSee http://maven.apache.org for more information.\\n\\n\");]new LifecycleExecutionException(\"\\n\\nYou must specify at least one goal. Try \\\'mvn install\\\' to build or \\\'mvn --help\\\' for options \\nSee http://maven.apache.org for more information.\\n\\n\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12320,
		"linenumber" : 19,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.interpolatorProperties = ((interpolatorProperties != null) ? interpolatorProperties : new ArrayList<InterpolatorProperty>());]this.interpolatorProperties = ((interpolatorProperties != null) ? interpolatorProperties : new Properties());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12374,
		"linenumber" : 348,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "List<String> mojos:phaseToMojoMapping.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12374,
		"linenumber" : 348,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "List<String> mojos:phaseToMojoMapping.values()]String phase:phaseToMojoMapping.keySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12376,
		"linenumber" : 599,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "xmlStreamReader.next();",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 12376,
		"linenumber" : 600,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "type = parser.next();",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 12458,
		"linenumber" : 283,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ArtifactResolutionRequest request = new ArtifactResolutionRequest().setArtifact(pomArtifact).setResolveTransitively(true).setArtifactDependencies(project.getDependencyArtifacts()).setLocalRepository(configuration.getLocalRepository()).setRemoteRepostories(project.getRemoteArtifactRepositories()).setManagedVersionMap(project.getManagedVersionMap());]ArtifactResolutionRequest request = new ArtifactResolutionRequest().setArtifact(artifact).setResolveTransitively(true).setLocalRepository(configuration.getLocalRepository()).setRemoteRepostories(project.getRemoteArtifactRepositories()).setManagedVersionMap(project.getManagedVersionMap());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12482,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "project = session.getCurrentProject();]this.project = session.getCurrentProject();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12520,
		"linenumber" : 358,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "String mojo:phasesWithMojosToExecute]MojoExecution mojoExecution:phasesWithMojosToExecute",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12559,
		"linenumber" : 407,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "lifecyclePlan;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12559,
		"linenumber" : 410,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new MavenExecutionPlan(lifecyclePlan, requiredDependencyResolutionScope);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12705,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProfileActivationException(profile, (((\"Failed to interpolate file location for profile \" + profile.getId()) + \": \") + existingPath));]new ProfileActivationException((((\"Failed to interpolate file location for profile \" + profile.getId()) + \": \") + existingPath), profile);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 12746,
		"linenumber" : 406,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pluginArtifacts = getPluginArtifacts(pluginArtifact, plugin, localRepository, remoteRepositories);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 12802,
		"linenumber" : 905,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ArtifactRepository repository:session.getCurrentProject().getRemoteArtifactRepositories()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12821,
		"linenumber" : 53,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((artifactFile != null) && artifactFile.exists())](((projectArtifact != null) && (projectArtifact.getFile() != null)) && projectArtifact.getFile().exists())",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 12897,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(mojoExecution.getMojoDescriptor(), project, \"Mojo execution failed.\", cause);]super(mojoExecution.getMojoDescriptor(), project, constructMessage(cause), cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12950,
		"linenumber" : 278,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "result.addMessage((((((((\"\\\'\" + prefix) + \".(groupId:artifactId:type:classifier)\\\' must be unique: \") + key) + \" -> \") + existing.getVersion()) + \" vs \") + dependency.getVersion()));]addViolation(result, false, (((((((\"\\\'\" + prefix) + \".(groupId:artifactId:type:classifier)\\\' must be unique: \") + key) + \" -> \") + existing.getVersion()) + \" vs \") + dependency.getVersion()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 13084,
		"linenumber" : 853,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "execution.setId((\"default-\" + p[2]));]execution.setId((\"default-\" + p[(p.length - 1)]));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 13217,
		"linenumber" : 290,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((introducedDependencyArtifacts != null) ? introducedDependencyArtifacts : Collections.EMPTY_SET);]((introducedDependencyArtifacts != null) ? introducedDependencyArtifacts : Collections.<Artifact>emptySet());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13237,
		"linenumber" : 174,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenExecutionPlan executionPlan = calculateExecutionPlan(session, goals.toArray(new String[]{}));]MavenExecutionPlan executionPlan = calculateExecutionPlan(session, goals.toArray(new String[goals.size()]));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 13592,
		"linenumber" : 540,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "ModelUtils.cloneModel(superPomProvider.getSuperModel(\"4.0.0\"));]superPomProvider.getSuperModel(\"4.0.0\").clone();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13598,
		"linenumber" : 272,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Map<String, Object> options = Collections.<String, Object>singletonMap(ModelReader.IS_STRICT, Boolean.valueOf(strict));]Map<String, ?> options = Collections.singletonMap(ModelReader.IS_STRICT, Boolean.valueOf(strict));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 13615,
		"linenumber" : 653,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "TaskSegment taskSegment:taskSegments",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13615,
		"linenumber" : 655,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "MojoExecution mojoExecution:lifecyclePlan",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13621,
		"linenumber" : 952,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lifecycleListeners = new ArrayList<LifecycleListener>();]lifecycleListeners = new ArrayList<ExecutionListener>();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 13623,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "request.setLifecycleListeners(Arrays.<LifecycleListener>asList(new LifecycleEventLogger(logger)));]request.setExecutionListeners(Arrays.<ExecutionListener>asList(new ExecutionEventLogger(logger)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13668,
		"linenumber" : 136,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "filter;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13668,
		"linenumber" : 163,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "resolutionFilter;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13830,
		"linenumber" : 327,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = iterator();]Iterator<Item> iter = iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 13994,
		"linenumber" : 505,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new PluginContainerException(mojoDescriptor, pluginRealm, ((((\"Unable to find the mojo \\\'\" + mojoDescriptor.getGoal()) + \"\\\' (or one of its required components) in the plugin \\\'\") + pluginDescriptor.getId()) + \"\\\'\"), e);]new PluginContainerException(mojoDescriptor, pluginRealm, ((((\"Unable to load the mojo \\\'\" + mojoDescriptor.getGoal()) + \"\\\' (or one of its required components) from the plugin \\\'\") + pluginDescriptor.getId()) + \"\\\'\"), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 14002,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((\"Plugin or one of its dependencies could not be resolved: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), e.getType(), null, e.getRemoteRepositories(), null, e.getCause());]super((((\"Plugin \" + plugin.getId()) + \" or one of its dependencies could not be resolved: \") + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), e.getType(), null, e.getRemoteRepositories(), null, e);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14023,
		"linenumber" : 222,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "exceptionMessage += (\": \" + longMessage);]exceptionMessage = join(exceptionMessage, longMessage);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 14026,
		"linenumber" : 53,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.print((((complete + \"/\") + ((total == (- 1)) ? \"?\" : (total + \" B\"))) + \"\\r\"));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 14026,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.print((((complete + \"/\") + ((total == (- 1)) ? \"?\" : (total + \" B\"))) + \"\\r\"));]out.print(((((complete + \"/\") + total) + \" B\") + \"\\r\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14026,
		"linenumber" : 61,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.print(((complete + \" B\") + \"\\r\"));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 14085,
		"linenumber" : 94,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Map<Object, Plugin> merged = new LinkedHashMap<Object, Plugin>(((src.size() + tgt.size()) * 2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14085,
		"linenumber" : 94,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Map<Object, Plugin> merged = new LinkedHashMap<Object, Plugin>(((src.size() + tgt.size()) * 2));]Map<Object, Plugin> master = new LinkedHashMap<Object, Plugin>((tgt.size() * 2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14146,
		"linenumber" : 69,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(parent.getGroupId().equals(model.getGroupId()) && parent.getArtifactId().equals(model.getArtifactId()))](equals(parent.getGroupId(), model.getGroupId()) && equals(parent.getArtifactId(), model.getArtifactId()))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14236,
		"linenumber" : 205,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((repository.getAuthentication() != null) && (repository.getProxy() != null))](repository.getProxy() != null)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 14269,
		"linenumber" : 127,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! rangeValue.isClosed())](! rangeValue.closed)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14280,
		"linenumber" : 442,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "projectRealm = container.getContainerRealm();]projectRealm = classRealmManager.getCoreRealm();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14308,
		"linenumber" : 306,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Field[] fields = fieldsByClass.get(cls);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14308,
		"linenumber" : 308,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Field[] fields;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14370,
		"linenumber" : 412,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addViolation(problems, errOn30, (((((\"\\\'\" + prefix) + \".(groupId:artifactId:type:classifier)\\\' must be unique: \") + key) + \" -> \") + msg));]addViolation(problems, errOn30, (prefix + \".(groupId:artifactId:type:classifier)\"), null, (((\"must be unique: \" + key) + \" -> \") + msg));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14434,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Model model = read(ReaderFactory.newXmlReader(input), options);]Model model = read(new FileInputStream(input), options);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14447,
		"linenumber" : 317,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Restriction res1 = (Restriction) i1.next();]Restriction res1 = i1.next();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14492,
		"linenumber" : 165,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Lifecycle lifecycle:lifecycles]Lifecycle lifecycle:lifecycles.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14549,
		"linenumber" : 372,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String prefix = (managed ? \"dependencyManagement.dependencies.dependency.\" : \"dependencies.dependency.\");]String prefix = (management ? \"dependencyManagement.dependencies.dependency.\" : \"dependencies.dependency.\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14621,
		"linenumber" : 579,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 14621,
		"linenumber" : 579,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 14621,
		"linenumber" : 579,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < n)](i >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14621,
		"linenumber" : 579,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int n = (lineage.size() - 1);]int i = (lineage.size() - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 14621,
		"linenumber" : 591,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 14739,
		"linenumber" : 305,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Item l = (left.hasNext() ? (Item) left.next() : null);]Item l = (left.hasNext() ? left.next() : null);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 14762,
		"linenumber" : 111,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ProfileActivator[]{new JdkVersionProfileActivator(), new OperatingSystemProfileActivator(), new PropertyProfileActivator(), new FileProfileActivator()};]new ProfileActivator[]{new JdkVersionProfileActivator(), new OperatingSystemProfileActivator(), new PropertyProfileActivator(), new FileProfileActivator().setPathTranslator(newPathTranslator())};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14848,
		"linenumber" : 557,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MojoDescriptor forkedMojoDescriptor = pluginManager.getMojoDescriptor(forkedExecution.getPlugin(), forkedExecution.getGoal(), DefaultRepositoryRequest.getRepositoryRequest(session, project));]MojoDescriptor forkedMojoDescriptor = pluginManager.getMojoDescriptor(forkedExecution.getPlugin(), forkedExecution.getGoal(), project.getRemotePluginRepositories(), session.getRepositorySession());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14905,
		"linenumber" : 57,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ArtifactRepository repository:remoteRepositories]RemoteRepository repository:remoteRepositories",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 15021,
		"linenumber" : 167,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "resourceAsStream = MavenCli.class.getClassLoader().getResourceAsStream(\"org/apache/maven/messages/build.properties\");]resourceAsStream = MavenCli.class.getResourceAsStream(\"/org/apache/maven/messages/build.properties\");",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 15054,
		"linenumber" : 68,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! legacy)](! legacyFormat)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15092,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.parentImports = ((parentImports != null) ? parentImports : Collections.<String>emptyList());]this.foreignImports = ((foreignImports != null) ? foreignImports : Collections.<String, ClassLoader>emptyMap());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15192,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<RemoteRepository> newRepositories = Collections.singletonList(convert(repository));]List<RemoteRepository> newRepositories = Collections.singletonList(ArtifactDescriptorUtils.toRemoteRepository(repository));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15201,
		"linenumber" : 120,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "delegate.pathOf(RepositoryUtils.toArtifact(artifact));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15201,
		"linenumber" : 120,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getPathForLocalArtifact(artifact);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15219,
		"linenumber" : 502,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ModelBuildingException(problems.getRootModel(), problems.getRootModelId(), problems.getProblems());]problems.newModelBuildingException();",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 15491,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String LS = System.getProperty(\"line.separator\");]final String LS = System.getProperty(\"line.separator\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15495,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((currentSession != null) ? currentSession[0] : null);]((currentSession != null) ? currentSession.get() : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15530,
		"linenumber" : 46,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "INFO",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 15530,
		"linenumber" : 47,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "MavenExecutionRequest.LOGGING_LEVEL_INFO",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 15578,
		"linenumber" : 764,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ModelData parentData = new ModelData(candidateModel, groupId, artifactId, version);]ModelData parentData = new ModelData(candidateSource, candidateModel, groupId, artifactId, version);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15823,
		"linenumber" : 223,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "org.sonatype.aether.resolution.ArtifactResolutionException]org.eclipse.aether.resolution.ArtifactResolutionException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 15824,
		"linenumber" : 225,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(e.getCause() instanceof org.sonatype.aether.transfer.ArtifactNotFoundException)](e.getCause() instanceof org.eclipse.aether.transfer.ArtifactNotFoundException)",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 15921,
		"linenumber" : 48,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "default",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 15921,
		"linenumber" : 48,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ERROR",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 16063,
		"linenumber" : 78,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((inherited != null) && (! Boolean.valueOf(inherited).booleanValue()))]((inherited != null) && (! Boolean.valueOf(inherited)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 16080,
		"linenumber" : 208,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append((LS + \"  \"));]sb.append(LS).append(\"  \");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 16121,
		"linenumber" : 135,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Expression expr = (Expression) it.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 16121,
		"linenumber" : 135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Expression expr = (Expression) it.next();]Expression expr = (Expression) expression;",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 33681,
		"linenumber" : 25,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new BuildException(\"no\");]new BuildException(Util.bind(\"jdtcom.source\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 34124,
		"linenumber" : 317,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "pushOnExpressionStack(new CodeSnippetThisReference(intStack[(intPtr --)], endPosition, evaluationContext, false));]pushOnExpressionStack(new CodeSnippetThisReference(intStack[(intPtr --)], endPosition, this.evaluationContext, false));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35030,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ReferenceBinding receiverType = ((binding == null) ? null : (((! isVirtualInvoke(method, messageSend)) || (messageSend.receiverType instanceof ArrayBinding)) ? method.declaringClass : (ReferenceBinding) messageSend.receiverType));]ReferenceBinding receiverType = ((binding == null) ? null : method.declaringClass);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 35217,
		"linenumber" : 1342,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "done]done1",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 35630,
		"linenumber" : 300,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(target instanceof IFile)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 35636,
		"linenumber" : 303,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 35636,
		"linenumber" : 307,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 35651,
		"linenumber" : 657,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((token != TerminalSymbols.TokenNameEOF) && (accuracyIndex < accuracies.length))](token != TerminalSymbols.TokenNameEOF)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 35684,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "set.elementTable = new Object[length][];]set.elementTable = new Object[length];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36269,
		"linenumber" : 34,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "e.hasMoreElements()]iter.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36269,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enumeration e = jInfo.fEntryNames.elements();]Iterator iter = jInfo.fEntryNames.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 36398,
		"linenumber" : 663,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "e.hasMoreElements()]iter.hasNext()",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 36470,
		"linenumber" : 84,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "iter.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36470,
		"linenumber" : 84,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = paths.keySet().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 36470,
		"linenumber" : 84,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enumeration e = paths.keys();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 36470,
		"linenumber" : 84,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "e.hasMoreElements()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 37040,
		"linenumber" : 105,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "manageSyntheticReadAccessIfNecessary(currentScope, lastFieldBinding, ((binding == lastFieldBinding) ? 0 : otherBindings.length));]manageSyntheticReadAccessIfNecessary(currentScope, lastFieldBinding, lastReceiverType, ((lastFieldBinding == binding) ? 0 : otherBindingsCount));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37580,
		"linenumber" : 434,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((safeSubtreeMatch(node.getExpression(), o.getExpression()) && safeSubtreeMatch(node.getName(), o.getName())) && safeSubtreeListMatch(node.arguments(), o.arguments())) && (node.isAnonymousClassDeclaration() == o.isAnonymousClassDeclaration())) && safeSubtreeListMatch(node.bodyDeclarations(), o.bodyDeclarations()));](((safeSubtreeMatch(node.getExpression(), o.getExpression()) && safeSubtreeMatch(node.getName(), o.getName())) && safeSubtreeListMatch(node.arguments(), o.arguments())) && safeSubtreeMatch(node.getAnonymousClassDeclaration(), o.getAnonymousClassDeclaration()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38073,
		"linenumber" : 195,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "TRY_STATEMENT",
		"changecontent" : "",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 38112,
		"linenumber" : 86,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((flags & IConstants.AccPublic) != 0);]((flags & AccPublic) != 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38289,
		"linenumber" : 690,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new String[]{name};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38448,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IncompleteClassPathException(missingClassFile);]new AbortCompilation(true, new IncompleteClassPathException(missingClassFile));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38459,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new AbortCompilation(true, new IncompleteClassPathException(missingClassFile));]new IncompleteClassPathException(missingClassFile);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38564,
		"linenumber" : 628,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((! (currentNode instanceof MethodDeclaration)) && (! (currentNode instanceof Initializer))) && (! (currentNode instanceof FieldDeclaration)))]((((currentNode != null) && (! (currentNode instanceof MethodDeclaration))) && (! (currentNode instanceof Initializer))) && (! (currentNode instanceof FieldDeclaration)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38626,
		"linenumber" : 156,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "fLock]this.lock",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38952,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new NameEnvironmentAnswer(new SourceFile(fullSourceName, typeName, CharOperation.splitOn(\'/\', qualifiedPackageName.toCharArray()), encoding));]new NameEnvironmentAnswer(new SourceFile(fullSourceName, typeName, CharOperation.splitOn(\'/\', qualifiedPackageName.toCharArray())));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 39439,
		"linenumber" : 688,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append((\"\\n-TODO tag : \" + ((this.toDoTag == null) ? \"<null>\" : new String(this.toDoTag))));]buf.append((\"\\n-task tag : \" + ((this.taskTags == null) ? \"\" : new String(CharOperation.concatWith(this.taskTags, \',\')))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 39491,
		"linenumber" : 261,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((currentPosition > 0) || (currentCharacter == \'\\r\')) || (currentCharacter == \'\\n\'))](currentPosition > 0)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 40144,
		"linenumber" : 585,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((segmentStart >= patternSegmentEnd) || ((iPath >= pathLength) && (iPattern >= patternLength))) || (((iPattern == (patternLength - 2)) && (pattern[iPattern] == \'*\')) && (pattern[(iPattern + 1)] == \'*\'))) || ((iPattern == patternLength) && freeSuffixDoubleStar));]((((pSegmentRestart >= pSegmentEnd) || ((fSegmentStart >= fLength) && (pSegmentStart >= pLength))) || (((pSegmentStart == (pLength - 2)) && (pattern[pSegmentStart] == \'*\')) && (pattern[(pSegmentStart + 1)] == \'*\'))) || ((pSegmentStart == pLength) && freeSuffixDoubleStar));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40282,
		"linenumber" : 538,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (((receiver == ThisReference.ThisImplicit) || receiver.isSuper()) || ((receiver instanceof NameReference) && ((((NameReference) receiver).bits & BindingIds.TYPE) != 0))))](! ((isImplicitThisRcv || receiver.isSuper()) || ((receiver instanceof NameReference) && ((((NameReference) receiver).bits & BindingIds.TYPE) != 0))))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40321,
		"linenumber" : 155,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 40321,
		"linenumber" : 174,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "++ i;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 40321,
		"linenumber" : 174,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < newSize)](i < l)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40321,
		"linenumber" : 174,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int newSize = newProblems.length;]int l = newProblems.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 40325,
		"linenumber" : 196,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "j ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 40325,
		"linenumber" : 215,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "++ j;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 40325,
		"linenumber" : 215,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j < newSize)](j < m)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40325,
		"linenumber" : 215,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int newSize = newProblems.length;]int m = newProblems.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 40776,
		"linenumber" : 107,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (storedSourcePath.equals(sourcePath) && rootPath.equals(storedRootPath)))](! ((storedSourcePath.equals(sourcePath) && ((rootPath != null) && rootPath.equals(storedRootPath))) || (storedRootPath == null)))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40889,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "localBinding.useFlag = (flowInfo.isFakeReachable() ? LocalVariableBinding.FAKE_USED : LocalVariableBinding.USED);]localBinding.useFlag = (flowInfo.isReachable() ? LocalVariableBinding.USED : LocalVariableBinding.FAKE_USED);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 41243,
		"linenumber" : 524,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "allowNestingInOutput[length] = true;]allowNestingInOutput = true;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 41271,
		"linenumber" : 442,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Constant someConstant = FieldReference.getConstantFor(field, false, this, scope, place);]Constant someConstant = FieldReference.getConstantFor(field, this, false, scope);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 41835,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.categories = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9};]this.categories = new int[]{1, 2, 3, 7, 6, 4, 5, 8, 9};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 41856,
		"linenumber" : 373,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "marker.setAttributes(new String[]{IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, \"readOnly\"}, new Object[]{task.getMessage(), new Integer(priority), new Boolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), new Boolean(true)});]marker.setAttributes(new String[]{IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, \"userEditable\"}, new Object[]{task.getMessage(), new Integer(priority), new Boolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), new Boolean(false)});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 41989,
		"linenumber" : 1033,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath location = file.getLocation();",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 41989,
		"linenumber" : 1034,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath location;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 42342,
		"linenumber" : 192,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(bytesRead > 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 42342,
		"linenumber" : 193,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(amountRead != (- 1))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 42830,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(problemReporter, assertMode);]super(problemReporter, sourceLevel);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43478,
		"linenumber" : 159,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "fElements;]elements;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43630,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.imports = new ISourceImport[importDeclarations.length];]this.imports = new ISourceImport[length];",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 43672,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IProblemRequestor problemRequestor = workingCopy.problemRequestor;]IProblemRequestor problemRequestor = workingCopy.owner.getProblemRequestor();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 43699,
		"linenumber" : 486,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(this.scanner.currentPosition <= sourceEnd)](this.scanner.currentPosition < sourceEnd)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 43886,
		"linenumber" : 99,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! flowInfo.complainIfUnreachable((stat = statements[i]), scope, didAlreadyComplain))](! stat.complainIfUnreachable(flowInfo, scope, didAlreadyComplain))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 43921,
		"linenumber" : 67,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.typeHierarchy = new TypeHierarchy(element, scope, computeSubtypes, copies);]this.typeHierarchy = new TypeHierarchy(element, copies, scope, computeSubtypes);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43923,
		"linenumber" : 175,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(type, SearchEngine.createJavaSearchScope(new IJavaElement[]{project}), computeSubtypes, workingCopies);]this(type, workingCopies, SearchEngine.createJavaSearchScope(new IJavaElement[]{project}), computeSubtypes);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 44226,
		"linenumber" : 303,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((! type.isBinary()) && ((original = (IType) type.getCompilationUnit().getOriginal(type)) != null))]((! type.isBinary()) && ((original = (IType) type.getPrimaryElement()) != null))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 44492,
		"linenumber" : 274,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean hasSuperclass = false;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 44513,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] originalContents = originalBuffer.getCharacters();]char[] primaryContents = primaryBuffer.getCharacters();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 44617,
		"linenumber" : 208,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((this.resolvedType = (receiverType = ((SingleTypeReference) type).resolveTypeEnclosing(scope, (ReferenceBinding) enclosingInstanceType))) == null)]((receiverType = ((SingleTypeReference) type).resolveTypeEnclosing(scope, (ReferenceBinding) enclosingInstanceType)) == null)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 45433,
		"linenumber" : 290,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((fCodeResolve instanceof CompilationUnit) && ((CompilationUnit) fCodeResolve).isWorkingCopy())]((this.openable instanceof CompilationUnit) && ((CompilationUnit) this.openable).isWorkingCopy())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45784,
		"linenumber" : 834,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "matchingNodeSet.reportMatching(unit, true);]reportMatching(unit, true);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 45822,
		"linenumber" : 1402,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "report(typeDeclaration.sourceStart, typeDeclaration.sourceEnd, ((parent == null) ? createTypeHandle(typeDeclaration.name) : ((parent instanceof IType) ? createTypeHandle((IType) parent, typeDeclaration.name) : parent)), accuracy);]report(typeDeclaration.sourceStart, typeDeclaration.sourceEnd, ((parent == null) ? createTypeHandle(typeDeclaration.name) : ((parent instanceof IType) ? ((IType) parent).getType(new String(typeDeclaration.name)) : parent)), accuracy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45831,
		"linenumber" : 184,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "compilationUnits = new ICompilationUnit[unitsSize];]closedCUs = new org.eclipse.jdt.core.ICompilationUnit[closedUnitsSize];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 46105,
		"linenumber" : 630,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "severityString.equals(ERROR)]ERROR.equals(severityString)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46328,
		"linenumber" : 150,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(this.source[this.index[0]] == \'u\')](this.source[this.index] == \'u\')",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 46328,
		"linenumber" : 150,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "this.index[0] ++;]this.index ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 46431,
		"linenumber" : 200,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] renamings = new String[]{name};]String[] renamings = new String[]{newName};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 47034,
		"linenumber" : 89,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getCompilationUnit((IPackageFragment) parent, DefaultWorkingCopyOwner.PRIMARY);]((IPackageFragment) parent).getCompilationUnit(getName());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 47372,
		"linenumber" : 263,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "folder.create((force ? (IResource.FORCE | IResource.KEEP_HISTORY) : IResource.KEEP_HISTORY), true, getSubProgressMonitor(1));]folder.create((forceFlag ? (IResource.FORCE | IResource.KEEP_HISTORY) : IResource.KEEP_HISTORY), true, getSubProgressMonitor(1));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 47584,
		"linenumber" : 238,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! checkTypeName(pattern.simpleName, patternString, fullyQualifiedTypeName, pattern.isCaseSensitive))](! checkTypeName(pattern.simpleName, patternString, fullyQualifiedTypeName, pattern.isCaseSensitive()))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 48110,
		"linenumber" : 901,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "field.initialization.resolve((field.isStatic() ? staticInitializerScope : initializerScope));]field.initialization.resolve((field.isStatic() ? this.staticInitializerScope : this.initializerScope));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 48911,
		"linenumber" : 640,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((binding instanceof ProblemFieldBinding) && (((ProblemFieldBinding) binding).problemId() == NotFound))]((this.binding instanceof ProblemFieldBinding) && (((ProblemFieldBinding) this.binding).problemId() == NotFound))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48990,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "openBuffers]this.openBuffers",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 49184,
		"linenumber" : 35,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(matchRule);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 49184,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(TYPE_REF_PATTERN, matchRule);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 49366,
		"linenumber" : 108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPackageFragment[] pkgs = project.newNameLookup((WorkingCopyOwner) null).findPackageFragments(\"p1\", false);]IPackageFragment[] pkgs = getNameLookup(project).findPackageFragments(\"p1\", false);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 49428,
		"linenumber" : 211,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CompilationUnitResolver compilationUnitVisitor = new CompilationUnitResolver(project.newSearchableNameEnvironment(owner), getHandlingPolicy(), project.getOptions(true), getRequestor(), new DefaultProblemFactory());]CompilationUnitResolver compilationUnitVisitor = new CompilationUnitResolver(getNameEnvironment(project, owner, monitor), getHandlingPolicy(), project.getOptions(true), getRequestor(), getProblemFactory(monitor));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 49829,
		"linenumber" : 823,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(problemFieldBinding.problemId() & IProblem.IgnoreCategoriesMask)]problemFieldBinding.problemId()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 49870,
		"linenumber" : 152,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.newCodeFormatter = new CodeFormatterVisitor(this.preferences, options, offset, length);]this.newCodeFormatter = new CodeFormatterVisitor(this.preferences, options, offset, length, this.codeSnippetParsingUtil);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50660,
		"linenumber" : 106,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "optionalQualifier;]this.optionalQualifier;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50760,
		"linenumber" : 422,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(currentScope.environment().options.targetJDK < ClassFileConstants.JDK_DEFERRED)]currentScope.environment().options.useJsrBytecode",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 51818,
		"linenumber" : 215,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "this.ast]this",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51964,
		"linenumber" : 671,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(document instanceof InternalSearchPattern.WorkingCopyDocument)](document instanceof WorkingCopyDocument)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 52025,
		"linenumber" : 23,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.qualification = (this.isCaseSensitive ? qualification : CharOperation.toLowerCase(qualification));]this.qualification = (isCaseSensitive() ? qualification : CharOperation.toLowerCase(qualification));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52593,
		"linenumber" : 134,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "result.append(this.unitDeclaration.print((tab + 1), result));]this.unitDeclaration.print((tab + 1), result);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52628,
		"linenumber" : 266,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fCreatedElement = (DOMNode) child;]fCreatedElement = (org.eclipse.jdt.internal.core.jdom.DOMNode) child;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53189,
		"linenumber" : 186,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "initialization.computeConversion(scope, variableType, initializationType);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53189,
		"linenumber" : 186,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "initialization.implicitWidening(typeBinding, initializationType);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53338,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(modifiers, ConstructorDeclaration.ConstantPoolName, VoidBinding, args, exceptions, declaringClass);]this(modifiers, ConstructorDeclaration.ConstantPoolName, VoidBinding, parameters, thrownExceptions, declaringClass);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53380,
		"linenumber" : 491,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((-- f) >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53380,
		"linenumber" : 491,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int f = fields.length;]int length = fields.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 53380,
		"linenumber" : 558,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53380,
		"linenumber" : 558,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 53380,
		"linenumber" : 558,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 53388,
		"linenumber" : 702,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < m)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53388,
		"linenumber" : 726,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j > i)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53388,
		"linenumber" : 726,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int j = (length - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 53388,
		"linenumber" : 726,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "j --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 53451,
		"linenumber" : 129,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "this.binding.returnType.isBaseType()]this.codegenBinding.returnType.isBaseType()",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 54177,
		"linenumber" : 177,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "key = new char[]{ONE_STAR[0], SEPARATOR, this.classOrInterface};]key = new char[]{ONE_STAR[0], SEPARATOR, (isCaseSensitive() ? this.classOrInterface : Character.toLowerCase(this.classOrInterface))};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54204,
		"linenumber" : 255,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] newNames = Util.arrayConcat(pkgName, memberName.intern());]String[] newNames = Util.arrayConcat(pkgName, manager.intern(memberName));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54586,
		"linenumber" : 294,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(Signature.C_ARRAY == param.charAt(0))]((param.length() == 1) && (Signature.C_ARRAY == param.charAt(0)))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 54641,
		"linenumber" : 241,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new QualifiedTypeReference(identifiers, new long[]{0});]new QualifiedTypeReference(identifiers, new long[identifiers.length]);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54642,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ArrayQualifiedTypeReference(identifiers, dim, new long[]{0});]new ArrayQualifiedTypeReference(identifiers, dim, new long[identifiers.length]);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 54861,
		"linenumber" : 66,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "classOrInterface",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54861,
		"linenumber" : 68,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "this.typeSuffix",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54951,
		"linenumber" : 72,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "Binding.LOCAL",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 54951,
		"linenumber" : 72,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "LOCAL",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 54991,
		"linenumber" : 643,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "bits |= LOCAL;]bits |= Binding.LOCAL;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55046,
		"linenumber" : 224,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "BindingIds.FIELD]Binding.FIELD",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 55103,
		"linenumber" : 332,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "synthetics[METHOD_EMUL].put(targetMethod, (accessors = new SyntheticAccessMethodBinding[2]));]synthetics[METHOD_EMUL].put(targetMethod, (accessors = new SyntheticMethodBinding[2]));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55224,
		"linenumber" : 349,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "assertEquals(\"should have one class\", ((((\"element:Z0021Z    completion:Z0021Z    relevance:\" + (((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED)) + \"\\n\") + \"element:Z0021ZZ    completion:Z0021ZZ    relevance:\") + (((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED)), requestor.getResults());]assertEquals(\"should have one class\", ((((\"element:Z0021Z    completion:Z0021Z    relevance:\" + ((((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED) + R_NON_RESTRICTED)) + \"\\n\") + \"element:Z0021ZZ    completion:Z0021ZZ    relevance:\") + ((((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED) + R_NON_RESTRICTED)), requestor.getResults());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55637,
		"linenumber" : 181,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(this.scanner.token != BindingKeyScanner.END)]((this.scanner.token != BindingKeyScanner.END) && (! this.scanner.isAtTypeParameterStart()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55638,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((this.index == (- 1)) || (this.index >= (this.source.length - 1))) || (this.source[this.index] == \',\')) || (this.source[this.index] == \'(\'));](((((this.index == (- 1)) || (this.index >= (this.source.length - 1))) || ((currentChar = this.source[this.index]) == \',\')) || (currentChar == \'(\')) || (currentChar == \'<\'));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56369,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "definiteNulls |= otherInits.definiteNulls;]definiteNonNulls = ((definiteNonNulls | otherInits.definiteNonNulls) & (~ otherInits.definiteNulls));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56376,
		"linenumber" : 95,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "extraDefiniteNonNulls[(i ++)] = 0;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 56376,
		"linenumber" : 95,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "extraDefiniteNonNulls[(i ++)] = 0;]extraDefiniteNonNulls[i] = 0;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 56521,
		"linenumber" : 462,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((this.flags & LOCAL_TYPE) != 0) && (sourceType instanceof SourceTypeElementInfo))]((this.flags & LOCAL_TYPE) != 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56722,
		"linenumber" : 338,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "info.defaultAnnotationValue = (methodInfo.isAnnotation ? CharOperation.NO_CHAR : null);]info.defaultValueStart = (methodInfo.isAnnotation ? 0 : (- 1));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56858,
		"linenumber" : 376,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(left.implicitConversion >> 4)]((left.implicitConversion & IMPLICIT_CONVERSION_MASK) >> 4)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57001,
		"linenumber" : 146,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "expression.implicitConversion = ((result >>> 4) & 0x000FF);]this.expression.implicitConversion = ((unboxedExpression ? UNBOXING : 0) | ((result >>> 4) & 0x000FF));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57269,
		"linenumber" : 46,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "int var11:tab]int var11:var10",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57440,
		"linenumber" : 72,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((this.superclass.id != T_JavaLangObject) && (! argumentType.isCompatibleWith((hasSubstitution ? substitution.substitute(this.superclass) : this.superclass))))]((this.superclass.id != T_JavaLangObject) && (! argumentType.isCompatibleWith((hasSubstitution ? Scope.substitute(substitution, this.superclass) : this.superclass))))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57712,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(this.resolvedType.isValidBinding() ? this.resolvedType : null);](resolvedType.isValidBinding() ? resolvedType : null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57768,
		"linenumber" : 12,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Outer<String>.Inner<Integer>.InnerInner<Number> in = new Outer<String>().new Inner<Integer>().new InnerInner<Number>();]Outer<String>.Inner<Number> in = new Outer<String>().new Inner<Number>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58112,
		"linenumber" : 51,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((i < length) && (! isErasureMatch))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58112,
		"linenumber" : 57,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58431,
		"linenumber" : 192,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "JavaCore.newContainerEntry(entry.getPath(), entry.getAccessibleFiles(), entry.getNonAccessibleFiles(), entry.getExtraAttributes(), entry.isExported());]JavaCore.newContainerEntry(entry.getPath(), entry.getAccessRules(), entry.getExtraAttributes(), entry.isExported());",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58570,
		"linenumber" : 425,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "marker.setAttributes(new String[]{IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, IMarker.USER_EDITABLE}, new Object[]{task.getMessage(), new Integer(priority), org.eclipse.jdt.internal.compiler.util.Util.toBoolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), new Boolean(false)});]marker.setAttributes(JAVA_PROBLEM_MARKER_ATTRIBUTE_NAMES, new Object[]{task.getMessage(), priority, org.eclipse.jdt.internal.compiler.util.Util.toBoolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), Boolean.FALSE});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58688,
		"linenumber" : 948,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean paramsMatch = ((complyTo15 && (methodTypeErasure == ((method2.returnType == null) ? null : method2.returnType.erasure()))) ? method.areParameterErasuresEqual(method2) : method.areParametersEqual(method2));]boolean paramsMatch = (complyTo15 ? ((methodTypeErasure == ((method2.returnType == null) ? null : method2.returnType.erasure())) && method.areParameterErasuresEqual(method2)) : method.areParametersEqual(method2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59470,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(_annoAstNode != null):\"annotation ast node missing.\"](_domAnnotation != null):\"annotation node missing.\"",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59661,
		"linenumber" : 160,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(scope.environment().options.getSeverity(CompilerOptions.UnnecessaryTypeCheck) == ProblemSeverities.Ignore)](scope.compilerOptions().getSeverity(CompilerOptions.UnnecessaryTypeCheck) == ProblemSeverities.Ignore)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59699,
		"linenumber" : 142,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((((this.binding.tagBits & TagBits.AnnotationOverride) == 0) && ((this.binding.declaringClass.modifiers & AccInterface) == 0)) && ((bindingModifiers & (AccStatic | AccOverriding)) == AccOverriding)) && (scope.environment().options.sourceLevel >= JDK1_5))](((((this.binding.tagBits & TagBits.AnnotationOverride) == 0) && ((this.binding.declaringClass.modifiers & AccInterface) == 0)) && ((bindingModifiers & (AccStatic | AccOverriding)) == AccOverriding)) && (scope.compilerOptions().sourceLevel >= JDK1_5))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 59808,
		"linenumber" : 71,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(_paramIndex > 0):(\"invalid param index \" + _paramIndex)](_paramIndex >= 0):(\"invalid param index \" + _paramIndex)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59825,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Set parents = (Set) _typeName2Parents.get(typeName);]Set<ICompilationUnit> parents = _typeName2Parents.get(typeName);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59884,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(originalField.name, (originalField.isStatic() ? originalField.type : Scope.substitute(parameterizedDeclaringClass, originalField.type)), originalField.modifiers, parameterizedDeclaringClass, null);]super(originalField.name, (((originalField.modifiers & AccEnum) != 0) ? parameterizedDeclaringClass : (((originalField.modifiers & AccStatic) != 0) ? originalField.type : Scope.substitute(parameterizedDeclaringClass, originalField.type))), originalField.modifiers, parameterizedDeclaringClass, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59960,
		"linenumber" : 460,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.rootPaths.add(rootPathEntry.toString());]set.add(rootPathEntry);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60136,
		"linenumber" : 164,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.unit.types[i] = convert((SourceType) typeInfo.getHandle(), compilationResult);]types[i] = convert((SourceType) typeInfo.getHandle(), compilationResult);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 60291,
		"linenumber" : 966,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((UnusedLocalVariable | UnusedArgument) | UnusedImport) | UnusedPrivateMember) | UnusedDeclaredThrownException);](((UnusedLocalVariable | UnusedArgument) | UnusedPrivateMember) | UnusedDeclaredThrownException);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60292,
		"linenumber" : 519,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(itsInterfaces != NoSuperInterfaces)]((itsInterfaces != NoSuperInterfaces) && (itsInterfaces != null))",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 60368,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "_factoryLoader = new AnnotationProcessorFactoryLoader();]LOADER = new AnnotationProcessorFactoryLoader();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60443,
		"linenumber" : 441,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ProblemFieldBinding(((FieldBinding) binding).declaringClass, CharOperation.subarray(compoundName, 0, currentIndex), binding.problemId());]new ProblemFieldBinding((FieldBinding) binding, CharOperation.subarray(compoundName, 0, currentIndex), binding.problemId());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60613,
		"linenumber" : 234,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(entry.getValue() != null)](value != null)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 60641,
		"linenumber" : 135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(DeclaredType) Factory.createReferenceType(outer, _env);]Factory.createReferenceType(outer, _env);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60711,
		"linenumber" : 31,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(new ZipFile(file), true, null);]this(file, true, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60716,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = val.length;]final int length = val.length;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60990,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "_result = new APTResult(Collections.<IFile>emptySet(), deletedFiles, Collections.<String>emptySet(), Collections.<IFile, List<IProblem>>emptyMap(), false);]_result = new APTResult(Collections.<IFile>emptySet(), allDeletedFiles, Collections.<IFile, Set<String>>emptyMap(), Collections.<IFile, List<IProblem>>emptyMap(), false);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 61025,
		"linenumber" : 179,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final List<AbstractTypeDeclaration> declTypes = _astCompilationUnit.types();]final List<AbstractTypeDeclaration> declTypes = searchLocallyForTypeDeclarations();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61209,
		"linenumber" : 275,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean isEnum = (referenceContext.kind() == IGenericType.ENUM_DECL);]boolean isEnum = (TypeDeclaration.kind(referenceContext.modifiers) == TypeDeclaration.ENUM_DECL);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61296,
		"linenumber" : 298,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<FactoryContainer, Boolean> e:fOriginalPath.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61296,
		"linenumber" : 411,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "FactoryPathEntry originalFpe:fOriginalPath",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61321,
		"linenumber" : 218,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(constraintSubstitutes, 0, (constraintSubstitutes = new TypeBinding[(2 * length)]), 0, length);]System.arraycopy(constraintSubstitutes, 0, (constraintSubstitutes = new TypeBinding[(length + 1)]), 0, length);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 61363,
		"linenumber" : 166,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(expression != null)](this.expression != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61497,
		"linenumber" : 932,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(length == 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61497,
		"linenumber" : 932,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "false;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 61497,
		"linenumber" : 952,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 61497,
		"linenumber" : 952,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(length == 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61535,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fAffectedChildren[existingChildIndex] = child;]this.affectedChildren[existingChildIndex] = child;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 61858,
		"linenumber" : 673,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final TypeParameterInfo typeParameterInfo = methodInfo.typeParameters[i];]TypeParameterInfo typeParameterInfo = methodInfo.typeParameters[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 61920,
		"linenumber" : 203,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "AnnotationProcessorFactory factory:factories]FactoryPath.Attributes attr:factories.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62037,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.simpleName = (isCaseSensitive() ? simpleName : CharOperation.toLowerCase(simpleName));]this.simpleName = ((isCaseSensitive() || isCamelCase()) ? simpleName : CharOperation.toLowerCase(simpleName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62208,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(tokens, sourcePositions, false, AccDefault);]super(tokens, sourcePositions, false, ClassFileConstants.AccDefault);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62661,
		"linenumber" : 66,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(SearchPattern.R_EXACT_MATCH + SearchPattern.R_CASE_SENSITIVE)](SearchPattern.R_EXACT_MATCH | SearchPattern.R_CASE_SENSITIVE)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 62927,
		"linenumber" : 173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.comments[range[0]].getStartPosition();]this.comments[(int) (range >> 32)].getStartPosition();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63222,
		"linenumber" : 709,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.constant = ((field != null) ? FieldReference.getConstantFor((FieldBinding) binding, this, false, scope) : ((VariableBinding) binding).constant());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63222,
		"linenumber" : 712,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.constant = ((VariableBinding) binding).constant();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63327,
		"linenumber" : 145,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "cmd.createArgument().setPath(classpath);]createClasspathArgument(cmd, classpath);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63801,
		"linenumber" : 98,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(expression.resolvedType != NullBinding)](expression.resolvedType != TypeBinding.NULL)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64559,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64559,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (length - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 64559,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 64559,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 64559,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 64559,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64685,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "IOException]JavaModelException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 64829,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FlowInfo mergedInfo = FlowInfo.conditional(leftInfo.initsWhenTrue().copy().unconditionalInits().mergedWith(rightInfo.initsWhenTrue().copy().unconditionalInits()), falseMergedInfo);]FlowInfo mergedInfo = FlowInfo.conditional(leftInfo.initsWhenTrue().unconditionalInits().mergedWith(rightInfo.safeInitsWhenTrue().setReachMode(previousMode).unconditionalInits()), rightInfo.initsWhenFalse());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65159,
		"linenumber" : 402,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Label endLabel = new Label(codeStream);]BranchLabel endLabel = new BranchLabel(codeStream);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 65318,
		"linenumber" : 385,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "returnValue = Factory.createAnnotationMirror((IResolvedAnnotation) domValue, decl, env);]returnValue = Factory.createAnnotationMirror((IAnnotationBinding) domValue, decl, env);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65330,
		"linenumber" : 130,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((this.classpaths[j] instanceof ClasspathDirectory) && fileName.startsWith(matchCandidate)) && ((matchingPathName == null) || (matchCandidate.length() < matchingPathName.length())))](((this.classpaths[j] instanceof ClasspathDirectory) && CharOperation.prefixEquals(matchCandidate, fileName)) && ((matchingPathName == null) || (matchCandidate.length < matchingPathName.length)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 65544,
		"linenumber" : 416,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "FINALLY_MUST_BE_INLINED]FINALLY_INLINE",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 66378,
		"linenumber" : 569,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((id != IProblem.Task) && managedMarkerTypes.contains((markerType = problem.getMarkerType())))](((id != IProblem.Task) && IJavaModelMarker.JAVA_MODEL_PROBLEM_MARKER.equals(markerType)) || managedMarkerTypes.contains(markerType))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 66415,
		"linenumber" : 200,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "syntheticAccessor = ((SourceTypeBinding) this.codegenBinding.declaringClass).addSyntheticMethod(this.codegenBinding, isSuperAccess());]syntheticAccessor = ((SourceTypeBinding) declaringClass).addSyntheticMethod(this.codegenBinding, isSuperAccess());",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 66518,
		"linenumber" : 798,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((this.bits & IsNonNull) != 0) || ((this.constant != null) && (this.constant != Constant.NotAConstant)))]((this.constant != null) && (this.constant != Constant.NotAConstant))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 66650,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int index = (CharOperation.hashCode(key) % valueTable.length);]int index = (CharOperation.hashCode(key) % length);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 66650,
		"linenumber" : 88,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = keyTable.length;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 66692,
		"linenumber" : 697,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "newNotPresentException();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 66692,
		"linenumber" : 703,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "e;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67028,
		"linenumber" : 430,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(p < argCount)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67028,
		"linenumber" : 433,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(iarg < argCount)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67028,
		"linenumber" : 433,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "iarg ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 67112,
		"linenumber" : 104,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "CharOperation.equals(keyTable[index], key)]CharOperation.equals(this.keyTable[index], key)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 67255,
		"linenumber" : 1080,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67255,
		"linenumber" : 1080,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextMethod",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67486,
		"linenumber" : 454,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "org.eclipse.jdt.internal.core.util.SimpleSet interfacesSeen = new org.eclipse.jdt.internal.core.util.SimpleSet((lastPosition * 2));]org.eclipse.jdt.internal.compiler.util.SimpleSet interfacesSeen = new org.eclipse.jdt.internal.compiler.util.SimpleSet((lastPosition * 2));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67499,
		"linenumber" : 74,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "a2 = (this.extra[3][i] = ((b1nb2 & (~ b3)) & b4));]this.extra[(3 + 1)][i] = (((u1 & (nu2 = (~ u2))) & u3) & nu4);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 68486,
		"linenumber" : 408,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 68816,
		"linenumber" : 454,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "String factoryName:factoryNames]Entry<String, String> entry:factoryNames.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68984,
		"linenumber" : 662,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final List<IFile> deleted = new ArrayList<IFile>();]final Set<IFile> deleted = new HashSet<IFile>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68985,
		"linenumber" : 707,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "gfm.deleteObsoleteFilesAfterBuild(parentFile, newGeneratedFiles);]deleted.addAll(gfm.deleteObsoleteFilesAfterBuild(parentFile, newGeneratedFiles));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69636,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final Element[] expected = {_inheritedAnno, _notInheritedAnno, _elementA, _elementB};]final Element[] expected = {_notInheritedAnno, _elementA, _elementB};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69728,
		"linenumber" : 150,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.superAccess;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69728,
		"linenumber" : 151,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((this.bits & ASTNode.SuperAccess) != 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69907,
		"linenumber" : 610,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(i == j)]((toSkip != null) && (toSkip[j] == (- 1)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 70065,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this._binding.equals(((AnnotationMirrorImpl) obj)._binding);]equals(this._binding, ((AnnotationMirrorImpl) obj)._binding);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 70085,
		"linenumber" : 603,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 70085,
		"linenumber" : 603,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 70085,
		"linenumber" : 603,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 70085,
		"linenumber" : 603,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((-- i) >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 70085,
		"linenumber" : 603,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = this.relativePaths.length;]int length = this.relativePaths.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 70428,
		"linenumber" : 41,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(isCaseSensitive() || (qualifications == null))](this.isCaseSensitive || (qualifications == null))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 70433,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new UnsupportedOperationException(\"Reading a generated file is not permitted\");]new IllegalStateException(\"Opening a reader on a generated file is not permitted\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 70443,
		"linenumber" : 589,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(isNarrowing ? checkProvablyDistinctTypes(scope, match, expressionType, 0) : checkProvablyDistinctTypes(scope, castType, match, 0))](isNarrowing ? match.isProvablyDistinct(expressionType) : castType.isProvablyDistinct(match))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 70483,
		"linenumber" : 1127,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] result = {OPTION_ReportAnnotationSuperInterface, OPTION_ReportAssertIdentifier, OPTION_ReportAutoboxing, OPTION_ReportDeprecation, OPTION_ReportDiscouragedReference, OPTION_ReportEmptyStatement, OPTION_ReportEnumIdentifier, OPTION_ReportFallthroughCase, OPTION_ReportFieldHiding, OPTION_ReportFinalParameterBound, OPTION_ReportFinallyBlockNotCompletingNormally, OPTION_ReportForbiddenReference, OPTION_ReportHiddenCatchBlock, OPTION_ReportIncompatibleNonInheritedInterfaceMethod, OPTION_ReportIncompleteEnumSwitch, OPTION_ReportIndirectStaticAccess, OPTION_ReportInvalidJavadoc, OPTION_ReportLocalVariableHiding, OPTION_ReportMethodWithConstructorName, OPTION_ReportMissingDeprecatedAnnotation\n  , OPTION_ReportMissingJavadocComments, OPTION_ReportMissingJavadocTagDescription, OPTION_ReportMissingJavadocTags, OPTION_ReportMissingOverrideAnnotation, OPTION_ReportMissingSerialVersion, OPTION_ReportNoEffectAssignment, OPTION_ReportNoImplicitStringConversion, OPTION_ReportNonExternalizedStringLiteral, OPTION_ReportNonStaticAccessToStatic, OPTION_ReportNullReference, OPTION_ReportPotentialNullReference, OPTION_ReportRedundantNullCheck, OPTION_ReportOverridingPackageDefaultMethod, OPTION_ReportParameterAssignment, OPTION_ReportPossibleAccidentalBooleanAssignment, OPTION_ReportSyntheticAccessEmulation, OPTION_ReportTypeParameterHiding, OPTION_ReportUncheckedTypeOperation, OPTION_ReportUndocumentedEmptyBlock, OPTION_ReportUnnecessaryElse\n  , OPTION_ReportUnnecessaryTypeCheck, OPTION_ReportUnqualifiedFieldAccess, OPTION_ReportUnusedDeclaredThrownException, OPTION_ReportUnusedImport, OPTION_ReportUnusedLocal, OPTION_ReportUnusedParameter, OPTION_ReportUnusedPrivateMember, OPTION_ReportVarargsArgumentNeedCast, OPTION_ReportUnhandledWarningToken, OPTION_ReportOverridingMethodWithoutSuperInvocation};]String[] result = {OPTION_ReportAnnotationSuperInterface, OPTION_ReportAssertIdentifier, OPTION_ReportAutoboxing, OPTION_ReportDeprecation, OPTION_ReportDiscouragedReference, OPTION_ReportEmptyStatement, OPTION_ReportEnumIdentifier, OPTION_ReportFallthroughCase, OPTION_ReportFieldHiding, OPTION_ReportFinalParameterBound, OPTION_ReportFinallyBlockNotCompletingNormally, OPTION_ReportForbiddenReference, OPTION_ReportHiddenCatchBlock, OPTION_ReportIncompatibleNonInheritedInterfaceMethod, OPTION_ReportIncompleteEnumSwitch, OPTION_ReportIndirectStaticAccess, OPTION_ReportInvalidJavadoc, OPTION_ReportLocalVariableHiding, OPTION_ReportMethodWithConstructorName, OPTION_ReportMissingDeprecatedAnnotation\n  , OPTION_ReportMissingJavadocComments, OPTION_ReportMissingJavadocTagDescription, OPTION_ReportMissingJavadocTags, OPTION_ReportMissingOverrideAnnotation, OPTION_ReportMissingSerialVersion, OPTION_ReportNoEffectAssignment, OPTION_ReportNoImplicitStringConversion, OPTION_ReportNonExternalizedStringLiteral, OPTION_ReportNonStaticAccessToStatic, OPTION_ReportNullReference, OPTION_ReportPotentialNullReference, OPTION_ReportRedundantNullCheck, OPTION_ReportOverridingPackageDefaultMethod, OPTION_ReportParameterAssignment, OPTION_ReportPossibleAccidentalBooleanAssignment, OPTION_ReportSyntheticAccessEmulation, OPTION_ReportTypeParameterHiding, OPTION_ReportUncheckedTypeOperation, OPTION_ReportUndocumentedEmptyBlock, OPTION_ReportUnnecessaryElse\n  , OPTION_ReportUnnecessaryTypeCheck, OPTION_ReportUnqualifiedFieldAccess, OPTION_ReportUnusedDeclaredThrownException, OPTION_ReportUnusedImport, OPTION_ReportUnusedLocal, OPTION_ReportUnusedParameter, OPTION_ReportUnusedPrivateMember, OPTION_ReportVarargsArgumentNeedCast, OPTION_ReportUnhandledWarningToken, OPTION_ReportOverridingMethodWithoutSuperInvocation, OPTION_ReportUnusedTypeArgumentsForMethodInvocation};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 70689,
		"linenumber" : 228,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.typeParameters[i].traverse(visitor, scope);]this.typeParameters[i].traverse(visitor, this.scope);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 70802,
		"linenumber" : 202,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(findDeclarations, findReferences, selector, declaringQualification, declaringSimpleName, returnQualification, returnSimpleName, parameterQualifications, parameterSimpleNames, null, matchRule);]this(selector, declaringQualification, declaringSimpleName, returnQualification, returnSimpleName, parameterQualifications, parameterSimpleNames, null, limitTo, matchRule);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 70998,
		"linenumber" : 287,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ReferenceBinding currentType = invocationType;]TypeBinding currentType = invocationType.erasure();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71020,
		"linenumber" : 532,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "printProblem((\"Unexpected annotations within element: \" + expectedDecl.getAttribute(SNAME)));]printProblem((\"Unexpected annotations within element: \" + expectedDecl.getAttribute(SNAME_TAG)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71258,
		"linenumber" : 1119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PackageBinding packageBinding = computePackageFrom(compoundName);]PackageBinding packageBinding = computePackageFrom(compoundName, false);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71282,
		"linenumber" : 407,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.synthetics = new HashMap[EMUL_MAX_VALUE];]this.synthetics = new HashMap[MAX_SYNTHETICS];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71452,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaElement element = (IJavaElement) owner;]JavaElement element = (JavaElement) owner;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 71564,
		"linenumber" : 59,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.canChangeResources && this.project.saveClasspath(this.newRawClasspath, this.newOutputLocation))](this.canChangeResources && perProjectInfo.writeAndCacheClasspath(this.project, this.newRawClasspath, this.newOutputLocation))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 71696,
		"linenumber" : 252,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "CodeFormatter.K_SINGLE_LINE_COMMENT]K_SINGLE_LINE_COMMENT",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 71896,
		"linenumber" : 418,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "syntheticAccessors[(isReadAccess ? READ : WRITE)] = destinationType.addSyntheticMethod(this.codegenBinding, isReadAccess);]this.syntheticAccessors[(isReadAccess ? FieldReference.READ : FieldReference.WRITE)] = destinationType.addSyntheticMethod(this.codegenBinding, isReadAccess);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72133,
		"linenumber" : 295,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.sourceAttachments = newSourceAttachments;]this.sourceAttachments = rootInfos[2];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72839,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "scope.problemReporter().invalidType(this, (TypeBinding) binding);]scope.problemReporter().invalidType(this, (TypeBinding) this.binding);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72978,
		"linenumber" : 712,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "reference.declarationSourceStart = intStack[(intPtr --)];]reference.declarationSourceStart = this.intStack[(this.intPtr --)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 73659,
		"linenumber" : 962,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ImportReference importReference = (ImportReference) astStack[astPtr];]ImportReference importReference = (ImportReference) this.astStack[this.astPtr];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 73764,
		"linenumber" : 309,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((currentToken == TokenNameCOMMA) || (currentToken == TokenNameSEMICOLON)) && (astStack[astPtr] instanceof FieldDeclaration))](((this.currentToken == TokenNameCOMMA) || (this.currentToken == TokenNameSEMICOLON)) && (this.astStack[this.astPtr] instanceof FieldDeclaration))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 75264,
		"linenumber" : 175,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "finalAssignments[assignCount] = finalAssignment;]this.finalAssignments[this.assignCount] = finalAssignment;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 75507,
		"linenumber" : 83,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "id]this.id",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 76126,
		"linenumber" : 204,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(pendingAnnotations, 0, (pendingAnnotations = new RecoveredAnnotation[(2 * pendingAnnotationCount)]), 0, pendingAnnotationCount);]System.arraycopy(this.pendingAnnotations, 0, (this.pendingAnnotations = new RecoveredAnnotation[(2 * this.pendingAnnotationCount)]), 0, this.pendingAnnotationCount);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 76702,
		"linenumber" : 162,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(memberTypes, 0, (memberTypes = new SourceType[numberOfMemberTypes]), 0, numberOfMemberTypes);]System.arraycopy(this.memberTypes, 0, (this.memberTypes = new SourceType[this.numberOfMemberTypes]), 0, this.numberOfMemberTypes);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 77155,
		"linenumber" : 285,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "currentSpace -= entry.space;]this.currentSpace -= entry.space;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 77278,
		"linenumber" : 727,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IMethod method = currentType.getMethod(this.memberName[typeDepth], convertTypeNamesToSigs(this.methodParameterTypes[typeDepth]));]IMethod method = currentType.getMethod(this.memberName[this.typeDepth], convertTypeNamesToSigs(this.methodParameterTypes[this.typeDepth]));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 79786,
		"linenumber" : 231,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buff.append(this.typeSignature);]escapeMementoName(buff, this.typeSignature);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 79805,
		"linenumber" : 202,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "AssertionFailedException]ClasspathEntry.AssertionFailedException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 80178,
		"linenumber" : 133,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "lastFieldBinding.isStatic()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80234,
		"linenumber" : 473,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FieldBinding fieldBinding;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 80234,
		"linenumber" : 479,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FieldBinding codegenField = ((FieldBinding) this.binding).original();",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 80264,
		"linenumber" : 247,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(isUnboxing ? postConversionType(currentScope).id : this.codegenBinding.type.id)](isUnboxing ? postConversionType(currentScope).id : codegenBinding.type.id)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 80363,
		"linenumber" : 385,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "next",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80363,
		"linenumber" : 387,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextMethod",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80420,
		"linenumber" : 32,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int complaintLevel = (((flowInfo.reachMode() & FlowInfo.UNREACHABLE) != 0) ? Statement.COMPLAINED_FAKE_REACHABLE : Statement.NOT_COMPLAINED);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 81058,
		"linenumber" : 29,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long computedValue;]long computedValue = 0;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 81104,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int lastIndex = this.content.indexOf(JavadocConstants.SEPARATOR_START, this.childrenStart);]int lastIndex = CharOperation.indexOf(JavadocConstants.SEPARATOR_START, this.content, false, this.childrenStart);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 81122,
		"linenumber" : 438,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String typeContainerName = getQualifier(fullTypeName, isStatic);]String typeContainerName = Signature.getQualifier(fullTypeName);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 81701,
		"linenumber" : 500,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "contexts = new IScopeContext[]{new InstanceScope()};]contexts = new IScopeContext[]{InstanceScope.INSTANCE};",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 81714,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fLookupOrder = new IScopeContext[]{new ProjectScope(fProject), new InstanceScope(), new DefaultScope()};]fLookupOrder = new IScopeContext[]{new ProjectScope(fProject), InstanceScope.INSTANCE, DefaultScope.INSTANCE};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 82152,
		"linenumber" : 110,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final long indexLastModified = ((max == 0) ? 0L : index.getIndexFile().lastModified());]final long indexLastModified = ((max == 0) ? 0L : index.getIndexLastModified());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 82453,
		"linenumber" : 53,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((var instanceof LocalVariableBinding) && (flowInfo.reachMode() == FlowInfo.REACHABLE)) && (FakedTrackingVariable.isAnyCloseable(this.expression.resolvedType) || (this.expression.resolvedType == TypeBinding.NULL)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 82453,
		"linenumber" : 56,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "shouldAnalyseResource",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 83403,
		"linenumber" : 833,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < max)]((i < max) && (this.preserveExistingCommentsRanges[i] != null))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83585,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83585,
		"linenumber" : 36,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Boolean.FALSE;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83751,
		"linenumber" : 100,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "load(view);]load();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83946,
		"linenumber" : 68,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addToken(((i + 1) - lastOffset), TAG);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83946,
		"linenumber" : 70,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokens.addElement(new JSToken(line.substring(lastOffset, (i + 1)), TAG));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83955,
		"linenumber" : 75,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((token == null) && ((i == 0) || (line.charAt((i - 1)) != \'\\\\\')))]((token == null) && ((i == offset) || (line.array[(i - 1)] != \'\\\\\')))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 84181,
		"linenumber" : 71,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "width ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 84481,
		"linenumber" : 53,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.remove((lineElement.getEndOffset() - 1), 1);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 84481,
		"linenumber" : 59,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.remove((end - 1), (jEdit.getLeadingWhiteSpace(buffer.getText(nextStart, (nextEnd - nextStart))) + 1));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 84534,
		"linenumber" : 294,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dirty = (newFile = (readOnly = false));]adirty = (dirty = (newFile = (readOnly = false)));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 84605,
		"linenumber" : 51,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((token == Token.COMMENT1) && ((length - i) >= 1))](((token == Token.COMMENT1) || (token == Token.COMMENT2)) && ((length - i) > 1))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 84707,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "length = (length + lines);]length += lines;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84983,
		"linenumber" : 1424,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final Socket client = server.accept();]Socket client = server.accept();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85063,
		"linenumber" : 804,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "setBuffer(bufferArray[0]);]setBuffer(bufferArray[(bufferArray.length - 1)]);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 85105,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modeNames[i] = jEdit.getModeName(modes[i]);]modeNames[(i + 1)] = jEdit.getModeName(modes[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85219,
		"linenumber" : 28,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"reverse\", true);]super(\"reverse\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85481,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((getClass().getName() + \"[listener=\") + listener) + ((next == null) ? \"]\" : next.toString()));](((getClass().getName() + \"[listener=\") + listener) + ((next == null) ? \"]\" : (\"]\\n\" + next.toString())));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85502,
		"linenumber" : 145,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getSystemResourceAsStream(name);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 85502,
		"linenumber" : 145,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "null;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 85519,
		"linenumber" : 242,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "keyStroke.charAt(i)]Character.toUpperCase(keyStroke.charAt(i))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85561,
		"linenumber" : 88,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int index = getIndexOfWord(line, word, separators);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85561,
		"linenumber" : 88,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int index = line.lastIndexOf(word);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85574,
		"linenumber" : 293,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {(showFullPath ? buffer.getPath() : buffer.getName()), new Integer((buffer.isReadOnly() ? 1 : 0)), new Integer((buffer.isDirty() ? 1 : 0))};]Object[] args = {((showFullPath && (! buffer.isNewFile())) ? buffer.getPath() : buffer.getName()), new Integer((buffer.isReadOnly() ? 1 : 0)), new Integer((buffer.isDirty() ? 1 : 0))};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85637,
		"linenumber" : 160,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "line.array[(i + 1)]]array[i1]",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 85678,
		"linenumber" : 83,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int lineLen = ((lineElement.getEndOffset() - lineStart) - 1);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85678,
		"linenumber" : 84,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int lineLen;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85789,
		"linenumber" : 41,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "array[i]",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85789,
		"linenumber" : 48,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "token",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 85796,
		"linenumber" : 133,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "loop",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 85801,
		"linenumber" : 240,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "LVARIABLE",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 85846,
		"linenumber" : 278,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "textArea.checkLongestLine(lineIndex, Utilities.drawTabbedText(currentLine, x, y, gfx, this, 0));]Utilities.drawTabbedText(currentLine, x, y, gfx, this, 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85875,
		"linenumber" : 364,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "paintSyntaxLine(model, gfx, tokenMarker, defaultFont, defaultColor, (lineIndex ++), x, y)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 85875,
		"linenumber" : 376,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "tokenMarker.isNextLineRequested()",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 85962,
		"linenumber" : 375,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85962,
		"linenumber" : 424,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(line <= lastLine)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85969,
		"linenumber" : 417,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "tokenMarker.isNextLineRequested()](tokenMarker.isNextLineRequested() && ((line + count) < lastVisibleLine))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 86049,
		"linenumber" : 286,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "true;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 86049,
		"linenumber" : 294,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 86116,
		"linenumber" : 575,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((firstLine + visibleLines) + 1) >= textArea.getLineCount())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86116,
		"linenumber" : 650,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((firstLine + visibleLines) >= (lineCount - 1))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86299,
		"linenumber" : 60,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "new File(path).exists()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86299,
		"linenumber" : 60,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "new File(docDir, \"jeditdocs\").exists()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86337,
		"linenumber" : 229,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(repeat ? repeatCount : 1);](repeat ? Math.max(1, repeatCount) : 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86386,
		"linenumber" : 354,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "GUIUtilities.hideWaitCursor(view);]view.hideWaitCursor();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86401,
		"linenumber" : 456,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (modes.length - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 86401,
		"linenumber" : 456,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 86401,
		"linenumber" : 456,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 86401,
		"linenumber" : 534,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < modes.length)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 86401,
		"linenumber" : 534,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 86401,
		"linenumber" : 534,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 86413,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getBuffer((String) files[0]);]getBuffer((String) files.elementAt(0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86456,
		"linenumber" : 554,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "syntaxColorizing]getFlag(SYNTAX)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86518,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((parent + File.separator) + path);]canonPath(((parent + File.separator) + path));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 86573,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "bindings = new Vector((textActions.length + actions.length));]bindings = new Vector((actions.length + 20));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86803,
		"linenumber" : 187,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(buffer != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 86803,
		"linenumber" : 187,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((buffer = (repeat ? fileset.getFirstBuffer(view) : fileset.getNextBuffer(view, buffer))) != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 87114,
		"linenumber" : 229,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addToken((length - lastOffset), Token.INVALID);]addToken(info, (length - lastOffset), Token.INVALID);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 88017,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "in = JARClassLoader.getClassLoader(pluginIndex).getResourceAsStream(resource);]in = jEdit.getPluginJAR(pluginIndex).getClassLoader().getResourceAsStream(resource);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 88358,
		"linenumber" : 65,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "setSize(size);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88358,
		"linenumber" : 65,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "getRootPane().setPreferredSize(size);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88387,
		"linenumber" : 514,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fileIcon = (\"file:\" + path);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 88387,
		"linenumber" : 514,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fileIcon = (\"file://\" + path.replace(File.separatorChar, \'/\'));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 88398,
		"linenumber" : 32,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((\"SIM - installing \" + appName));]super((\"Installing \" + appName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88497,
		"linenumber" : 94,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "pool.waitForAllLock",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88497,
		"linenumber" : 180,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "lock",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88562,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty(\"firewall.enabled\", (cEnabled.isSelected() ? \"true\" : \"false\"));]jEdit.setBooleanProperty(\"firewall.enabled\", cEnabled.isSelected());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88613,
		"linenumber" : 144,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "byte[] buf = new byte[BUFSIZ];]byte[] buf = new byte[BUFSIZE];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88617,
		"linenumber" : 152,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dimension dim = scrollPane.getPreferredSize();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88617,
		"linenumber" : 154,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dimension dim = new Dimension();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88722,
		"linenumber" : 247,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "VFSManager.runInWorkThread(new BrowserIORequest(BrowserIORequest.DELETE, this, vfsSession, vfs, path));]VFSManager.runInWorkThread(new BrowserIORequest(BrowserIORequest.DELETE, this, vfsSession, vfs, path, null));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88916,
		"linenumber" : 122,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < (line + expand.lineCount))](i <= (line + expand.lineCount))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 88941,
		"linenumber" : 618,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int adjust_x;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88941,
		"linenumber" : 618,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int adjust_y;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88941,
		"linenumber" : 618,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int adjust_width;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88941,
		"linenumber" : 618,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int adjust_height;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89079,
		"linenumber" : 122,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(userObject instanceof BrowserTreeView.LoadingPlaceholder)](userObject instanceof BrowserView.LoadingPlaceholder)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 89151,
		"linenumber" : 308,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "props.setText(((((((((((((((\":tabSize=\" + tabSize.getSelectedItem()) + \":indentSize=\") + indentSize.getSelectedItem()) + \":noTabs=\") + noTabs.isSelected()) + \":mode=\") + modes[mode.getSelectedIndex()].getName()) + \":indentOnTab=\") + indentOnTab.isSelected()) + \":indentOnEnter=\") + indentOnEnter.isSelected()) + \":syntax=\") + syntax.isSelected()) + \":\"));]props.setText(((((((((((((((((\":mode=\" + modes[mode.getSelectedIndex()].getName()) + \":tabSize=\") + tabSize.getSelectedItem()) + \":indentSize=\") + indentSize.getSelectedItem()) + \":noTabs=\") + noTabs.isSelected()) + \":indentOnTab=\") + indentOnTab.isSelected()) + \":indentOnEnter=\") + indentOnEnter.isSelected()) + \":syntax=\") + syntax.isSelected()) + \":maxLineLen=\") + maxLineLen.getSelectedItem()) + \":\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89364,
		"linenumber" : 453,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean replaceEnabled = (! (incrementalSearch.isSelected() || batchSearch.isSelected()));]boolean replaceEnabled = (! batchSearch.isSelected());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89530,
		"linenumber" : 108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int bottom = (position.equals(DockableWindowManager.TOP) ? 5 : 0);]int bottom = (position.equals(DockableWindowManager.TOP) ? SPLITTER_WIDTH : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89933,
		"linenumber" : 575,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "currentToken = new RETokenWordBoundary(m_subIndex, (RETokenWordBoundary.BEGIN | RETokenWordBoundary.END), true);]currentToken = new RETokenWordBoundary(subIndex, (RETokenWordBoundary.BEGIN | RETokenWordBoundary.END), true);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89994,
		"linenumber" : 29,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "num = mynum;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 90327,
		"linenumber" : 226,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] args = {io.getMessage()};",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 90327,
		"linenumber" : 234,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] pp = {path, io.toString()};",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 90395,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "d.width += (getToolkit().getFontMetrics(acceleratorFont).stringWidth(shortcut) + 10);]d.width += (getFontMetrics(acceleratorFont).stringWidth(shortcut) + 10);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 90443,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "bmethod.invokeDeclaredMethod(new Object[]{method.getName(), args}, declaringInterpreter);]Primitive.unwrap(bmethod.invokeDeclaredMethod(new Object[]{method.getName(), args}, declaringInterpreter, callstack, null));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 90723,
		"linenumber" : 285,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "GrabKeyDialog.KeyBinding binding = getBindingAt(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 90723,
		"linenumber" : 285,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "GrabKeyDialog.KeyBinding binding = getBindingAt(i);]GrabKeyDialog.KeyBinding[] binding = (GrabKeyDialog.KeyBinding[]) enum1.nextElement();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 90833,
		"linenumber" : 152,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty(\"view.electricBorders\", (electricBorders.isSelected() ? \"3\" : \"0\"));]jEdit.setIntegerProperty(\"view.electricBorders\", (electricBorders.isSelected() ? 3 : 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91109,
		"linenumber" : 236,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] args = {jEdit.getProperty(((\"plugin.\" + name) + \".name\"), name), t.toString()};",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 91109,
		"linenumber" : 236,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] args = {name, t.toString()};",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 91111,
		"linenumber" : 329,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(System.getProperty(\"java.version\").compareTo(arg) < 0)](MiscUtilities.compareStrings(System.getProperty(\"java.version\"), arg, false) < 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 91137,
		"linenumber" : 449,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int[] retVal = new int[(h * w)];]byte[] retVal = new byte[(h * w)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91159,
		"linenumber" : 297,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "MiscUtilities.compareStrings(e1.title, e2.title, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91159,
		"linenumber" : 297,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "e1.title.compareTo(e2.title);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91384,
		"linenumber" : 56,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(s);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91384,
		"linenumber" : 63,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(s);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91389,
		"linenumber" : 95,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91389,
		"linenumber" : 109,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(\"\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91524,
		"linenumber" : 127,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = line;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 91524,
		"linenumber" : 127,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= startLine)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 91549,
		"linenumber" : 594,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] pp = {path, io.toString()};]String[] pp = {io.toString()};",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 91796,
		"linenumber" : 47,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "boldFont = plainFont.deriveFont(Font.BOLD);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91796,
		"linenumber" : 47,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "boldFont = new Font(plainFont.getName(), Font.BOLD, plainFont.getSize());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91849,
		"linenumber" : 359,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keyString.append((macOS ? \'C\' : \'M\'));]keyString.append((OperatingSystem.isMacOS() ? \'C\' : \'M\'));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 91872,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "panel2.setBorder(new EmptyBorder(0, 6, 0, 0));]panel2.setBorder(new EmptyBorder(6, 0, 0, 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91875,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "g.drawString(shortcut, (getWidth() - ((fm.stringWidth(shortcut) + insets.right) + insets.left)), (getFont().getSize() + (insets.top - 1)));]g.drawString(shortcut, (getWidth() - (((fm.stringWidth(shortcut) + insets.right) + insets.left) + 5)), (getFont().getSize() + (insets.top - 1)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 91884,
		"linenumber" : 606,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(buffer.getFoldLevel(i) < initialFoldLevel)]((buffer._isLineVisible(i, index) && (buffer.getFoldLevel(i) < initialFoldLevel)) || (i == (buffer._getVirtualLineCount(index) - 1)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 91899,
		"linenumber" : 121,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91899,
		"linenumber" : 121,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = lastScreenLine;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 91899,
		"linenumber" : 121,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 91899,
		"linenumber" : 126,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 91929,
		"linenumber" : 565,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((((line != (lineCount - 1)) && buffer._isLineVisible(line, index)) && (! buffer._isLineVisible((line + 1), index))) && (buffer.getFoldLevel((line + 1)) > initialFoldLevel))]((((line != (lineCount - 1)) && offsetMgr.isLineVisible(line, index)) && (! offsetMgr.isLineVisible((line + 1), index))) && (buffer.getFoldLevel((line + 1)) > initialFoldLevel))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 92075,
		"linenumber" : 335,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "info.chunks = (TextUtilities.Chunk) out.get(0);]info.chunks = (Chunk) out.get(0);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 92112,
		"linenumber" : 136,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(tipToShow == currentTip)]((tipToShow == currentTip) || (! tips[tipToShow].getName().endsWith(\".html\")))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92137,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pages = new Component[]{new TextPanel(\"app.readme\"), new TextPanel(\"app.license\"), (chooseDirectory = new ChooseDirectory()), (selectComponents = new SelectComponents()), (progress = new SwingProgress()), new Complete()};]pages = new Component[]{new TextPanel(installer.getProperty(\"app.readme\")), new TextPanel(installer.getProperty(\"app.license\")), (chooseDirectory = new ChooseDirectory()), (selectComponents = new SelectComponents()), (progress = new SwingProgress()), new TextPanel(completedInfo)};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92277,
		"linenumber" : 400,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineInfo[(startLine + i)] &= (~ (FOLD_LEVEL_VALID_MASK | CONTEXT_VALID_MASK));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 92277,
		"linenumber" : 400,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineInfo[(startLine + i)] &= (~ (FOLD_LEVEL_VALID_MASK | CONTEXT_VALID_MASK));]lineInfo[i] &= (~ (FOLD_LEVEL_VALID_MASK | CONTEXT_VALID_MASK));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 92304,
		"linenumber" : 937,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int counter = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 92304,
		"linenumber" : 937,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "counter ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 92396,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "method = FileSystemView.class.getMethod(\"getSystemDisplayName\", new Class[0]);]method = FileSystemView.class.getMethod(\"getSystemDisplayName\", new Class[]{java.io.File.class});",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 92581,
		"linenumber" : 182,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int searchLimit = (((terminateChar >= 0) && (terminateChar < line.count)) ? (line.offset + terminateChar) : lineLength);]int searchLimit = (((terminateChar >= 0) && (terminateChar < line.count)) ? (terminateChar + line.offset) : (line.count + line.offset));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92658,
		"linenumber" : 129,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int lastLine = ((((scrollPosition + getHeight()) - 30) - (fm.getHeight() * 2)) / height);]int lastLine = (((((scrollPosition + getHeight()) - TOP) - BOTTOM) / height) - 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92680,
		"linenumber" : 413,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "SPAN",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 92680,
		"linenumber" : 413,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "EOL_SPAN",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 92680,
		"linenumber" : 413,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "MARK_FOLLOWING]ParserRule.MARK_FOLLOWING",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 92704,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ruleAction = ((TokenMarker.MARK_PREVIOUS | (atLineStart ? TokenMarker.AT_LINE_START : 0)) | (excludeMatch ? TokenMarker.EXCLUDE_MATCH : 0));]int ruleAction = ((MARK_PREVIOUS | (atLineStart ? AT_LINE_START : 0)) | (excludeMatch ? EXCLUDE_MATCH : 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92724,
		"linenumber" : 564,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokenHandler.handleToken((pos - lastOffset), context.rules.getDefault(), context);]tokenHandler.handleToken(context.rules.getDefault(), (lastOffset - line.offset), len, context);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93012,
		"linenumber" : 70,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "GUIUtilities.saveGeometry(this, entry.name);]GUIUtilities.saveGeometry(this, entry.factory.name);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93147,
		"linenumber" : 169,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ParserRule(ruleAction, hashChar, null, new RE(begin, (ignoreCase ? RE.REG_ICASE : 0), RESearchMatcher.RE_SYNTAX_JEDIT), end.toCharArray(), delegate, id);]new ParserRule(ruleAction, hashChar, null, new RE((\"\\\\A\" + begin), (ignoreCase ? RE.REG_ICASE : 0), RESearchMatcher.RE_SYNTAX_JEDIT), end.toCharArray(), delegate, id);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93180,
		"linenumber" : 373,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(name);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93180,
		"linenumber" : 376,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(name.replace(\' \', \'_\'));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93184,
		"linenumber" : 115,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "setLocationRelativeTo(view);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93184,
		"linenumber" : 119,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "GUIUtilities.loadGeometry(this, name);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93234,
		"linenumber" : 568,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "g.setColor(UIManager.getColor(((c.isEnabled() && (((HistoryTextField) c).getModel() != null)) ? \"Menu.foreground\" : \"Menu.disabledForeground\")));]g.setColor(UIManager.getColor(((c.isEnabled() && (((HistoryTextField) c).getModel() != null)) ? \"TextField.foreground\" : \"TextField.disabledForeground\")));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93305,
		"linenumber" : 184,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "HelpIndex.HelpFile result = (HelpIndex.HelpFile) results.getModel().getElementAt(row);]Result result = (Result) results.getModel().getElementAt(row);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93434,
		"linenumber" : 248,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "iter.hasNext()]((i < visibleLines) && iter.hasNext())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93529,
		"linenumber" : 696,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new BeanShellErrorDialog(view, t.toString());]new BeanShellErrorDialog(view, t);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 93640,
		"linenumber" : 508,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineInfo[line] = ((lineInfo[line] & (~ ((END_MASK | FOLD_LEVEL_VALID_MASK) | CONTEXT_VALID_MASK))) | end);]lineInfo[line] = ((lineInfo[line] & (~ (END_MASK | FOLD_LEVEL_VALID_MASK))) | end);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93809,
		"linenumber" : 706,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "physicalLine = prevLine;]physicalLine = nextLine;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 93836,
		"linenumber" : 868,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dimension += (dragStart.x - evt.getX());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93836,
		"linenumber" : 883,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "wm.resizePos = (getWidth() - evt.getX());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 94064,
		"linenumber" : 715,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "insideGroup](insideGroup != 0)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 94142,
		"linenumber" : 123,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] dirs = {\"buffer\", \"home\", \"favorites\", \"last\"};]String[] dirs = {\"favorites\", \"home\", \"last\", \"buffer\", \"working\"};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94271,
		"linenumber" : 1286,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Graphics2D blockgfx = (Graphics2D) gfx.create();]Graphics2D blockgfx = (OperatingSystem.isWindows() ? (Graphics2D) gfx.create() : gfx);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 94470,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "EvalError]UtilEvalError",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 94503,
		"linenumber" : 126,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError((\"Can\\\'t read field: \" + field));]new UtilEvalError((\"Can\\\'t read field: \" + field));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 94619,
		"linenumber" : 281,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] args = {needVersion, plugin};]String[] args = {needVersion, pluginName};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 94621,
		"linenumber" : 295,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(jEdit.getPlugin(plugin) instanceof EditPlugin.Broken)](plugin instanceof EditPlugin.Broken)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 94747,
		"linenumber" : 1206,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 94747,
		"linenumber" : 1206,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < buffer.getLineCount())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94747,
		"linenumber" : 1218,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94748,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "rem = ring[((ring.length - index) + count)];]rem = ring[((ring.length + index) - count)];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 94761,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"favorites\", (DELETE_CAP | LOW_LATENCY_CAP));]super(\"favorites\", (DELETE_CAP | LOW_LATENCY_CAP), new String[]{EA_TYPE});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94768,
		"linenumber" : 205,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.extAttrs = new String[]{EA_SIZE_OR_TYPE, EA_STATUS, EA_MODIFIED};]this.extAttrs = new String[]{EA_SIZE, EA_TYPE};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94796,
		"linenumber" : 276,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "c.last;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 94796,
		"linenumber" : 291,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Edit) c.undos.get((c.undos.size() - 1));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 94834,
		"linenumber" : 727,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokenHandler.init(textArea.lineSegment, painter.getStyles(), painter.getFontRenderContext(), painter, out, (textArea.getDisplayManager().softWrap ? textArea.getDisplayManager().wrapMargin : 0.0f));]tokenHandler.init(textArea.lineSegment, painter.getStyles(), painter.getFontRenderContext(), painter, out, (textArea.displayManager.softWrap ? textArea.displayManager.wrapMargin : 0.0f));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94951,
		"linenumber" : 245,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "4",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 95135,
		"linenumber" : 644,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "textArea.setSelection(new Selection.Range((start - match[1]), (start - match[0])));]textArea.setSelection(new Selection.Range((start - match.end), (start - match.start)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 95167,
		"linenumber" : 108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dimensions[i] = Array.getLength(arraySlice);]definedDimensions[i] = Array.getLength(arraySlice);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 95201,
		"linenumber" : 152,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "argValues[i] = NameSpace.getAssignableForm(argValues[i], method.params.argTypes[i]);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 95237,
		"linenumber" : 587,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new InterpreterError(\"internal error 2893749283\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 95237,
		"linenumber" : 661,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new UtilEvalError((\"Error in LHS: \" + value));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 95272,
		"linenumber" : 142,
		"changeype" : "ALTERNATIVE_PART_INSERT",
		"changeentity" : "ELSE_STATEMENT",
		"changecontent" : "(value instanceof Byte)",
		"parententity" : "IF_STATEMENT"
	},
	{
		"linetupleid" : 95272,
		"linenumber" : 142,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(value instanceof Short)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 95296,
		"linenumber" : 97,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "returnValue.substitutions = new String[re.getNumSubs()];]returnValue.substitutions = new String[(re.getNumSubs() + 1)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 95340,
		"linenumber" : 197,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(MiscUtilities.getFileName(path), path, ((PROTOCOL + \":\") + path), type, 0, false);]super(path, path, ((PROTOCOL + \":\") + path), type, 0, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 95591,
		"linenumber" : 115,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "primValue = primValue.castToType(baseType, Types.CAST);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 95591,
		"linenumber" : 115,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "primValue = BSHCastExpression.castPrimitive(primValue, baseType);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 95638,
		"linenumber" : 504,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "This ths = thisNameSpace.getSuper().getThis(interpreter);]This ths = thisNameSpace.getSuper(interpreter);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 95704,
		"linenumber" : 128,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(buffer.isNewFile() && (! autosave))]buffer.isNewFile()",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 95824,
		"linenumber" : 954,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((desired.y < osbounds.y) || ((desired.y + desired.height) > osbounds.height))]((desired.y < osbounds.y) || ((desired.y + desired.height) > (osbounds.y + osbounds.height)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 95827,
		"linenumber" : 320,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new OSTask[]{};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 95827,
		"linenumber" : 320,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new OSTask[]{new JEditLauncherOSTask(installer)};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 95956,
		"linenumber" : 1078,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "gfx.drawString(\":\", Math.max(x, ((textArea.getHorizontalOffset() + textArea.getDisplayManager().wrapMargin) + textArea.charWidth)), baseLine);]gfx.drawString(\":\", Math.max(x, ((textArea.getHorizontalOffset() + textArea.wrapMargin) + textArea.charWidth)), baseLine);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 96019,
		"linenumber" : 151,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "selection.add(i, addMe);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 96019,
		"linenumber" : 154,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "selection.insertElementAt(addMe, i);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 96022,
		"linenumber" : 192,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Selection s = (Selection) selection.elementAt(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 96022,
		"linenumber" : 192,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Selection s = (Selection) selection.elementAt(i);]Selection s = (Selection) iter.next();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 96117,
		"linenumber" : 411,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String matchAgainst = (MiscUtilities.isAbsolutePath(str) ? entry.dirEntry.path : entry.dirEntry.name);]String matchAgainst = (MiscUtilities.isAbsolutePath(str) ? entry.dirEntry.getPath() : entry.dirEntry.getName());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 96723,
		"linenumber" : 92,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object value;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 96728,
		"linenumber" : 137,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "value = buffer.toString();]value = buffer.toString().intern();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97109,
		"linenumber" : 339,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] pp = {String.valueOf(ch), new Integer(repeatCount)};]Object[] pp = {String.valueOf(ch), repeatCount};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97123,
		"linenumber" : 546,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "view.getInputHandler().processKeyEvent(evt, View.VIEW, false);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97123,
		"linenumber" : 546,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "view.processKeyEvent(evt);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97149,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "newFiles[((startIndex + i) + 1)] = new Entry(list.get(i), (entry.level + 1), entry);]subdirFiles[i] = new Entry(list.get(i), (entry.level + 1), entry);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 97330,
		"linenumber" : 100,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "encoding.setSelectedItem(buffer.getStringProperty(Buffer.ENCODING));]encoding.setSelectedItem(buffer.getStringProperty(JEditBuffer.ENCODING));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97399,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "XMLUtilities.findEntity(systemId, \"mirrors.dtd\", org.gjt.sp.jedit.options.PluginOptions.class);]XMLUtilities.findEntity(systemId, \"mirrors.dtd\", PluginOptions.class);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97402,
		"linenumber" : 75,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < resultNodes.size())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97402,
		"linenumber" : 75,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 97402,
		"linenumber" : 75,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 97402,
		"linenumber" : 77,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = resultNodes.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 97402,
		"linenumber" : 77,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "iter.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97412,
		"linenumber" : 182,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 97412,
		"linenumber" : 182,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 97412,
		"linenumber" : 183,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator it = resultNodes.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 97412,
		"linenumber" : 183,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "it.hasNext()](i < resultNodes.size())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97475,
		"linenumber" : 517,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! optional)](! pluginDepends.optional)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97556,
		"linenumber" : 393,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((- 1) == new String(checkRule.upHashChars).indexOf(Character.toUpperCase(line.array[pos])))]((- 1) == Arrays.binarySearch(checkRule.upHashChars, Character.toUpperCase(line.array[pos])))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 97605,
		"linenumber" : 761,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int wantedMinimumRowHeight = component.getMinimumSize().height;]int wantedMinimumRowHeight = (component.getMinimumSize().height - ((rowspan - 1) * vgap));",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 97674,
		"linenumber" : 317,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokenHandler.handleToken(line, (((context.inRule.action & ParserRule.EXCLUDE_MATCH) == ParserRule.EXCLUDE_MATCH) ? context.rules.getDefault() : context.inRule.token), (pos - line.offset), pattern.count, context);]tokenHandler.handleToken(line, matchToken(context.inRule, context.inRule, context), (pos - line.offset), pattern.count, context);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97729,
		"linenumber" : 165,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "IOException]Exception",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 97741,
		"linenumber" : 70,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getBrackets(buffer.getLineText(line)).openCount;]getBrackets(buffer, line).openCount;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 97837,
		"linenumber" : 148,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "String encoding:encodings]String encodstr:encodings",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97849,
		"linenumber" : 103,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(parent.canWrite() ? super.getTwoStageSaveName(path) : null);]((parent.canWrite() || OperatingSystem.isWindows()) ? super.getTwoStageSaveName(path) : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97865,
		"linenumber" : 103,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((dataFlavor.getPrimaryType().equals(\"text\") && dataFlavor.getSubType().equals(\"uri-list\")) && (dataFlavor.getRepresentationClass() == String.class))]((\"text\".equals(dataFlavor.getPrimaryType()) && \"uri-list\".equals(dataFlavor.getSubType())) && (dataFlavor.getRepresentationClass() == String.class))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 97904,
		"linenumber" : 173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int[] newfvm = new int[((fvm.length * 2) + 1)];]int[] newfvm = new int[((fvm.length << 1) + 1)];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97958,
		"linenumber" : 1087,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PluginTableModel model = (PluginTableModel) table.getModel();]PluginTableModel model = (PluginTableModel) ((FilteredTableModel) table.getModel()).getDelegated();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97987,
		"linenumber" : 236,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Set<String> savedChecked = new HashSet<String>();]final Set<String> savedChecked = new HashSet<String>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98022,
		"linenumber" : 1124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PluginTableModel model = (PluginTableModel) ((FilteredTableModel) table.getModel()).getDelegated();]PluginTableModel model = (PluginTableModel) table.getModel();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98052,
		"linenumber" : 142,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "out = new BufferedWriter(new FileWriter(file1));]out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file1), encoding));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 98069,
		"linenumber" : 95,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "SettingsXML.Saver out = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98069,
		"linenumber" : 97,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "BufferedWriter out = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98082,
		"linenumber" : 188,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ruleAction = ((((SPAN | REGEXP) | (noLineBreak ? NO_LINE_BREAK : 0)) | (noWordBreak ? NO_WORD_BREAK : 0)) | (noEscape ? NO_ESCAPE : 0));]int ruleAction = (((SPAN | REGEXP) | (noLineBreak ? NO_LINE_BREAK : 0)) | (noWordBreak ? NO_WORD_BREAK : 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98126,
		"linenumber" : 404,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(o instanceof JEditBeanShell)](o instanceof JEditBeanShellAction)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 98150,
		"linenumber" : 126,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new RepaintLines((clipRect.y / height), (((clipRect.y + clipRect.height) - 1) / height));]new RepaintLines((clipRect.y / lineHeight), (((clipRect.y + clipRect.height) - 1) / lineHeight));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98162,
		"linenumber" : 180,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "view.getStatus().setMessageAndClear(jEdit.getProperty(\"view.status.incomplete-abbrev\", new Integer[]{new Integer(m_pp.size()), new Integer(expand.posParamCount)}));]view.getStatus().setMessageAndClear(jEdit.getProperty(\"view.status.incomplete-abbrev\", new Integer[]{Integer.valueOf(m_pp.size()), Integer.valueOf(expand.posParamCount)}));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 98398,
		"linenumber" : 917,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(str.length() > (seq.length() - 1))]((str.length() - strIdx) > (seq.length() - i))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 98442,
		"linenumber" : 49,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "OverwriteWidget mode = new OverwriteWidget(view);]Widget overwrite = new OverwriteWidget(view);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98455,
		"linenumber" : 173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(view, \"Errors\", true);]super(view, \"Errors\", false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98597,
		"linenumber" : 112,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.skipBinary = jEdit.getBooleanProperty(\"search.skipBinary.toggle\");]skipBinary = jEdit.getBooleanProperty(\"search.skipBinary.toggle\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98720,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "ring = new UndoManager.Remove[newSize];]ring = new UndoManager.RemovedContent[newSize];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 98753,
		"linenumber" : 118,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "String layout:layouts",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98753,
		"linenumber" : 166,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "String perspective:perspectives",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98942,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "Collections.sort(styleChoices, new StandardUtilities.StringCompare(true));]Collections.sort(styleChoices, new StandardUtilities.StringCompare<StyleChoice>(true));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 98965,
		"linenumber" : 135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((index >= 0) && (index < members.size())) ? members.elementAt(index) : null);](((index >= 0) && (index < members.size())) ? members.get(index) : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99106,
		"linenumber" : 158,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(String) stateStack.pop();]stateStack.pop();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99108,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String lineSep = buffer.getStringProperty(\"lineSeparator\");]String lineSep = buffer.getStringProperty(JEditBuffer.LINESEP);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99267,
		"linenumber" : 132,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ErrorEntry entry:messages",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99267,
		"linenumber" : 132,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object message:messages",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99288,
		"linenumber" : 333,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Class<?> msg:keySet()]Map.Entry<Class<?>, List<EBMessageHandler>> entry:entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99351,
		"linenumber" : 98,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dimension dim = new Dimension((Math.max(fm.charWidth(\'-\'), fm.charWidth(\'R\')) + 1), fm.getHeight());]Dimension dim = new Dimension((Math.max(fm.charWidth(\'r\'), fm.charWidth(\'R\')) + 1), fm.getHeight());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99401,
		"linenumber" : 194,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Character upperKey = ((null == key) ? null : Character.valueOf(Character.toUpperCase(key.charValue())));]Character upperKey = ((key == null) ? null : Character.valueOf(Character.toUpperCase(key.charValue())));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99539,
		"linenumber" : 92,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "wrap.equals(\"hard\")]\"hard\".equals(wrap)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 99610,
		"linenumber" : 242,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((! f.getFamily().equalsIgnoreCase(\"dialog\")) || family.equalsIgnoreCase(\"dialog\"))]((! \"dialog\".equalsIgnoreCase(f.getFamily())) || \"dialog\".equalsIgnoreCase(family))",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 99648,
		"linenumber" : 207,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean restoreFiles = ((restore && jEdit.getBooleanProperty(\"restore\")) && ((buffer == null) || jEdit.getBooleanProperty(\"restore.cli\")));]boolean restoreFiles = ((restore && jEdit.getBooleanProperty(\"restore\")) && (hasBufferArgs || jEdit.getBooleanProperty(\"restore.cli\")));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 99710,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(name, caption, ContextType.jEdit);]this(name, caption, jEdit.getActionContext());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99754,
		"linenumber" : 131,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! isShowing())](! isVisible())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99957,
		"linenumber" : 238,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((! c1.accessable) || (! c2.accessable))]((! c1.isAccessible()) || (! c2.isAccessible()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99998,
		"linenumber" : 656,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(start < end)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99998,
		"linenumber" : 658,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((max != (- 1)) && (start < end))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 100015,
		"linenumber" : 298,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(offsetInMargin == (- 1))](offsetInMargin != (- 1))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 100018,
		"linenumber" : 938,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "LineContext obj = intern.get(this);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 100018,
		"linenumber" : 938,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "LineContext obj = intern.get(this);]LineContext obj = ref.get();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 100018,
		"linenumber" : 940,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "WeakReference<LineContext> ref = intern.get(this);",
		"parententity" : "METHOD"
	}
]
