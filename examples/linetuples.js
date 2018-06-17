var linetuples = [
	{
		"linetupleid" : 85403,
		"leftlines" : "if (portFile != null &&  <span class='token del' >  <span class='token mv' > portFile</span></span>.exists())  ",
		"rightlines" : "if (portFile != null &&  <span class='token add' > new File( <span class='token mv' > portFile</span>)</span>.exists()) "
	},
	{
		"linetupleid" : 4595,
		"leftlines" : "for (Iterator j = plugin.getGoals().iterator();  <span class=\'token del\' >  <span class=\'token mv\' > j.hasNext()</span></span>; ) ",
		"rightlines" : "for (Iterator j = plugin.getGoals().iterator();  <span class=\'token add\' >  <span class=\'token mv\' > j.hasNext()</span> && dom == null</span>; ) "
	},
	{
		"linetupleid" : 83585,
		"leftlines" : "return;",
		"rightlines" : "return  <span class=\'token add\' > Boolean.FALSE</span>;"
	},
	{
		"linetupleid" : 91549,
		"leftlines" : null,
		"rightlines" : null
	},
	{
		"linetupleid" : 4608,
		"leftlines" : "for (Iterator j = plugin.getGoals().iterator();  <span class=\'token del\' >  <span class=\'token mv\' > j.hasNext()</span> && dom == null</span>; ) ",
		"rightlines" : "for (Iterator j = plugin.getGoals().iterator();  <span class=\'token add\' >  <span class=\'token mv\' > j.hasNext()</span></span>; ) "
	},
	{
		"linetupleid" : 83651,
		"leftlines" : " catch (CannotRedoException  <span class=\'token del\' > e</span>) ",
		"rightlines" : " catch (CannotRedoException  <span class=\'token add\' > cr</span>) "
	},
	{
		"linetupleid" : 91616,
		"leftlines" : " catch (Exception e) ",
		"rightlines" : " catch ( <span class=\'token add\' > final</span> Exception e) "
	},
	{
		"linetupleid" : 15495,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > MavenSession</span>[]</span> currentSession = DefaultLegacySupport.session.get();",
		"rightlines" : " <span class=\'token add\' > AtomicReference< <span class=\'token mv\' > MavenSession</span>></span> currentSession = DefaultLegacySupport.session.get();"
	},
	{
		"linetupleid" : 39439,
		"leftlines" : "buf.append( <span class=\'token del\' > \"\\n-TODO tag : \"</span> + (this. <span class=\'token del\' > toDoTag</span> == null ?  <span class=\'token del\' > \"<null>\"</span> : new String( <span class=\'token del\' > this.toDoTag</span>)));",
		"rightlines" : "buf.append( <span class=\'token add\' > \"\\n-task tag : \"</span> + (this. <span class=\'token add\' > taskTags</span> == null ?  <span class=\'token add\' > \"\"</span> : new String( <span class=\'token add\' > CharOperation.concatWith(this.taskTags, \',\')</span>)));"
	},
	{
		"linetupleid" : 58112,
		"leftlines" : "for (int i = 0, length = this.patterns.length;  <span class=\'token del\' >  <span class=\'token mv\' > i < length</span> && !isErasureMatch</span>; i++) ",
		"rightlines" : "for (int i = 0, length = this.patterns.length;  <span class=\'token add\' >  <span class=\'token mv\' > i < length</span></span>; i++) "
	},
	{
		"linetupleid" : 99998,
		"leftlines" : "while ( <span class=\'token del\' > max != -1 &&  <span class=\'token mv\' > start < end</span></span>) ",
		"rightlines" : "while ( <span class=\'token add\' >  <span class=\'token mv\' > start < end</span></span>) "
	},
	{
		"linetupleid" : 91712,
		"leftlines" : "while ( <span class=\'token del\' > reverseSearch ? anchor >= last_anchor : anchor <= last_anchor</span>) ",
		"rightlines" : "while ( <span class=\'token add\' > text.isValid()</span>) "
	},
	{
		"linetupleid" : 83751,
		"leftlines" : null,
		"rightlines" : null
	},
	{
		"linetupleid" : 2646,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > null == reference</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > null == reference</span> || destroyedSoFar.contains(reference)</span>) "
	},
	{
		"linetupleid" : 2650,
		"leftlines" : "binder.withSource(element.getSource()).bindInterceptor(element.getClassMatcher(), element.getMethodMatcher(), interceptors.toArray(new  <span class=\'token del\' >  <span class=\'token mv\' > MethodInterceptor</span></span>[interceptors.size()]));",
		"rightlines" : "binder.withSource(element.getSource()).bindInterceptor(element.getClassMatcher(), element.getMethodMatcher(), interceptors.toArray(new  <span class=\'token add\' > org.aopalliance.intercept. <span class=\'token mv\' > MethodInterceptor</span></span>[interceptors.size()]));"
	},
	{
		"linetupleid" : 2653,
		"leftlines" : "public static  <span class=\'token del\' >  <span class=\'token mv\' > Enhancer</span></span> newEnhancer(Class<?> type, Visibility visibility)",
		"rightlines" : "public static  <span class=\'token add\' > net.sf.cglib.proxy. <span class=\'token mv\' > Enhancer</span></span> newEnhancer(Class<?> type, Visibility visibility)"
	},
	{
		"linetupleid" : 49366,
		"leftlines" : "IPackageFragment[] pkgs =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > project</span>.newNameLookup((WorkingCopyOwner) null)</span></span>.findPackageFragments(\"p1\", false);",
		"rightlines" : "IPackageFragment[] pkgs =  <span class=\'token add\' >  <span class=\'token add\' > getNameLookup( <span class=\'token mv\' > project</span>)</span></span>.findPackageFragments(\"p1\", false);"
	},
	{
		"linetupleid" : 2674,
		"leftlines" : "factory =  <span class=\'token del\' > factoryType</span>.cast(Proxy.newProxyInstance( <span class=\'token del\' > factoryType</span>.getClassLoader(), new Class[]  <span class=\'token del\' > { factoryType }</span>, this));",
		"rightlines" : "factory =  <span class=\'token add\' > factoryRawType</span>.cast(Proxy.newProxyInstance( <span class=\'token add\' > factoryRawType</span>.getClassLoader(), new Class[]  <span class=\'token add\' > { factoryRawType }</span>, this));"
	},
	{
		"linetupleid" : 2676,
		"leftlines" : "return classLoader != null ? classLoader :  <span class=\'token del\' > ClassLoader.getSystemClassLoader()</span>;",
		"rightlines" : "return classLoader != null ? classLoader :  <span class=\'token add\' > checkNotNull(getSystemClassLoaderOrNull(), \"Couldn\'t get a ClassLoader\")</span>;"
	},
	{
		"linetupleid" : 2683,
		"leftlines" : "if (binding instanceof  <span class=\'token del\' > ClassBindingImpl<?></span>) ",
		"rightlines" : "if (binding instanceof  <span class=\'token add\' > ConstructorBindingImpl<?></span>) "
	},
	{
		"linetupleid" : 11925,
		"leftlines" : "return  <span class=\'token del\' > decodeUrl( <span class=\'token mv\' > normalized</span>)</span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > normalized</span></span>;"
	},
	{
		"linetupleid" : 97556,
		"leftlines" : "if (-1 ==  <span class=\'token del\' > new String( <span class=\'token mv\' > checkRule.upHashChars</span>)</span>. <span class=\'token del\' > indexOf</span>(Character.toUpperCase(line.array[pos]))) ",
		"rightlines" : "if (-1 ==  <span class=\'token add\' > Arrays</span>. <span class=\'token add\' > binarySearch</span>( <span class=\'token add\' >  <span class=\'token mv\' > checkRule.upHashChars</span></span>, Character.toUpperCase(line.array[pos]))) "
	},
	{
		"linetupleid" : 91796,
		"leftlines" : "boldFont =  <span class=\'token del\' > new  <span class=\'token mv\' > Font</span>( <span class=\'token mv\' > plainFont</span>.getName(),  <span class=\'token mv\' > Font</span>. <span class=\'token mv\' > BOLD</span>,  <span class=\'token mv\' > plainFont</span>.getSize())</span>;",
		"rightlines" : "boldFont =  <span class=\'token add\' >  <span class=\'token mv\' > plainFont</span>.deriveFont( <span class=\'token mv\' > Font</span>. <span class=\'token mv\' > BOLD</span>)</span>;"
	},
	{
		"linetupleid" : 60291,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > UnusedLocalVariable | UnusedArgument</span> | UnusedImport</span> | UnusedPrivateMember | UnusedDeclaredThrownException;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > UnusedLocalVariable | UnusedArgument</span></span> | UnusedPrivateMember | UnusedDeclaredThrownException;"
	},
	{
		"linetupleid" : 100015,
		"leftlines" : "assert  <span class=\'token del\' >  <span class=\'token mv\' > offsetInMargin</span> == - <span class=\'token mv\' > 1</span></span>;",
		"rightlines" : "assert  <span class=\'token add\' >  <span class=\'token mv\' > offsetInMargin</span> != - <span class=\'token mv\' > 1</span></span>;"
	},
	{
		"linetupleid" : 2717,
		"leftlines" : " catch ( <span class=\'token del\' > Exception</span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' > RuntimeException</span> e) "
	},
	{
		"linetupleid" : 45433,
		"leftlines" : "if ( <span class=\'token del\' > fCodeResolve</span> instanceof CompilationUnit && ((CompilationUnit)  <span class=\'token del\' > fCodeResolve</span>).isWorkingCopy()) ",
		"rightlines" : "if ( <span class=\'token add\' > this.openable</span> instanceof CompilationUnit && ((CompilationUnit)  <span class=\'token add\' > this.openable</span>).isWorkingCopy()) "
	},
	{
		"linetupleid" : 49428,
		"leftlines" : "CompilationUnitResolver compilationUnitVisitor = new CompilationUnitResolver( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > project</span>.newSearchableNameEnvironment( <span class=\'token mv\' > owner</span>)</span></span>, getHandlingPolicy(), project.getOptions(true), getRequestor(), new DefaultProblemFactory());",
		"rightlines" : "CompilationUnitResolver compilationUnitVisitor = new CompilationUnitResolver( <span class=\'token add\' >  <span class=\'token add\' > getNameEnvironment( <span class=\'token mv\' > project</span>,  <span class=\'token mv\' > owner</span>, monitor)</span></span>, getHandlingPolicy(), project.getOptions(true), getRequestor(), getProblemFactory(monitor));"
	},
	{
		"linetupleid" : 60292,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > itsInterfaces != NoSuperInterfaces</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > itsInterfaces != NoSuperInterfaces</span> && itsInterfaces != null</span>) "
	},
	{
		"linetupleid" : 83403,
		"leftlines" : "for (int i = 0, max = this.preserveExistingCommentsRanges.length;  <span class=\'token del\' >  <span class=\'token mv\' > i < max</span></span>; i++) ",
		"rightlines" : "for (int i = 0, max = this.preserveExistingCommentsRanges.length;  <span class=\'token add\' > ( <span class=\'token mv\' > i < max</span> && this.preserveExistingCommentsRanges[i] != null)</span>; i++) "
	},
	{
		"linetupleid" : 83946,
		"leftlines" : " <span class=\'token del\' > tokens.addElement(new JSToken(line.substring( <span class=\'token mv\' > lastOffset</span>,  <span class=\'token mv\' > i</span> +  <span class=\'token mv\' > 1</span>),  <span class=\'token mv\' > TAG</span>))</span>;",
		"rightlines" : " <span class=\'token add\' > addToken(( <span class=\'token mv\' > i</span> +  <span class=\'token mv\' > 1</span>) -  <span class=\'token mv\' > lastOffset</span>,  <span class=\'token mv\' > TAG</span>)</span>;"
	},
	{
		"linetupleid" : 83955,
		"leftlines" : "if (token == null && (i ==  <span class=\'token del\' > 0</span> ||  <span class=\'token del\' >  <span class=\'token mv\' > line</span>.charAt( <span class=\'token mv\' > i</span> -  <span class=\'token mv\' > 1</span>)</span> != \'\\\\\')) ",
		"rightlines" : "if (token == null && (i ==  <span class=\'token add\' > offset</span> ||  <span class=\'token add\' >  <span class=\'token mv\' > line</span>.array[ <span class=\'token mv\' > i</span> -  <span class=\'token mv\' > 1</span>]</span> != \'\\\\\')) "
	},
	{
		"linetupleid" : 38289,
		"leftlines" : "return new  <span class=\'token del\' > String</span>[] { name };",
		"rightlines" : "return new  <span class=\'token add\' > char</span>[] <span class=\'token add\' > []</span> { name };"
	},
	{
		"linetupleid" : 91849,
		"leftlines" : "keyString.append( <span class=\'token del\' > macOS</span> ? \'C\' : \'M\');",
		"rightlines" : "keyString.append( <span class=\'token add\' > OperatingSystem.isMacOS()</span> ? \'C\' : \'M\');"
	},
	{
		"linetupleid" : 91872,
		"leftlines" : "panel2.setBorder(new EmptyBorder( <span class=\'token del\' > 0</span>,  <span class=\'token del\' > 6</span>, 0, 0));",
		"rightlines" : "panel2.setBorder(new EmptyBorder( <span class=\'token add\' > 6</span>,  <span class=\'token add\' > 0</span>, 0, 0));"
	},
	{
		"linetupleid" : 91875,
		"leftlines" : "g.drawString(shortcut, getWidth() - ( <span class=\'token del\' >  <span class=\'token mv\' > fm.stringWidth(shortcut) + insets.right + insets.left</span></span>), getFont().getSize() + (insets.top - 1));",
		"rightlines" : "g.drawString(shortcut, getWidth() - ( <span class=\'token add\' >  <span class=\'token mv\' > fm.stringWidth(shortcut) + insets.right + insets.left</span> + 5</span>), getFont().getSize() + (insets.top - 1));"
	},
	{
		"linetupleid" : 2749,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > binder.withSource(getSource()).getProvider(key)</span></span>;",
		"rightlines" : " <span class=\'token add\' > initializeDelegate( <span class=\'token mv\' > binder.withSource(getSource()).getProvider(key)</span>)</span>;"
	},
	{
		"linetupleid" : 91884,
		"leftlines" : "if (buffer.getFoldLevel(i) < initialFoldLevel) ",
		"rightlines" : "if ( <span class=\'token add\' > (buffer._isLineVisible(i, index) && buffer.getFoldLevel(i) < initialFoldLevel) || i == buffer._getVirtualLineCount(index) - 1</span>) "
	},
	{
		"linetupleid" : 91899,
		"leftlines" : "for (; ; ) ",
		"rightlines" : "for ( <span class=\'token add\' > int i = lastScreenLine</span>;  <span class=\'token add\' > i >= 0</span>;  <span class=\'token add\' > i--</span>) "
	},
	{
		"linetupleid" : 71696,
		"leftlines" : "switch( <span class=\'token del\' >  <span class=\'token mv\' > kind</span></span>)\n",
		"rightlines" : "switch( <span class=\'token add\' >  <span class=\'token mv\' > kind</span> & K_MASK</span>)\n"
	},
	{
		"linetupleid" : 91929,
		"leftlines" : "if (line != lineCount - 1 &&  <span class=\'token del\' > buffer</span>. <span class=\'token del\' > _isLineVisible</span>(line, index) && ! <span class=\'token del\' > buffer</span>. <span class=\'token del\' > _isLineVisible</span>(line + 1, index) && buffer.getFoldLevel(line + 1) > initialFoldLevel) ",
		"rightlines" : "if (line != lineCount - 1 &&  <span class=\'token add\' > offsetMgr</span>. <span class=\'token add\' > isLineVisible</span>(line, index) && ! <span class=\'token add\' > offsetMgr</span>. <span class=\'token add\' > isLineVisible</span>(line + 1, index) && buffer.getFoldLevel(line + 1) > initialFoldLevel) "
	},
	{
		"linetupleid" : 97605,
		"leftlines" : "int  <span class=\'token del\' > wantedMinimumRowHeight =  <span class=\'token mv\' > component</span>.getMinimumSize().height</span>;",
		"rightlines" : "int  <span class=\'token add\' > wantedMaximumColWidth =  <span class=\'token mv\' > component</span>.getMaximumSize().width - ((colspan - 1) * hgap)</span>;"
	},
	{
		"linetupleid" : 11972,
		"leftlines" : "MavenExecutionRequest request =  <span class=\'token del\' >  <span class=\'token mv\' > new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setUseReactor(useReactor).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy)</span></span>;",
		"rightlines" : "MavenExecutionRequest request =  <span class=\'token add\' >  <span class=\'token mv\' > new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setUseReactor(useReactor).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy)</span>.setUserToolchainsFile(userToolchainsFile)</span>;"
	},
	{
		"linetupleid" : 84181,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 100018,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > LineContext</span></span>  <span class=\'token del\' > obj</span> = intern.get(this);",
		"rightlines" : " <span class=\'token add\' > WeakReference< <span class=\'token mv\' > LineContext</span>></span>  <span class=\'token add\' > ref</span> = intern.get(this);"
	},
	{
		"linetupleid" : 92075,
		"leftlines" : "info.chunks = ( <span class=\'token del\' > TextUtilities. <span class=\'token mv\' > Chunk</span></span>) out.get(0);",
		"rightlines" : "info.chunks = ( <span class=\'token add\' >  <span class=\'token mv\' > Chunk</span></span>) out.get(0);"
	},
	{
		"linetupleid" : 6347,
		"leftlines" : "throw new PluginManagerException( <span class=\'token del\' >  <span class=\'token mv\' > \"Error occurred in the artifact container attempting to download plugin \"</span> + groupId + \":\"</span> +  <span class=\'token del\' > artifactId</span>, e);",
		"rightlines" : "throw new PluginManagerException( <span class=\'token add\' >  <span class=\'token mv\' > \"Error occurred in the artifact container attempting to download plugin \"</span></span> +  <span class=\'token add\' > plugin.getKey()</span>, e);"
	},
	{
		"linetupleid" : 2800,
		"leftlines" : "parameters[ <span class=\'token del\' >  <span class=\'token mv\' > i</span>++</span>] = parameterInjector.inject(errors, context);",
		"rightlines" : "parameters[ <span class=\'token add\' >  <span class=\'token mv\' > i</span></span>] = parameterInjector.inject(errors, context);"
	},
	{
		"linetupleid" : 42830,
		"leftlines" : "public SpecialSelectionParser(ProblemReporter problemReporter,  <span class=\'token del\' > boolean assertMode</span>)",
		"rightlines" : "public SpecialSelectionParser(ProblemReporter problemReporter,  <span class=\'token add\' > int sourceLevel</span>)"
	},
	{
		"linetupleid" : 97674,
		"leftlines" : "tokenHandler.handleToken(line,  <span class=\'token del\' > ( <span class=\'token mv\' > context</span>. <span class=\'token mv\' > inRule</span>.action & ParserRule.EXCLUDE_MATCH) == ParserRule.EXCLUDE_MATCH ?  <span class=\'token mv\' > context</span>.rules.getDefault() :  <span class=\'token mv\' > context</span>. <span class=\'token mv\' > inRule</span>.token</span>, pos - line.offset, pattern.count, context);",
		"rightlines" : "tokenHandler.handleToken(line,  <span class=\'token add\' > matchToken( <span class=\'token mv\' > context</span>. <span class=\'token mv\' > inRule</span>,  <span class=\'token mv\' > context</span>. <span class=\'token mv\' > inRule</span>,  <span class=\'token mv\' > context</span>)</span>, pos - line.offset, pattern.count, context);"
	},
	{
		"linetupleid" : 84481,
		"leftlines" : "buffer.remove( <span class=\'token del\' > lineElement.getEndOffset()</span>  <span class=\'token del\' > -</span>  <span class=\'token del\' >  <span class=\'token mv\' > 1</span></span>, 1);",
		"rightlines" : "buffer.remove( <span class=\'token add\' > end -  <span class=\'token mv\' > 1</span></span>,  <span class=\'token add\' > jEdit.getLeadingWhiteSpace(buffer.getText(nextStart, nextEnd - nextStart))</span>  <span class=\'token add\' > +</span> 1);"
	},
	{
		"linetupleid" : 15530,
		"leftlines" : "case  <span class=\'token del\' > MavenExecutionRequest.LOGGING_LEVEL_INFO</span>:\n",
		"rightlines" : "case  <span class=\'token add\' > INFO</span>:\n"
	},
	{
		"linetupleid" : 92112,
		"leftlines" : "while ( <span class=\'token del\' >  <span class=\'token mv\' > tipToShow == currentTip</span></span>) ",
		"rightlines" : "while ( <span class=\'token add\' >  <span class=\'token mv\' > tipToShow == currentTip</span> || !tips[tipToShow].getName().endsWith(\".html\")</span>) "
	},
	{
		"linetupleid" : 4745,
		"leftlines" : " <span class=\'token del\' > String</span> classpath[] =  <span class=\'token del\' > new String[ <span class=\'token mv\' > dependencies</span>. <span class=\'token mv\' > size</span>() +  <span class=\'token mv\' > 1</span>]</span>;",
		"rightlines" : " <span class=\'token add\' > List</span> classpath =  <span class=\'token add\' > new ArrayList( <span class=\'token mv\' > dependencies</span>. <span class=\'token mv\' > size</span>() +  <span class=\'token mv\' > 1</span>)</span>;"
	},
	{
		"linetupleid" : 13994,
		"leftlines" : "throw new PluginContainerException(mojoDescriptor, pluginRealm,  <span class=\'token del\' > \"Unable to find the mojo \'\"</span> + mojoDescriptor.getGoal() +  <span class=\'token del\' > \"\' (or one of its required components) in the plugin \'\"</span> + pluginDescriptor.getId() + \"\'\", e);",
		"rightlines" : "throw new PluginContainerException(mojoDescriptor, pluginRealm,  <span class=\'token add\' > \"Unable to load the mojo \'\"</span> + mojoDescriptor.getGoal() +  <span class=\'token add\' > \"\' (or one of its required components) from the plugin \'\"</span> + pluginDescriptor.getId() + \"\'\", e);"
	},
	{
		"linetupleid" : 14002,
		"leftlines" : "super( <span class=\'token del\' > \"Plugin or one of its dependencies could not be resolved: \" +  <span class=\'token mv\' > e</span>.getMessage()</span>, e.getGroupId(), e.getArtifactId(), e.getVersion(), e.getType(), null, e.getRemoteRepositories(), null,  <span class=\'token del\' >  <span class=\'token mv\' > e</span>.getCause()</span>);",
		"rightlines" : "super(\"Plugin \" + plugin.getId() + \" or one of its dependencies could not be resolved: \" +  <span class=\'token add\' >  <span class=\'token mv\' > e</span></span>.getMessage(), e.getGroupId(), e.getArtifactId(), e.getVersion(), e.getType(), null, e.getRemoteRepositories(), null, e);"
	},
	{
		"linetupleid" : 12000,
		"leftlines" : "root = isPlugin ? mavenPluginArtifact :  <span class=\'token del\' > mavenRootArtifact</span>;",
		"rightlines" : "root = isPlugin ? mavenPluginArtifact :  <span class=\'token add\' > rootArtifact</span>;"
	},
	{
		"linetupleid" : 92137,
		"leftlines" : "pages = new Component[] { new TextPanel(\"app.readme\"), new TextPanel(\"app.license\"), chooseDirectory = new ChooseDirectory(), selectComponents = new SelectComponents(), progress = new SwingProgress(),  <span class=\'token del\' > new Complete()</span> };",
		"rightlines" : "pages = new Component[] { new TextPanel(installer.getProperty(\"app.readme\")), new TextPanel(installer.getProperty(\"app.license\")), chooseDirectory = new ChooseDirectory(), selectComponents = new SelectComponents(), progress = new SwingProgress(),  <span class=\'token add\' > new TextPanel(completedInfo)</span> };"
	},
	{
		"linetupleid" : 4789,
		"leftlines" : "String[] args = { \"descriptor\", sourceDirectory, outputDirectory, pom,  <span class=\'token del\' > repoLocal</span> };",
		"rightlines" : "String[] args = { \"descriptor\", sourceDirectory, outputDirectory, pom,  <span class=\'token add\' > localRepository.getBasedir()</span> };"
	},
	{
		"linetupleid" : 4797,
		"leftlines" : "String element =  <span class=\'token del\' > repoLocal + \"/\" +  <span class=\'token mv\' > d</span>.getRepositoryPath()</span>;",
		"rightlines" : "String element =  <span class=\'token add\' > localRepository.getArtifactFile( <span class=\'token mv\' > d</span>).getAbsolutePath()</span>;"
	},
	{
		"linetupleid" : 84534,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > dirty = newFile = readOnly = false</span></span>;",
		"rightlines" : " <span class=\'token add\' > adirty =  <span class=\'token mv\' > dirty = newFile = readOnly = false</span></span>;"
	},
	{
		"linetupleid" : 95824,
		"leftlines" : "if (desired.y < osbounds.y || desired.y + desired.height >  <span class=\'token del\' >  <span class=\'token mv\' > osbounds.height</span></span>) ",
		"rightlines" : "if (desired.y < osbounds.y || desired.y + desired.height >  <span class=\'token add\' > osbounds.y +  <span class=\'token mv\' > osbounds.height</span></span>) "
	},
	{
		"linetupleid" : 12012,
		"leftlines" : "List<ModelProperty> modelProperties =  <span class=\'token del\' >  <span class=\'token mv\' > dm</span></span>.getModelProperties();",
		"rightlines" : "List<ModelProperty> modelProperties = getModelProperties( <span class=\'token add\' >  <span class=\'token mv\' > dm</span>.getInputStream()</span>);"
	},
	{
		"linetupleid" : 70065,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > this._binding</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > ((AnnotationMirrorImpl) obj)._binding</span>)</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > this._binding</span>,  <span class=\'token mv\' > ((AnnotationMirrorImpl) obj)._binding</span>)</span></span>;"
	},
	{
		"linetupleid" : 98851,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 4822,
		"leftlines" : "Dependency d = (Dependency)  <span class=\'token del\' >  <span class=\'token del\' > dependencies.get( <span class=\'token mv\' > i</span>)</span></span>;",
		"rightlines" : "Dependency d = (Dependency)  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > i</span>.next()</span></span>;"
	},
	{
		"linetupleid" : 14023,
		"leftlines" : "exceptionMessage  <span class=\'token del\' > +=</span>  <span class=\'token del\' > \": \" +  <span class=\'token mv\' > longMessage</span></span>;",
		"rightlines" : "exceptionMessage  <span class=\'token add\' > =</span>  <span class=\'token add\' > join(exceptionMessage,  <span class=\'token mv\' > longMessage</span>)</span>;"
	},
	{
		"linetupleid" : 14026,
		"leftlines" : "out.print( <span class=\'token del\' >  <span class=\'token mv\' > complete</span> + \"/\"</span> +  <span class=\'token del\' > (total == -1 ? \"?\" : total +  <span class=\'token mv\' > \" B\"</span>)</span> + \"\\r\");",
		"rightlines" : "out.print( <span class=\'token add\' >  <span class=\'token mv\' > complete</span></span> +  <span class=\'token add\' >  <span class=\'token mv\' > \" B\"</span></span> + \"\\r\");"
	},
	{
		"linetupleid" : 95827,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 84605,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > token == Token.COMMENT1</span></span> && length - i  <span class=\'token del\' > >=</span> 1) ",
		"rightlines" : "if ( <span class=\'token add\' > ( <span class=\'token mv\' > token == Token.COMMENT1</span> || token == Token.COMMENT2)</span> && length - i  <span class=\'token add\' > ></span> 1) "
	},
	{
		"linetupleid" : 53189,
		"leftlines" : "initialization. <span class=\'token del\' > implicitWidening</span>(typeBinding, initializationType);",
		"rightlines" : "initialization. <span class=\'token add\' > computeConversion</span>( <span class=\'token add\' > scope</span>,  <span class=\'token add\' > variableType</span>, initializationType);"
	},
	{
		"linetupleid" : 53338,
		"leftlines" : "public MethodBinding(int modifiers, TypeBinding[]  <span class=\'token del\' > args</span>, ReferenceBinding[]  <span class=\'token del\' > exceptions</span>, ReferenceBinding declaringClass)",
		"rightlines" : "public MethodBinding(int modifiers, TypeBinding[]  <span class=\'token add\' > parameters</span>, ReferenceBinding[]  <span class=\'token add\' > thrownExceptions</span>, ReferenceBinding declaringClass)"
	},
	{
		"linetupleid" : 53380,
		"leftlines" : "for (int  <span class=\'token del\' > f</span> = fields.length;  <span class=\'token del\' > --f >= 0</span>; ) ",
		"rightlines" : "for (int  <span class=\'token add\' > i = 0</span>,  <span class=\'token add\' > length</span> = fields.length;  <span class=\'token add\' > i < length</span>;  <span class=\'token add\' > i++</span>) "
	},
	{
		"linetupleid" : 53388,
		"leftlines" : "for (int  <span class=\'token del\' > i = 0</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span> < m</span>;  <span class=\'token del\' > i++</span>) ",
		"rightlines" : "for (int  <span class=\'token add\' > j = length - 1</span>;  <span class=\'token add\' > j >  <span class=\'token mv\' > i</span></span>;  <span class=\'token add\' > j--</span>) "
	},
	{
		"linetupleid" : 53451,
		"leftlines" : "if (this. <span class=\'token del\' > binding</span>.returnType.isBaseType()) ",
		"rightlines" : "if (this. <span class=\'token add\' > codegenBinding</span>.returnType.isBaseType()) "
	},
	{
		"linetupleid" : 39491,
		"leftlines" : "while ( <span class=\'token del\' >  <span class=\'token mv\' > currentPosition > 0</span> || currentCharacter == \'\\r\' || currentCharacter == \'\\n\'</span>) ",
		"rightlines" : "while ( <span class=\'token add\' >  <span class=\'token mv\' > currentPosition > 0</span></span>) "
	},
	{
		"linetupleid" : 99539,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > wrap</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > \"hard\"</span>)</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"hard\"</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > wrap</span>)</span></span>) "
	},
	{
		"linetupleid" : 14056,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token mv\' > showErrors</span></span>) ",
		"rightlines" : "if (! <span class=\'token add\' > cliRequest. <span class=\'token mv\' > showErrors</span></span>) "
	},
	{
		"linetupleid" : 92277,
		"leftlines" : "lineInfo[ <span class=\'token del\' > startLine +  <span class=\'token mv\' > i</span></span>] &= ~(FOLD_LEVEL_VALID_MASK | CONTEXT_VALID_MASK);",
		"rightlines" : "lineInfo[ <span class=\'token add\' >  <span class=\'token mv\' > i</span></span>] &= ~(FOLD_LEVEL_VALID_MASK | CONTEXT_VALID_MASK);"
	},
	{
		"linetupleid" : 68486,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 70085,
		"leftlines" : "for (int  <span class=\'token del\' > i</span> = this.relativePaths.length;  <span class=\'token del\' > -- <span class=\'token mv\' > i</span> >= 0</span>; ) ",
		"rightlines" : "for (int  <span class=\'token add\' > i = 0</span>,  <span class=\'token add\' > length</span> = this.relativePaths.length;  <span class=\'token add\' >  <span class=\'token mv\' > i</span> < length</span>;  <span class=\'token add\' > i++</span>) "
	},
	{
		"linetupleid" : 84707,
		"leftlines" : "int  <span class=\'token del\' > lastIndex = Math.max(length, ( <span class=\'token mv\' > lineIndex</span> - 1) +  <span class=\'token mv\' > lines</span>)</span>;",
		"rightlines" : "int  <span class=\'token add\' > len =  <span class=\'token mv\' > lineIndex</span> +  <span class=\'token mv\' > lines</span></span>;"
	},
	{
		"linetupleid" : 14085,
		"leftlines" : "Map<Object, Plugin>  <span class=\'token del\' > merged</span> = new LinkedHashMap<Object, Plugin>( <span class=\'token del\' > (src. <span class=\'token mv\' > size</span>() +  <span class=\'token mv\' > tgt</span>. <span class=\'token mv\' > size</span>()) *  <span class=\'token mv\' > 2</span></span>);",
		"rightlines" : "Map<Object, Plugin>  <span class=\'token add\' > master</span> = new LinkedHashMap<Object, Plugin>( <span class=\'token add\' >  <span class=\'token mv\' > tgt</span>. <span class=\'token mv\' > size</span>() *  <span class=\'token mv\' > 2</span></span>);"
	},
	{
		"linetupleid" : 97729,
		"leftlines" : " catch ( <span class=\'token del\' > IOException io</span>) ",
		"rightlines" : " catch ( <span class=\'token add\' > Exception e</span>) "
	},
	{
		"linetupleid" : 15578,
		"leftlines" : "ModelData parentData = new ModelData(candidateModel, groupId, artifactId, version);",
		"rightlines" : "ModelData parentData = new ModelData( <span class=\'token add\' > candidateSource</span>, candidateModel, groupId, artifactId, version);"
	},
	{
		"linetupleid" : 2877,
		"leftlines" : "this.hashCode =  <span class=\'token del\' >  <span class=\'token del\' > MoreTypes. <span class=\'token mv\' > hashCode</span>( <span class=\'token mv\' > type</span>)</span></span>;",
		"rightlines" : "this.hashCode =  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > type</span>. <span class=\'token mv\' > hashCode</span>()</span></span>;"
	},
	{
		"linetupleid" : 9293,
		"leftlines" : " catch (ResourceDoesNotExistException  <span class=\'token del\' > md5TryException</span>) ",
		"rightlines" : " catch (ResourceDoesNotExistException  <span class=\'token add\' > sha1TryException</span>) "
	},
	{
		"linetupleid" : 6481,
		"leftlines" : "this.version = versionRange != null ?  <span class=\'token del\' >  <span class=\'token mv\' > versionRange.getRecommendedVersion()</span></span> : null;",
		"rightlines" : "this.version = versionRange != null ?  <span class=\'token add\' >  <span class=\'token mv\' > versionRange.getRecommendedVersion()</span>.toString()</span> : null;"
	},
	{
		"linetupleid" : 97741,
		"leftlines" : "return getBrackets( <span class=\'token del\' >  <span class=\'token mv\' > buffer</span>.getLineText(line)</span>).openCount;",
		"rightlines" : "return getBrackets( <span class=\'token add\' >  <span class=\'token mv\' > buffer</span></span>,  <span class=\'token add\' > line</span>).openCount;"
	},
	{
		"linetupleid" : 56060,
		"leftlines" : " <span class=\'token del\' > buffer</span>.append(this.findReferences ? \"LocalVarCombinedPattern: \" : \"LocalVarDeclarationPattern: \");",
		"rightlines" : " <span class=\'token add\' > output</span>.append(this.findReferences ? \"LocalVarCombinedPattern: \" : \"LocalVarDeclarationPattern: \");"
	},
	{
		"linetupleid" : 2915,
		"leftlines" : "if (! <span class=\'token del\' > inject. <span class=\'token mv\' > optional</span>()</span>) ",
		"rightlines" : "if (! <span class=\'token add\' >  <span class=\'token mv\' > optional</span></span>) "
	},
	{
		"linetupleid" : 2922,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > annotation.annotationType()</span>.isAnnotationPresent(ScopeAnnotation.class)</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' > Annotations.isScopeAnnotation( <span class=\'token mv\' > annotation.annotationType()</span>)</span></span>) "
	},
	{
		"linetupleid" : 38448,
		"leftlines" : "throw  <span class=\'token del\' >  <span class=\'token mv\' > new IncompleteClassPathException(missingClassFile)</span></span>;",
		"rightlines" : "throw  <span class=\'token add\' > new AbortCompilation(true,  <span class=\'token mv\' > new IncompleteClassPathException(missingClassFile)</span>)</span>;"
	},
	{
		"linetupleid" : 92304,
		"leftlines" : "for (; ; ) ",
		"rightlines" : "for ( <span class=\'token add\' > int counter = 0</span>; ;  <span class=\'token add\' > counter++</span>) "
	},
	{
		"linetupleid" : 2936,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token mv\' > optional</span></span>) ",
		"rightlines" : "if (! <span class=\'token add\' > injectableMember. <span class=\'token mv\' > optional</span></span>) "
	},
	{
		"linetupleid" : 38459,
		"leftlines" : "throw  <span class=\'token del\' > new AbortCompilation(true,  <span class=\'token mv\' > new IncompleteClassPathException(missingClassFile)</span>)</span>;",
		"rightlines" : "throw  <span class=\'token add\' >  <span class=\'token mv\' > new IncompleteClassPathException(missingClassFile)</span></span>;"
	},
	{
		"linetupleid" : 84983,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 71896,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > syntheticAccessors</span></span> == null) ",
		"rightlines" : "if ( <span class=\'token add\' > this. <span class=\'token mv\' > syntheticAccessors</span></span> == null) "
	},
	{
		"linetupleid" : 12145,
		"leftlines" : "return (List<String>)  <span class=\'token del\' >  <span class=\'token mv\' > lifecycle.getPhases()</span>.values()</span>;",
		"rightlines" : "return (List<String>)  <span class=\'token add\' >  <span class=\'token mv\' > lifecycle.getPhases()</span></span>;"
	},
	{
		"linetupleid" : 49829,
		"leftlines" : "switch( <span class=\'token del\' >  <span class=\'token mv\' > problemFieldBinding.problemId()</span> & IProblem.IgnoreCategoriesMask</span>)\n",
		"rightlines" : "switch( <span class=\'token add\' >  <span class=\'token mv\' > problemFieldBinding.problemId()</span></span>)\n"
	},
	{
		"linetupleid" : 67486,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > eclipse</span>. <span class=\'token mv\' > jdt</span>. <span class=\'token mv\' > internal</span>.core. <span class=\'token mv\' > util</span>. <span class=\'token mv\' > SimpleSet</span></span> interfacesSeen = new  <span class=\'token del\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > eclipse</span>. <span class=\'token mv\' > jdt</span>. <span class=\'token mv\' > internal</span>.core. <span class=\'token mv\' > util</span>. <span class=\'token mv\' > SimpleSet</span></span>(lastPosition * 2);",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > eclipse</span>. <span class=\'token mv\' > jdt</span>. <span class=\'token mv\' > internal</span>.compiler. <span class=\'token mv\' > util</span>. <span class=\'token mv\' > SimpleSet</span></span> interfacesSeen = new  <span class=\'token add\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > eclipse</span>. <span class=\'token mv\' > jdt</span>. <span class=\'token mv\' > internal</span>.compiler. <span class=\'token mv\' > util</span>. <span class=\'token mv\' > SimpleSet</span></span>(lastPosition * 2);"
	},
	{
		"linetupleid" : 14146,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > parent.getGroupId()</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > model.getGroupId()</span>)</span></span> &&  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > parent.getArtifactId()</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > model.getArtifactId()</span>)</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > parent.getGroupId()</span>,  <span class=\'token mv\' > model.getGroupId()</span>)</span></span> &&  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > parent.getArtifactId()</span>,  <span class=\'token mv\' > model.getArtifactId()</span>)</span></span>) "
	},
	{
		"linetupleid" : 60368,
		"leftlines" : "if ( <span class=\'token del\' > _factoryLoader</span> == null) ",
		"rightlines" : "if ( <span class=\'token add\' > LOADER</span> == null) "
	},
	{
		"linetupleid" : 67499,
		"leftlines" : " <span class=\'token del\' > a1</span> =  <span class=\'token del\' > this. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 2</span>][ <span class=\'token mv\' > i</span>] = (b1nb2 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 2</span>][ <span class=\'token mv\' > i</span>] & ~ <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 3</span>][ <span class=\'token mv\' > i</span>]) & (b3 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 4</span>][ <span class=\'token mv\' > i</span>]) & ~(b4 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[5][ <span class=\'token mv\' > i</span>])</span>;",
		"rightlines" : " <span class=\'token add\' > this.extra[2 + 1][i]</span> =  <span class=\'token add\' > (u1 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[1 + 1][ <span class=\'token mv\' > i</span>]) & (u2 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 2</span> + 1][ <span class=\'token mv\' > i</span>]) & (nu3 = ~(u3 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 3</span> + 1][ <span class=\'token mv\' > i</span>])) & (nu4 = ~(u4 =  <span class=\'token mv\' > upstream</span>. <span class=\'token mv\' > extra</span>[ <span class=\'token mv\' > 4</span> + 1][ <span class=\'token mv\' > i</span>]))</span>;"
	},
	{
		"linetupleid" : 2944,
		"leftlines" : "return expectedType.cast(Proxy.newProxyInstance(classLoader, new Class[] { expectedType }, invocationHandler));",
		"rightlines" : "return expectedType.cast(Proxy.newProxyInstance(classLoader, new Class[] { expectedType,  <span class=\'token add\' > CircularDependencyProxy.class</span> }, invocationHandler));"
	},
	{
		"linetupleid" : 2949,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > servletDefinitions</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > servletDefinitions</span>.toArray(new ServletDefinition[ <span class=\'token mv\' > servletDefinitions</span>.size()])</span>;"
	},
	{
		"linetupleid" : 2950,
		"leftlines" : "if (index <  <span class=\'token del\' >  <span class=\'token mv\' > filterDefinitions</span>.size()</span>) ",
		"rightlines" : "if (index <  <span class=\'token add\' >  <span class=\'token mv\' > filterDefinitions</span>.length</span>) "
	},
	{
		"linetupleid" : 45784,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 45822,
		"leftlines" : "report(typeDeclaration.sourceStart, typeDeclaration.sourceEnd, (parent == null) ? createTypeHandle(typeDeclaration.name) : ((parent instanceof IType) ?  <span class=\'token del\' > createTypeHandle(( <span class=\'token mv\' > IType</span>)  <span class=\'token mv\' > parent</span>,  <span class=\'token mv\' > typeDeclaration</span>. <span class=\'token mv\' > name</span>)</span> : parent), accuracy);",
		"rightlines" : "report(typeDeclaration.sourceStart, typeDeclaration.sourceEnd, (parent == null) ? createTypeHandle(typeDeclaration.name) : ((parent instanceof IType) ?  <span class=\'token add\' > (( <span class=\'token mv\' > IType</span>)  <span class=\'token mv\' > parent</span>).getType(new String( <span class=\'token mv\' > typeDeclaration</span>. <span class=\'token mv\' > name</span>))</span> : parent), accuracy);"
	},
	{
		"linetupleid" : 85063,
		"leftlines" : "setBuffer(bufferArray[ <span class=\'token del\' > 0</span>]);",
		"rightlines" : "setBuffer(bufferArray[ <span class=\'token add\' > bufferArray.length - 1</span>]);"
	},
	{
		"linetupleid" : 49870,
		"leftlines" : "this.newCodeFormatter = new CodeFormatterVisitor(this.preferences, options, offset, length);",
		"rightlines" : "this.newCodeFormatter = new CodeFormatterVisitor(this.preferences, options, offset, length,  <span class=\'token add\' > this.codeSnippetParsingUtil</span>);"
	},
	{
		"linetupleid" : 14236,
		"leftlines" : "if ( <span class=\'token del\' > repository.getAuthentication() != null &&  <span class=\'token mv\' > repository.getProxy() != null</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > repository.getProxy() != null</span></span>) "
	},
	{
		"linetupleid" : 95956,
		"leftlines" : "gfx.drawString(\":\", Math.max(x, textArea.getHorizontalOffset() +  <span class=\'token del\' >  <span class=\'token mv\' > textArea</span>.getDisplayManager()</span>.wrapMargin + textArea.charWidth), baseLine);",
		"rightlines" : "gfx.drawString(\":\", Math.max(x,  <span class=\'token add\' >  <span class=\'token mv\' > textArea</span></span>.getHorizontalOffset() + textArea.wrapMargin + textArea.charWidth), baseLine);"
	},
	{
		"linetupleid" : 2997,
		"leftlines" : "synchronized ( <span class=\'token del\' > InjectorBuilderImpl.class</span>) ",
		"rightlines" : "synchronized ( <span class=\'token add\' > InternalInjectorCreator.class</span>) "
	},
	{
		"linetupleid" : 3008,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > jitDisabled</span></span> && jitType == JitLimitation.NO_JIT && !isProvider(key)) ",
		"rightlines" : "if ( <span class=\'token add\' > options. <span class=\'token mv\' > jitDisabled</span></span> && jitType == JitLimitation.NO_JIT && !isProvider(key)) "
	},
	{
		"linetupleid" : 3011,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > parent</span></span> != null && !parent.jitDisabled) ",
		"rightlines" : "if (parent != null && ! <span class=\'token add\' >  <span class=\'token mv\' > parent</span>.options</span>.jitDisabled) "
	},
	{
		"linetupleid" : 45831,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > ICompilationUnit</span>[]</span>  <span class=\'token del\' > compilationUnits</span>;",
		"rightlines" : " <span class=\'token add\' > org.eclipse.jdt.core. <span class=\'token mv\' > ICompilationUnit</span>[]</span>  <span class=\'token add\' > closedCUs</span>;"
	},
	{
		"linetupleid" : 11012,
		"leftlines" : "String groupId =  <span class=\'token del\' > ( <span class=\'token mv\' > model</span>. <span class=\'token mv\' > getGroupId</span>() == null)</span> ? model.getParent().getGroupId() : model.getGroupId();",
		"rightlines" : "String groupId =  <span class=\'token add\' > ( <span class=\'token mv\' > model</span>. <span class=\'token mv\' > getGroupId</span>() == null &&  <span class=\'token mv\' > model</span>.getParent() != null)</span> ? model.getParent().getGroupId() : model.getGroupId();"
	},
	{
		"linetupleid" : 11016,
		"leftlines" : "if (domainModels.indexOf(domainModel) > 0 && ( <span class=\'token del\' >  <span class=\'token mv\' > uri.equals(ProjectUri.name) || uri.equals(ProjectUri.packaging) || uri.startsWith(ProjectUri.Profiles.xUri)</span> || uri.startsWith(ProjectUri.Build.Resources.xUri) || uri.startsWith(ProjectUri.Build.TestResources.xUri) || uri.startsWith(ProjectUri.PluginRepositories.xUri)</span>)) ",
		"rightlines" : "if (domainModels.indexOf(domainModel) > 0 && ( <span class=\'token add\' >  <span class=\'token mv\' > uri.equals(ProjectUri.name) || uri.equals(ProjectUri.packaging) || uri.startsWith(ProjectUri.Profiles.xUri)</span></span>)) "
	},
	{
		"linetupleid" : 85105,
		"leftlines" : "modeNames[ <span class=\'token del\' >  <span class=\'token mv\' > i</span></span>] = jEdit.getModeName(modes[i]);",
		"rightlines" : "modeNames[ <span class=\'token add\' >  <span class=\'token mv\' > i</span> + 1</span>] = jEdit.getModeName(modes[i]);"
	},
	{
		"linetupleid" : 12180,
		"leftlines" : "for (MojoDescriptor  <span class=\'token del\' > md</span> : lifecyclePlan) ",
		"rightlines" : "for (MojoDescriptor  <span class=\'token add\' > mojoDescriptor</span> : lifecyclePlan) "
	},
	{
		"linetupleid" : 12198,
		"leftlines" : "MavenExecutionRequest request = new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setUseReactor(useReactor).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates).setGlobalChecksumPolicy(globalChecksumPolicy). <span class=\'token del\' > setUserToolchainsFile</span>( <span class=\'token del\' > userToolchainsFile</span>);",
		"rightlines" : "MavenExecutionRequest request = new DefaultMavenExecutionRequest().setBaseDirectory(baseDirectory).setGoals(goals).setProperties(executionProperties).setUserProperties(userProperties).setReactorFailureBehavior(reactorFailureBehaviour).setRecursive(recursive).setShowErrors(showErrors).setInteractiveMode(interactive).setOffline(offline).setUsePluginUpdateOverride(pluginUpdateOverride).addActiveProfiles(activeProfiles).addInactiveProfiles(inactiveProfiles).setLoggingLevel(loggingLevel).setTransferListener(transferListener).setUpdateSnapshots(updateSnapshots).setNoSnapshotUpdates(noSnapshotUpdates). <span class=\'token add\' > setGlobalChecksumPolicy</span>( <span class=\'token add\' > globalChecksumPolicy</span>);"
	},
	{
		"linetupleid" : 98942,
		"leftlines" : "Collections.sort(styleChoices, new  <span class=\'token del\' >  <span class=\'token mv\' > StandardUtilities</span>. <span class=\'token mv\' > StringCompare</span></span>(true));",
		"rightlines" : "Collections.sort(styleChoices, new  <span class=\'token add\' >  <span class=\'token mv\' > StandardUtilities</span>. <span class=\'token mv\' > StringCompare</span><StyleChoice></span>(true));"
	},
	{
		"linetupleid" : 3019,
		"leftlines" : "return factoryRawType.cast(Proxy.newProxyInstance( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > factoryRawType</span>. <span class=\'token mv\' > getClassLoader</span>()</span></span>, new Class[] { factoryRawType }, invocationHandler));",
		"rightlines" : "return factoryRawType.cast(Proxy.newProxyInstance( <span class=\'token add\' >  <span class=\'token add\' > BytecodeGen. <span class=\'token mv\' > getClassLoader</span>( <span class=\'token mv\' > factoryRawType</span>)</span></span>, new Class[] { factoryRawType }, invocationHandler));"
	},
	{
		"linetupleid" : 6570,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > expression</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > \"project\"</span>)</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"project\"</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > expression</span>)</span></span>) "
	},
	{
		"linetupleid" : 3025,
		"leftlines" : "return;",
		"rightlines" : "return  <span class=\'token add\' > false</span>;"
	},
	{
		"linetupleid" : 98965,
		"leftlines" : "return  <span class=\'token del\' > ( <span class=\'token mv\' > index >= 0 && index < members.size()</span>)</span> ? members. <span class=\'token del\' > elementAt</span>(index) : null;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > index >= 0 && index < members.size()</span></span> ? members. <span class=\'token add\' > get</span>(index) : null;"
	},
	{
		"linetupleid" : 96019,
		"leftlines" : "selection. <span class=\'token del\' > insertElementAt</span>( <span class=\'token del\' > addMe</span>,  <span class=\'token del\' > i</span>);",
		"rightlines" : "selection. <span class=\'token add\' > add</span>( <span class=\'token add\' > i</span>,  <span class=\'token add\' > addMe</span>);"
	},
	{
		"linetupleid" : 96022,
		"leftlines" : "Selection s = (Selection)  <span class=\'token del\' > selection.elementAt(i)</span>;",
		"rightlines" : "Selection s = (Selection)  <span class=\'token add\' > iter.next()</span>;"
	},
	{
		"linetupleid" : 56369,
		"leftlines" : "definiteNulls  <span class=\'token del\' > |=</span>  <span class=\'token del\' >  <span class=\'token mv\' > otherInits.definiteNulls</span></span>;",
		"rightlines" : "definiteNulls  <span class=\'token add\' > =</span>  <span class=\'token add\' > (definiteNulls |  <span class=\'token mv\' > otherInits.definiteNulls</span>) & ~otherInits.definiteNonNulls</span>;"
	},
	{
		"linetupleid" : 56376,
		"leftlines" : "extraDefiniteNonNulls[ <span class=\'token del\' >  <span class=\'token mv\' > i</span>++</span>] = 0;",
		"rightlines" : "extraDefiniteNonNulls[ <span class=\'token add\' >  <span class=\'token mv\' > i</span></span>] = 0;"
	},
	{
		"linetupleid" : 15823,
		"leftlines" : " catch ( <span class=\'token del\' >  <span class=\'token mv\' > org</span>.sonatype. <span class=\'token mv\' > aether</span>. <span class=\'token mv\' > resolution</span>. <span class=\'token mv\' > ArtifactResolutionException</span></span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' >  <span class=\'token mv\' > org</span>.eclipse. <span class=\'token mv\' > aether</span>. <span class=\'token mv\' > resolution</span>. <span class=\'token mv\' > ArtifactResolutionException</span></span> e) "
	},
	{
		"linetupleid" : 15824,
		"leftlines" : "if (e.getCause() instanceof  <span class=\'token del\' >  <span class=\'token mv\' > org</span>.sonatype. <span class=\'token mv\' > aether</span>. <span class=\'token mv\' > transfer</span>. <span class=\'token mv\' > ArtifactNotFoundException</span></span>) ",
		"rightlines" : "if (e.getCause() instanceof  <span class=\'token add\' >  <span class=\'token mv\' > org</span>.eclipse. <span class=\'token mv\' > aether</span>. <span class=\'token mv\' > transfer</span>. <span class=\'token mv\' > ArtifactNotFoundException</span></span>) "
	},
	{
		"linetupleid" : 92396,
		"leftlines" : "method = FileSystemView.class.getMethod(\"getSystemDisplayName\", new Class[0]);",
		"rightlines" : "method = FileSystemView.class.getMethod(\"getSystemDisplayName\", new Class[]  <span class=\'token add\' > { java.io.File.class }</span>);"
	},
	{
		"linetupleid" : 96117,
		"leftlines" : "String matchAgainst = (MiscUtilities.isAbsolutePath(str) ?  <span class=\'token del\' >  <span class=\'token mv\' > entry</span>. <span class=\'token mv\' > dirEntry</span>.path</span> :  <span class=\'token del\' >  <span class=\'token mv\' > entry</span>. <span class=\'token mv\' > dirEntry</span>.name</span>);",
		"rightlines" : "String matchAgainst = (MiscUtilities.isAbsolutePath(str) ?  <span class=\'token add\' >  <span class=\'token mv\' > entry</span>. <span class=\'token mv\' > dirEntry</span>.getPath()</span> :  <span class=\'token add\' >  <span class=\'token mv\' > entry</span>. <span class=\'token mv\' > dirEntry</span>.getName()</span>);"
	},
	{
		"linetupleid" : 9390,
		"leftlines" : " <span class=\'token del\' > Wagon wagon;</span>",
		"rightlines" : " <span class=\'token add\' > PlexusContainer container = getWagonContainer(protocol);</span>"
	},
	{
		"linetupleid" : 9392,
		"leftlines" : "throw new UnsupportedProtocolException(\"Cannot find wagon which supports the requested protocol: \" + protocol,  <span class=\'token del\' > e</span>);",
		"rightlines" : "throw new UnsupportedProtocolException(\"Cannot find wagon which supports the requested protocol: \" + protocol,  <span class=\'token add\' > e1</span>);"
	},
	{
		"linetupleid" : 58431,
		"leftlines" : "return JavaCore.newContainerEntry(entry.getPath(), entry. <span class=\'token del\' > getAccessibleFiles</span>(), entry.getNonAccessibleFiles(), entry.getExtraAttributes(), entry.isExported());",
		"rightlines" : "return JavaCore.newContainerEntry(entry.getPath(), entry. <span class=\'token add\' > getAccessRules</span>(), entry.getExtraAttributes(), entry.isExported());"
	},
	{
		"linetupleid" : 85219,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 38564,
		"leftlines" : "while ( <span class=\'token del\' > !( <span class=\'token mv\' > currentNode</span> instanceof  <span class=\'token mv\' > MethodDeclaration</span>) && !( <span class=\'token mv\' > currentNode</span> instanceof  <span class=\'token mv\' > Initializer</span>) && !( <span class=\'token mv\' > currentNode</span> instanceof  <span class=\'token mv\' > FieldDeclaration</span>)</span>) ",
		"rightlines" : "while ( <span class=\'token add\' >  <span class=\'token mv\' > currentNode</span> != null && !( <span class=\'token mv\' > currentNode</span> instanceof  <span class=\'token mv\' > MethodDeclaration</span>) && !( <span class=\'token mv\' > currentNode</span> instanceof  <span class=\'token mv\' > Initializer</span>) && !( <span class=\'token mv\' > currentNode</span> instanceof  <span class=\'token mv\' > FieldDeclaration</span>)</span>) "
	},
	{
		"linetupleid" : 60443,
		"leftlines" : "return new ProblemFieldBinding( <span class=\'token del\' > ( <span class=\'token mv\' > (FieldBinding) binding</span>).declaringClass</span>, CharOperation.subarray(compoundName, 0, currentIndex), binding.problemId());",
		"rightlines" : "return new ProblemFieldBinding( <span class=\'token add\' >  <span class=\'token mv\' > (FieldBinding) binding</span></span>, CharOperation.subarray(compoundName, 0, currentIndex), binding.problemId());"
	},
	{
		"linetupleid" : 4904,
		"leftlines" : "artifactFilter = new ExclusionSetFilter(new String[] { \"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin\", \"plexus-container-default\", \"plexus-artifact-container\", \"wagon-provider-api\", \"classworlds\" });",
		"rightlines" : "artifactFilter = new ExclusionSetFilter(new String[] { \"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\",  <span class=\'token add\' > \"maven-plugin-api\"</span>,  <span class=\'token add\' > \"maven-plugin-descriptor\"</span>, \"plexus-container-default\", \"plexus-artifact-container\", \"wagon-provider-api\", \"classworlds\" });"
	},
	{
		"linetupleid" : 12271,
		"leftlines" : "throw new  <span class=\'token del\' > BuildFailureException</span>(\"\\n\\nYou must specify at least one goal. Try \'mvn install\' to build or \'mvn --help\' for options \\nSee http://maven.apache.org for more information.\\n\\n\");",
		"rightlines" : "throw new  <span class=\'token add\' > LifecycleExecutionException</span>(\"\\n\\nYou must specify at least one goal. Try \'mvn install\' to build or \'mvn --help\' for options \\nSee http://maven.apache.org for more information.\\n\\n\");"
	},
	{
		"linetupleid" : 38626,
		"leftlines" : "if ( <span class=\'token del\' > fContents</span> == null) ",
		"rightlines" : "if ( <span class=\'token add\' > this.contents</span> == null) "
	},
	{
		"linetupleid" : 63801,
		"leftlines" : "if (expression.resolvedType !=  <span class=\'token del\' > NullBinding</span>) ",
		"rightlines" : "if (expression.resolvedType !=  <span class=\'token add\' > TypeBinding.NULL</span>) "
	},
	{
		"linetupleid" : 14269,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token mv\' > rangeValue</span>.isClosed()</span>) ",
		"rightlines" : "if (! <span class=\'token add\' >  <span class=\'token mv\' > rangeValue</span>.closed</span>) "
	},
	{
		"linetupleid" : 97837,
		"leftlines" : "for (String  <span class=\'token del\' > encoding</span> : encodings) ",
		"rightlines" : "for (String  <span class=\'token add\' > encodstr</span> : encodings) "
	},
	{
		"linetupleid" : 64559,
		"leftlines" : "for (int i =  <span class=\'token del\' > 0</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span> < length</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span>++</span>) ",
		"rightlines" : "for (int i =  <span class=\'token add\' > length - 1</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span> >= 0</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span>--</span>) "
	},
	{
		"linetupleid" : 97849,
		"leftlines" : "return  <span class=\'token del\' > ( <span class=\'token mv\' > parent</span>. <span class=\'token mv\' > canWrite</span>())</span> ? super.getTwoStageSaveName(path) : null;",
		"rightlines" : "return  <span class=\'token add\' > ( <span class=\'token mv\' > parent</span>. <span class=\'token mv\' > canWrite</span>() || OperatingSystem.isWindows())</span> ? super.getTwoStageSaveName(path) : null;"
	},
	{
		"linetupleid" : 14280,
		"leftlines" : "projectRealm =  <span class=\'token del\' > container.getContainerRealm()</span>;",
		"rightlines" : "projectRealm =  <span class=\'token add\' > classRealmManager.getCoreRealm()</span>;"
	},
	{
		"linetupleid" : 3701,
		"leftlines" : "if (destinationFile.exists() &&  <span class=\'token del\' > ! <span class=\'token mv\' > file</span>.endsWith( <span class=\'token mv\' > SNAPSHOT_SIGNATURE</span>)</span>) ",
		"rightlines" : "if (destinationFile.exists() &&  <span class=\'token add\' >  <span class=\'token mv\' > file</span>.indexOf( <span class=\'token mv\' > SNAPSHOT_SIGNATURE</span>) < 0</span>) "
	},
	{
		"linetupleid" : 6677,
		"leftlines" : "super(artifact, artifact.getArtifactId() + \"-\" +  <span class=\'token del\' > LatestArtifactTransformation</span>.LATEST_VERSION + \".\" + SNAPSHOT_VERSION_FILE);",
		"rightlines" : "super(artifact, artifact.getArtifactId() + \"-\" +  <span class=\'token add\' > Artifact</span>.LATEST_VERSION + \".\" + SNAPSHOT_VERSION_FILE);"
	},
	{
		"linetupleid" : 6708,
		"leftlines" : "options.addOption( <span class=\'token del\' > OptionBuilder.withLongOpt( <span class=\'token mv\' > FORCE_PLUGIN_UPDATES</span>).withDescription(\"Force upToDate check for any relevant registered plugins\")</span>.create(\"cpu\"));",
		"rightlines" : "options.addOption( <span class=\'token add\' > OptionBuilder.withLongOpt(\"check-plugin-updates\").withDescription(\"Force upToDate check for any relevant registered plugins\")</span>.create( <span class=\'token add\' >  <span class=\'token mv\' > FORCE_PLUGIN_UPDATES</span></span>));"
	},
	{
		"linetupleid" : 14308,
		"leftlines" : "Field[] fields;",
		"rightlines" : "Field[] fields =  <span class=\'token add\' > fieldsByClass.get(cls)</span>;"
	},
	{
		"linetupleid" : 85481,
		"leftlines" : "return getClass().getName() + \"[listener=\" + listener + (next == null ? \"]\" :  <span class=\'token del\' >  <span class=\'token mv\' > next.toString()</span></span>);",
		"rightlines" : "return getClass().getName() + \"[listener=\" + listener + (next == null ? \"]\" :  <span class=\'token add\' > \"]\\n\" +  <span class=\'token mv\' > next.toString()</span></span>);"
	},
	{
		"linetupleid" : 15921,
		"leftlines" : " <span class=\'token del\' > case ERROR:\n</span>",
		"rightlines" : " <span class=\'token add\' > default:\n</span>"
	},
	{
		"linetupleid" : 12320,
		"leftlines" : "this.interpolatorProperties = (interpolatorProperties != null) ? interpolatorProperties :  <span class=\'token del\' > new ArrayList<InterpolatorProperty>()</span>;",
		"rightlines" : "this.interpolatorProperties = (interpolatorProperties != null) ? interpolatorProperties :  <span class=\'token add\' > new Properties()</span>;"
	},
	{
		"linetupleid" : 85502,
		"leftlines" : "return  <span class=\'token del\' > null</span>;",
		"rightlines" : "return  <span class=\'token add\' > getSystemResourceAsStream(name)</span>;"
	},
	{
		"linetupleid" : 3081,
		"leftlines" : "if (annotation instanceof  <span class=\'token del\' > NumResults</span>) ",
		"rightlines" : "if (annotation instanceof  <span class=\'token add\' > MaxResults</span>) "
	},
	{
		"linetupleid" : 3084,
		"leftlines" : "if ( <span class=\'token del\' > NumResults.class</span>.equals(annotationType)) ",
		"rightlines" : "if ( <span class=\'token add\' > MaxResults.class</span>.equals(annotationType)) "
	},
	{
		"linetupleid" : 3095,
		"leftlines" : "bind(EntityManagerFactory.class).toProvider( <span class=\'token del\' > EntityManagerProvider. <span class=\'token mv\' > EntityManagerFactoryProvider</span></span>.class);",
		"rightlines" : "bind(EntityManagerFactory.class).toProvider( <span class=\'token add\' > JpaPersistService. <span class=\'token mv\' > EntityManagerFactoryProvider</span></span>.class);"
	},
	{
		"linetupleid" : 3114,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > a.annotationType().getAnnotation(javax.inject.Qualifier.class) == null</span> && a.annotationType().getAnnotation(com.google.inject.BindingAnnotation.class) == null</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > a.annotationType().getAnnotation(javax.inject.Qualifier.class) == null</span></span>) "
	},
	{
		"linetupleid" : 60613,
		"leftlines" : "if ( <span class=\'token del\' > entry.getValue()</span> != null) ",
		"rightlines" : "if ( <span class=\'token add\' > value</span> != null) "
	},
	{
		"linetupleid" : 85519,
		"leftlines" : "switch( <span class=\'token del\' >  <span class=\'token mv\' > keyStroke.charAt(i)</span></span>)\n",
		"rightlines" : "switch( <span class=\'token add\' > Character.toUpperCase( <span class=\'token mv\' > keyStroke.charAt(i)</span>)</span>)\n"
	},
	{
		"linetupleid" : 46105,
		"leftlines" : "void updateSeverity(long irritant,  <span class=\'token del\' > String</span> severityString)",
		"rightlines" : "void updateSeverity(long irritant,  <span class=\'token add\' > Object</span> severityString)"
	},
	{
		"linetupleid" : 92581,
		"leftlines" : "int searchLimit = (terminateChar >= 0 && terminateChar < line.count) ?  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > line.offset</span> +  <span class=\'token mv\' > terminateChar</span></span></span> :  <span class=\'token del\' > lineLength</span>;",
		"rightlines" : "int searchLimit = (terminateChar >= 0 && terminateChar < line.count) ?  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > terminateChar</span> +  <span class=\'token mv\' > line.offset</span></span></span> :  <span class=\'token add\' > line.count + line.offset</span>;"
	},
	{
		"linetupleid" : 41835,
		"leftlines" : "this.categories = new int[] { 1, 2, 3,  <span class=\'token del\' > 4</span>,  <span class=\'token del\' > 5</span>,  <span class=\'token del\' > 6</span>,  <span class=\'token del\' > 7</span>, 8, 9 };",
		"rightlines" : "this.categories = new int[] { 1, 2, 3,  <span class=\'token add\' > 7</span>,  <span class=\'token add\' > 6</span>,  <span class=\'token add\' > 4</span>,  <span class=\'token add\' > 5</span>, 8, 9 };"
	},
	{
		"linetupleid" : 60641,
		"leftlines" : "return  <span class=\'token del\' > (DeclaredType)  <span class=\'token mv\' > Factory.createReferenceType(outer, _env)</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > Factory.createReferenceType(outer, _env)</span></span>;"
	},
	{
		"linetupleid" : 4999,
		"leftlines" : " catch ( <span class=\'token del\' > Exception</span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' > FileNotFoundException</span> e) "
	},
	{
		"linetupleid" : 85561,
		"leftlines" : "int index =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > line</span>.lastIndexOf( <span class=\'token mv\' > word</span>)</span></span>;",
		"rightlines" : "int index =  <span class=\'token add\' >  <span class=\'token add\' > getIndexOfWord( <span class=\'token mv\' > line</span>,  <span class=\'token mv\' > word</span>, separators)</span></span>;"
	},
	{
		"linetupleid" : 92658,
		"leftlines" : "int lastLine =  <span class=\'token del\' > (scrollPosition + getHeight() - 30 - fm.getHeight() * 2) /  <span class=\'token mv\' > height</span></span>;",
		"rightlines" : "int lastLine =  <span class=\'token add\' > (scrollPosition + getHeight() - TOP - BOTTOM) /  <span class=\'token mv\' > height</span> - 1</span>;"
	},
	{
		"linetupleid" : 92680,
		"leftlines" : "case  <span class=\'token del\' >  <span class=\'token mv\' > SPAN</span></span>:\n",
		"rightlines" : "case  <span class=\'token add\' > ParserRule. <span class=\'token mv\' > SPAN</span></span>:\n"
	},
	{
		"linetupleid" : 92704,
		"leftlines" : "int ruleAction =  <span class=\'token del\' > TokenMarker. <span class=\'token mv\' > MARK_PREVIOUS</span></span> | ((atLineStart) ?  <span class=\'token del\' > TokenMarker. <span class=\'token mv\' > AT_LINE_START</span></span> : 0) | ((excludeMatch) ?  <span class=\'token del\' > TokenMarker. <span class=\'token mv\' > EXCLUDE_MATCH</span></span> : 0);",
		"rightlines" : "int ruleAction =  <span class=\'token add\' >  <span class=\'token mv\' > MARK_PREVIOUS</span></span> | ((atLineStart) ?  <span class=\'token add\' >  <span class=\'token mv\' > AT_LINE_START</span></span> : 0) | ((excludeMatch) ?  <span class=\'token add\' >  <span class=\'token mv\' > EXCLUDE_MATCH</span></span> : 0);"
	},
	{
		"linetupleid" : 85574,
		"leftlines" : "Object[] args = { ( <span class=\'token del\' >  <span class=\'token mv\' > showFullPath</span></span> ? buffer.getPath() : buffer.getName()), new Integer(buffer.isReadOnly() ? 1 : 0), new Integer(buffer.isDirty() ? 1 : 0) };",
		"rightlines" : "Object[] args = { ( <span class=\'token add\' > ( <span class=\'token mv\' > showFullPath</span> && !buffer.isNewFile())</span> ? buffer.getPath() : buffer.getName()), new Integer(buffer.isReadOnly() ? 1 : 0), new Integer(buffer.isDirty() ? 1 : 0) };"
	},
	{
		"linetupleid" : 92724,
		"leftlines" : "tokenHandler.handleToken( <span class=\'token del\' >  <span class=\'token del\' > pos -  <span class=\'token mv\' > lastOffset</span></span></span>, context.rules.getDefault(), context);",
		"rightlines" : "tokenHandler.handleToken(context.rules.getDefault(),  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > lastOffset</span> - line.offset</span></span>,  <span class=\'token add\' > len</span>, context);"
	},
	{
		"linetupleid" : 11134,
		"leftlines" : "if (! <span class=\'token del\' > siteUrlProperty.getResolvedValue()</span>.endsWith( <span class=\'token del\' > \"}\"</span>)) ",
		"rightlines" : "if (! <span class=\'token add\' > siteUrl.toString()</span>.endsWith( <span class=\'token add\' > \"/\"</span>)) "
	},
	{
		"linetupleid" : 41856,
		"leftlines" : "marker.setAttributes(new String[] { IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER,  <span class=\'token del\' > \"readOnly\"</span> }, new Object[] { task.getMessage(), new Integer(priority), new Boolean(false), new Integer(task.getSourceStart()), new Integer(task.getSourceEnd() + 1), new Integer(task.getSourceLineNumber()), new Boolean(true) });",
		"rightlines" : "marker.setAttributes(new String[] { IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER,  <span class=\'token add\' > \"userEditable\"</span> }, new Object[] { task.getMessage(), new Integer(priority), new Boolean(false), new Integer(task.getSourceStart()), new Integer(task.getSourceEnd() + 1), new Integer(task.getSourceLineNumber()), new Boolean(false) });"
	},
	{
		"linetupleid" : 56521,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > (this.flags & LOCAL_TYPE) != 0</span> && sourceType instanceof SourceTypeElementInfo</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > (this.flags & LOCAL_TYPE) != 0</span></span>) "
	},
	{
		"linetupleid" : 50660,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > optionalQualifier</span></span>;",
		"rightlines" : "return  <span class=\'token add\' > this. <span class=\'token mv\' > optionalQualifier</span></span>;"
	},
	{
		"linetupleid" : 97865,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > dataFlavor.getPrimaryType()</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > \"text\"</span>)</span></span> &&  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > dataFlavor.getSubType()</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > \"uri-list\"</span>)</span></span> &&  <span class=\'token del\' > ( <span class=\'token mv\' > dataFlavor.getRepresentationClass() == String.class</span>)</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"text\"</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > dataFlavor.getPrimaryType()</span>)</span></span> &&  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"uri-list\"</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > dataFlavor.getSubType()</span>)</span></span> &&  <span class=\'token add\' >  <span class=\'token mv\' > dataFlavor.getRepresentationClass() == String.class</span></span>) "
	},
	{
		"linetupleid" : 16063,
		"leftlines" : "if ((inherited != null) && ! <span class=\'token del\' >  <span class=\'token mv\' > Boolean.valueOf(inherited)</span>.booleanValue()</span>) ",
		"rightlines" : "if ((inherited != null) && ! <span class=\'token add\' >  <span class=\'token mv\' > Boolean.valueOf(inherited)</span></span>) "
	},
	{
		"linetupleid" : 99106,
		"leftlines" : "return  <span class=\'token del\' > (String)  <span class=\'token mv\' > stateStack.pop()</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > stateStack.pop()</span></span>;"
	},
	{
		"linetupleid" : 58570,
		"leftlines" : "marker.setAttributes(new String[] { IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, IMarker.USER_EDITABLE }, new Object[] { task.getMessage(),  <span class=\'token del\' > new Integer( <span class=\'token mv\' > priority</span>)</span>, org.eclipse.jdt.internal.compiler.util.Util.toBoolean(false), new Integer(task.getSourceStart()), new Integer(task.getSourceEnd() + 1), new Integer(task.getSourceLineNumber()), new Boolean(false) });",
		"rightlines" : "marker.setAttributes(JAVA_PROBLEM_MARKER_ATTRIBUTE_NAMES, new Object[] { task.getMessage(),  <span class=\'token add\' >  <span class=\'token mv\' > priority</span></span>, org.eclipse.jdt.internal.compiler.util.Util.toBoolean(false), new Integer(task.getSourceStart()), new Integer(task.getSourceEnd() + 1), new Integer(task.getSourceLineNumber()), Boolean.FALSE });"
	},
	{
		"linetupleid" : 60711,
		"leftlines" : "this( <span class=\'token del\' > new ZipFile( <span class=\'token mv\' > file</span>)</span>, true, null);",
		"rightlines" : "this( <span class=\'token add\' >  <span class=\'token mv\' > file</span></span>, true, null);"
	},
	{
		"linetupleid" : 16080,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > sb</span></span>.append( <span class=\'token del\' > LS +  <span class=\'token mv\' > \"  \"</span></span>);",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > sb</span>.append(LS)</span>.append( <span class=\'token add\' >  <span class=\'token mv\' > \"  \"</span></span>);"
	},
	{
		"linetupleid" : 60716,
		"leftlines" : "int length = val.length;",
		"rightlines" : " <span class=\'token add\' > final</span> int length = val.length;"
	},
	{
		"linetupleid" : 85637,
		"leftlines" : "switch( <span class=\'token del\' > line. <span class=\'token mv\' > array</span>[i + 1]</span>)\n",
		"rightlines" : "switch( <span class=\'token add\' >  <span class=\'token mv\' > array</span>[i1]</span>)\n"
	},
	{
		"linetupleid" : 85678,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 99108,
		"leftlines" : "String lineSep = buffer.getStringProperty( <span class=\'token del\' > \"lineSeparator\"</span>);",
		"rightlines" : "String lineSep = buffer.getStringProperty( <span class=\'token add\' > JEditBuffer.LINESEP</span>);"
	},
	{
		"linetupleid" : 5034,
		"leftlines" : " <span class=\'token del\' > super(cause);</span>",
		"rightlines" : " <span class=\'token add\' > this(message, artifact.getGroupId(), artifact.getArtifactId(), artifact.getVersion(), artifact.getType(), t);</span>"
	},
	{
		"linetupleid" : 14370,
		"leftlines" : "addViolation(problems, errOn30,  <span class=\'token del\' > \"\'\" + prefix + \".(groupId:artifactId:type:classifier)\' must be unique: \"</span> + key + \" -> \" + msg);",
		"rightlines" : "addViolation(problems, errOn30,  <span class=\'token add\' > prefix + \".(groupId:artifactId:type:classifier)\"</span>,  <span class=\'token add\' > null</span>,  <span class=\'token add\' > \"must be unique: \"</span> + key + \" -> \" + msg);"
	},
	{
		"linetupleid" : 12374,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > List</span><MojoExecution></span>  <span class=\'token del\' > lifecyclePlan</span> = new  <span class=\'token del\' >  <span class=\'token mv\' > ArrayList</span><MojoExecution></span>();",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > List</span><String></span>  <span class=\'token add\' > phasesWithMojosToExecute</span> = new  <span class=\'token add\' >  <span class=\'token mv\' > ArrayList</span><String></span>();"
	},
	{
		"linetupleid" : 64685,
		"leftlines" : "return  <span class=\'token del\' > org.eclipse.jdt.internal.compiler.util. <span class=\'token mv\' > Util</span>.getFileCharContent(getLocation().toFile(), getEncoding())</span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > Util</span>.getResourceContentsAsCharArray(getFile())</span>;"
	},
	{
		"linetupleid" : 99610,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > f.getFamily()</span>. <span class=\'token mv\' > equalsIgnoreCase</span>( <span class=\'token mv\' > \"dialog\"</span>)</span></span> ||  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > family</span>. <span class=\'token mv\' > equalsIgnoreCase</span>( <span class=\'token mv\' > \"dialog\"</span>)</span></span>) ",
		"rightlines" : "if (! <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"dialog\"</span>. <span class=\'token mv\' > equalsIgnoreCase</span>( <span class=\'token mv\' > f.getFamily()</span>)</span></span> ||  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"dialog\"</span>. <span class=\'token mv\' > equalsIgnoreCase</span>( <span class=\'token mv\' > family</span>)</span></span>) "
	},
	{
		"linetupleid" : 12376,
		"leftlines" : "for (; ;  <span class=\'token del\' > xmlStreamReader. <span class=\'token mv\' > next</span>()</span>) ",
		"rightlines" : "for ( <span class=\'token add\' > int type = parser.getEventType()</span>; ;  <span class=\'token add\' > type = parser. <span class=\'token mv\' > next</span>()</span>) "
	},
	{
		"linetupleid" : 16121,
		"leftlines" : "Expression expr = (Expression)  <span class=\'token del\' > it.next()</span>;",
		"rightlines" : "Expression expr = (Expression)  <span class=\'token add\' > expression</span>;"
	},
	{
		"linetupleid" : 6785,
		"leftlines" : "project.setDependencyArtifacts(MavenProject.createArtifacts(artifactFactory,  <span class=\'token del\' >  <span class=\'token mv\' > project</span>.getDependencies()</span>));",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > project</span></span>.setDependencyArtifacts(project.createArtifacts(artifactFactory));"
	},
	{
		"linetupleid" : 11177,
		"leftlines" : "buildPlanner =  <span class=\'token del\' > (BuildPlanner)  <span class=\'token mv\' > container.lookup(BuildPlanner.class)</span></span>;",
		"rightlines" : "buildPlanner =  <span class=\'token add\' >  <span class=\'token mv\' > container.lookup(BuildPlanner.class)</span></span>;"
	},
	{
		"linetupleid" : 50760,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > currentScope</span>. <span class=\'token mv\' > environment</span>(). <span class=\'token mv\' > options</span>.targetJDK < ClassFileConstants.JDK_DEFERRED</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > currentScope</span>. <span class=\'token mv\' > environment</span>(). <span class=\'token mv\' > options</span>.useJsrBytecode</span>) "
	},
	{
		"linetupleid" : 3138,
		"leftlines" : "Dependency previous =  <span class=\'token del\' >  <span class=\'token mv\' > dependency</span></span>;",
		"rightlines" : "Dependency previous =  <span class=\'token add\' > this. <span class=\'token mv\' > dependency</span></span>;"
	},
	{
		"linetupleid" : 43478,
		"leftlines" : "return  <span class=\'token del\' > fElements</span>;",
		"rightlines" : "return  <span class=\'token add\' > elements</span>;"
	},
	{
		"linetupleid" : 6801,
		"leftlines" : " <span class=\'token del\' > MavenProject project = (MavenProject) iterator.next()</span>;",
		"rightlines" : " <span class=\'token add\' > MavenExecutionResponse response = lifecycleExecutor.execute(session, topLevelProject, dispatcher)</span>;"
	},
	{
		"linetupleid" : 85789,
		"leftlines" : "switch( <span class=\'token del\' > array[i]</span>)\n",
		"rightlines" : "switch( <span class=\'token add\' > token</span>)\n"
	},
	{
		"linetupleid" : 85796,
		"leftlines" : "if ( <span class=\'token del\' > token == Token.NULL</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > Character.isLetter(c)</span>) "
	},
	{
		"linetupleid" : 85801,
		"leftlines" : " <span class=\'token del\' > default:\n</span>",
		"rightlines" : " <span class=\'token add\' > case LVARIABLE:\n</span>"
	},
	{
		"linetupleid" : 85846,
		"leftlines" : " <span class=\'token del\' > model.getLineText(lineIndex, currentLine);</span>",
		"rightlines" : " <span class=\'token add\' > gfx.setColor(defaultColor);</span>"
	},
	{
		"linetupleid" : 14434,
		"leftlines" : "Model model = read( <span class=\'token del\' > ReaderFactory.newXmlReader( <span class=\'token mv\' > input</span>)</span>, options);",
		"rightlines" : "Model model = read( <span class=\'token add\' > new FileInputStream( <span class=\'token mv\' > input</span>)</span>, options);"
	},
	{
		"linetupleid" : 85875,
		"leftlines" : " while ( <span class=\'token del\' >  <span class=\'token del\' > paintSyntaxLine(model, gfx,  <span class=\'token mv\' > tokenMarker</span>, defaultFont, defaultColor, lineIndex++, x, y)</span></span>);",
		"rightlines" : " while ( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > tokenMarker</span>.isNextLineRequested()</span></span>);"
	},
	{
		"linetupleid" : 56722,
		"leftlines" : "info. <span class=\'token del\' > defaultAnnotationValue</span> = methodInfo.isAnnotation ?  <span class=\'token del\' > CharOperation.NO_CHAR</span> :  <span class=\'token del\' > null</span>;",
		"rightlines" : "info. <span class=\'token add\' > defaultValueStart</span> = methodInfo.isAnnotation ?  <span class=\'token add\' > 0</span> :  <span class=\'token add\' > -1</span>;"
	},
	{
		"linetupleid" : 97904,
		"leftlines" : "int[] newfvm = new int[ <span class=\'token del\' >  <span class=\'token mv\' > fvm</span>. <span class=\'token mv\' > length</span> * 2 +  <span class=\'token mv\' > 1</span></span>];",
		"rightlines" : "int[] newfvm = new int[ <span class=\'token add\' > ( <span class=\'token mv\' > fvm</span>. <span class=\'token mv\' > length</span> <<  <span class=\'token mv\' > 1</span>) +  <span class=\'token mv\' > 1</span></span>];"
	},
	{
		"linetupleid" : 85962,
		"leftlines" : "for (; ; ) ",
		"rightlines" : "for ( <span class=\'token add\' > line = firstLine</span>;  <span class=\'token add\' > line <= lastLine</span>; ) "
	},
	{
		"linetupleid" : 85969,
		"leftlines" : " while ( <span class=\'token del\' >  <span class=\'token mv\' > tokenMarker.isNextLineRequested()</span></span>);",
		"rightlines" : " while ( <span class=\'token add\' >  <span class=\'token mv\' > tokenMarker.isNextLineRequested()</span> && line + count < lastVisibleLine</span>);"
	},
	{
		"linetupleid" : 97958,
		"leftlines" : "PluginTableModel model = (PluginTableModel)  <span class=\'token del\' >  <span class=\'token mv\' > table.getModel()</span></span>;",
		"rightlines" : "PluginTableModel model = (PluginTableModel)  <span class=\'token add\' > ((FilteredTableModel)  <span class=\'token mv\' > table.getModel()</span>).getDelegated()</span>;"
	},
	{
		"linetupleid" : 86049,
		"leftlines" : "setFirstLine( <span class=\'token del\' >  <span class=\'token mv\' > line</span></span>);",
		"rightlines" : "setFirstLine( <span class=\'token add\' > Math.max(0,  <span class=\'token mv\' > line</span> - electricScroll)</span>);"
	},
	{
		"linetupleid" : 14447,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > Iterator</span></span> i1 = r1.iterator();",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > Iterator</span><Restriction></span> i1 = r1.iterator();"
	},
	{
		"linetupleid" : 86116,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > firstLine + visibleLines</span> + 1</span> >=  <span class=\'token del\' > textArea.getLineCount()</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > firstLine + visibleLines</span></span> >=  <span class=\'token add\' > lineCount - 1</span>) "
	},
	{
		"linetupleid" : 68816,
		"leftlines" : " <span class=\'token del\' > List< <span class=\'token mv\' > String</span>></span> factoryNames = fc.getFactoryNames();",
		"rightlines" : " <span class=\'token add\' > Map< <span class=\'token mv\' > String</span>,  <span class=\'token mv\' > String</span>></span> factoryNames = fc.getFactoryNames();"
	},
	{
		"linetupleid" : 37040,
		"leftlines" : "manageSyntheticReadAccessIfNecessary(currentScope, lastFieldBinding,  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > binding</span> ==  <span class=\'token mv\' > lastFieldBinding</span></span></span> ? 0 :  <span class=\'token del\' > otherBindings.length</span>);",
		"rightlines" : "manageSyntheticReadAccessIfNecessary(currentScope, lastFieldBinding,  <span class=\'token add\' > lastReceiverType</span>,  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > lastFieldBinding</span> ==  <span class=\'token mv\' > binding</span></span></span> ? 0 :  <span class=\'token add\' > otherBindingsCount</span>);"
	},
	{
		"linetupleid" : 64829,
		"leftlines" : "FlowInfo mergedInfo = FlowInfo.conditional( <span class=\'token del\' >  <span class=\'token mv\' > leftInfo.initsWhenTrue()</span>.copy()</span>.unconditionalInits().mergedWith(rightInfo. <span class=\'token del\' > initsWhenTrue</span>(). <span class=\'token del\' > copy</span>().unconditionalInits()), falseMergedInfo);",
		"rightlines" : "FlowInfo mergedInfo = FlowInfo.conditional( <span class=\'token add\' >  <span class=\'token mv\' > leftInfo.initsWhenTrue()</span></span>.unconditionalInits().mergedWith(rightInfo. <span class=\'token add\' > safeInitsWhenTrue</span>(). <span class=\'token add\' > setReachMode</span>( <span class=\'token add\' > previousMode</span>).unconditionalInits()),  <span class=\'token add\' > rightInfo.initsWhenFalse()</span>);"
	},
	{
		"linetupleid" : 81701,
		"leftlines" : "contexts = new IScopeContext[]  <span class=\'token del\' > { new  <span class=\'token mv\' > InstanceScope</span>() }</span>;",
		"rightlines" : "contexts = new IScopeContext[]  <span class=\'token add\' > {  <span class=\'token mv\' > InstanceScope</span>.INSTANCE }</span>;"
	},
	{
		"linetupleid" : 97987,
		"leftlines" : "Set<String> savedChecked = new HashSet<String>();",
		"rightlines" : " <span class=\'token add\' > final</span> Set<String> savedChecked = new HashSet<String>();"
	},
	{
		"linetupleid" : 98022,
		"leftlines" : "PluginTableModel model = (PluginTableModel)  <span class=\'token del\' > ((FilteredTableModel)  <span class=\'token mv\' > table.getModel()</span>).getDelegated()</span>;",
		"rightlines" : "PluginTableModel model = (PluginTableModel)  <span class=\'token add\' >  <span class=\'token mv\' > table.getModel()</span></span>;"
	},
	{
		"linetupleid" : 6865,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > apache</span>. <span class=\'token mv\' > maven</span>.project. <span class=\'token mv\' > MailingList</span></span> v3List = ( <span class=\'token del\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > apache</span>. <span class=\'token mv\' > maven</span>.project. <span class=\'token mv\' > MailingList</span></span>) it.next();",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > apache</span>. <span class=\'token mv\' > maven</span>.model.v3_0_0. <span class=\'token mv\' > MailingList</span></span> v3List = ( <span class=\'token add\' >  <span class=\'token mv\' > org</span>. <span class=\'token mv\' > apache</span>. <span class=\'token mv\' > maven</span>.model.v3_0_0. <span class=\'token mv\' > MailingList</span></span>) it.next();"
	},
	{
		"linetupleid" : 86299,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > args</span></span> =  <span class=\'token del\' > new String[1]</span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > args</span>[0]</span> =  <span class=\'token add\' > \"\\\"file:\" + path + \"\\\"\"</span>;"
	},
	{
		"linetupleid" : 5162,
		"leftlines" : "tag =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > javaClass</span>.getTagByName( <span class=\'token mv\' > MAVEN_PLUGIN_DESCRIPTION</span>)</span></span>;",
		"rightlines" : "tag =  <span class=\'token add\' >  <span class=\'token add\' > findInClassHierarchy( <span class=\'token mv\' > javaClass</span>,  <span class=\'token mv\' > MAVEN_PLUGIN_DESCRIPTION</span>)</span></span>;"
	},
	{
		"linetupleid" : 81714,
		"leftlines" : "fLookupOrder = new IScopeContext[] { new ProjectScope(fProject),  <span class=\'token del\' > new  <span class=\'token mv\' > InstanceScope</span>()</span>,  <span class=\'token del\' > new  <span class=\'token mv\' > DefaultScope</span>()</span> };",
		"rightlines" : "fLookupOrder = new IScopeContext[] { new ProjectScope(fProject),  <span class=\'token add\' >  <span class=\'token mv\' > InstanceScope</span>.INSTANCE</span>,  <span class=\'token add\' >  <span class=\'token mv\' > DefaultScope</span>.INSTANCE</span> };"
	},
	{
		"linetupleid" : 12458,
		"leftlines" : "ArtifactResolutionRequest request =  <span class=\'token del\' > new  <span class=\'token mv\' > ArtifactResolutionRequest</span>(). <span class=\'token mv\' > setArtifact</span>(pomArtifact). <span class=\'token mv\' > setResolveTransitively</span>( <span class=\'token mv\' > true</span>).setArtifactDependencies(project.getDependencyArtifacts())</span>.setLocalRepository(configuration.getLocalRepository()).setRemoteRepostories(project.getRemoteArtifactRepositories()).setManagedVersionMap(project.getManagedVersionMap());",
		"rightlines" : "ArtifactResolutionRequest request =  <span class=\'token add\' > new  <span class=\'token mv\' > ArtifactResolutionRequest</span>(). <span class=\'token mv\' > setArtifact</span>(artifact). <span class=\'token mv\' > setResolveTransitively</span>( <span class=\'token mv\' > true</span>)</span>.setLocalRepository(configuration.getLocalRepository()).setRemoteRepostories(project.getRemoteArtifactRepositories()).setManagedVersionMap(project.getManagedVersionMap());"
	},
	{
		"linetupleid" : 14492,
		"leftlines" : "for (Lifecycle lifecycle :  <span class=\'token del\' >  <span class=\'token mv\' > lifecycles</span></span>) ",
		"rightlines" : "for (Lifecycle lifecycle :  <span class=\'token add\' >  <span class=\'token mv\' > lifecycles</span>.values()</span>) "
	},
	{
		"linetupleid" : 58651,
		"leftlines" : " <span class=\'token del\' > IPath</span> scopePath = this.paths[i];",
		"rightlines" : " <span class=\'token add\' > String</span> scopePath = this.paths[i];"
	},
	{
		"linetupleid" : 93012,
		"leftlines" : "GUIUtilities.saveGeometry(this,  <span class=\'token del\' >  <span class=\'token mv\' > entry</span></span>.name);",
		"rightlines" : "GUIUtilities.saveGeometry(this,  <span class=\'token add\' >  <span class=\'token mv\' > entry</span>.factory</span>.name);"
	},
	{
		"linetupleid" : 32863,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 33249,
		"leftlines" : "if ( <span class=\'token del\' > currentLine > lineNumber</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > CharOperation.equals(packageName, CodeSnippetToCuMapper.this.packageName) && (CharOperation.equals(className, CodeSnippetToCuMapper.this.className) || CharOperation.equals(className, CodeSnippetToCuMapper.this.varClassName))</span>) "
	},
	{
		"linetupleid" : 33276,
		"leftlines" : " catch ( <span class=\'token del\' > CoreException e</span>) ",
		"rightlines" : " catch ( <span class=\'token add\' > IOException ioe</span>) "
	},
	{
		"linetupleid" : 86337,
		"leftlines" : "return (repeat ?  <span class=\'token del\' >  <span class=\'token mv\' > repeatCount</span></span> : 1);",
		"rightlines" : "return (repeat ?  <span class=\'token add\' > Math.max(1,  <span class=\'token mv\' > repeatCount</span>)</span> : 1);"
	},
	{
		"linetupleid" : 58688,
		"leftlines" : "boolean paramsMatch =  <span class=\'token del\' >  <span class=\'token mv\' > complyTo15</span> && methodTypeErasure == (method2.returnType == null ? null : method2.returnType.erasure())</span> ?  <span class=\'token del\' >  <span class=\'token mv\' > method.areParameterErasuresEqual(method2)</span></span> : method.areParametersEqual(method2);",
		"rightlines" : "boolean paramsMatch =  <span class=\'token add\' >  <span class=\'token mv\' > complyTo15</span></span> ?  <span class=\'token add\' > methodTypeErasure == (method2.returnType == null ? null : method2.returnType.erasure()) &&  <span class=\'token mv\' > method.areParameterErasuresEqual(method2)</span></span> : method.areParametersEqual(method2);"
	},
	{
		"linetupleid" : 12482,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > project</span></span> = session.getCurrentProject();",
		"rightlines" : " <span class=\'token add\' > this. <span class=\'token mv\' > project</span></span> = session.getCurrentProject();"
	},
	{
		"linetupleid" : 6928,
		"leftlines" : "if ( <span class=\'token del\' > !connection.startsWith(\"scm\")</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > (scmRepository != null) && (scmProvider.equalsIgnoreCase(scmRepository.getProvider()))</span>) "
	},
	{
		"linetupleid" : 9083,
		"leftlines" : "ProfileManager globalProfileManager =  <span class=\'token del\' > request.getGlobalProfileManager()</span>;",
		"rightlines" : "ProfileManager globalProfileManager =  <span class=\'token add\' > new DefaultProfileManager(container)</span>;"
	},
	{
		"linetupleid" : 9095,
		"leftlines" : "project.setRemoteArtifactRepositories( <span class=\'token del\' > ProjectUtils</span>.buildArtifactRepositories(model.getRepositories(), artifactRepositoryFactory, container));",
		"rightlines" : "project.setRemoteArtifactRepositories( <span class=\'token add\' > mavenTools</span>.buildArtifactRepositories(model.getRepositories()));"
	},
	{
		"linetupleid" : 98036,
		"leftlines" : " catch ( <span class=\'token del\' >  <span class=\'token mv\' > bsh</span>. <span class=\'token mv\' > UtilEvalError</span></span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' > org.gjt.sp.jedit. <span class=\'token mv\' > bsh</span>. <span class=\'token mv\' > UtilEvalError</span></span> e) "
	},
	{
		"linetupleid" : 14549,
		"leftlines" : "String prefix =  <span class=\'token del\' > managed</span> ? \"dependencyManagement.dependencies.dependency.\" : \"dependencies.dependency.\";",
		"rightlines" : "String prefix =  <span class=\'token add\' > management</span> ? \"dependencyManagement.dependencies.dependency.\" : \"dependencies.dependency.\";"
	},
	{
		"linetupleid" : 86386,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token del\' > GUIUtilities. <span class=\'token mv\' > hideWaitCursor</span>( <span class=\'token mv\' > view</span>)</span></span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > view</span>. <span class=\'token mv\' > hideWaitCursor</span>()</span></span>;"
	},
	{
		"linetupleid" : 99648,
		"leftlines" : "boolean restoreFiles = restore && jEdit.getBooleanProperty(\"restore\") && ( <span class=\'token del\' > buffer == null || jEdit.getBooleanProperty(\"restore.cli\")</span>);",
		"rightlines" : "boolean restoreFiles = restore && jEdit.getBooleanProperty(\"restore\") && ( <span class=\'token add\' > hasBufferArgs || jEdit.getBooleanProperty(\"restore.cli\")</span>);"
	},
	{
		"linetupleid" : 86401,
		"leftlines" : "for (int i =  <span class=\'token del\' > modes.length - 1</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span> >= 0</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span>--</span>) ",
		"rightlines" : "for (int i =  <span class=\'token add\' > 0</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span> < modes.length</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span>++</span>) "
	},
	{
		"linetupleid" : 70428,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > isCaseSensitive</span>()</span> || qualifications == null) ",
		"rightlines" : "if ( <span class=\'token add\' > this. <span class=\'token mv\' > isCaseSensitive</span></span> || qualifications == null) "
	},
	{
		"linetupleid" : 86413,
		"leftlines" : "return getBuffer((String)  <span class=\'token del\' >  <span class=\'token mv\' > files</span>[ <span class=\'token mv\' > 0</span>]</span>);",
		"rightlines" : "return getBuffer((String)  <span class=\'token add\' >  <span class=\'token mv\' > files</span>.elementAt( <span class=\'token mv\' > 0</span>)</span>);"
	},
	{
		"linetupleid" : 8253,
		"leftlines" : "return (File[])  <span class=\'token del\' > ( <span class=\'token mv\' > files</span>. <span class=\'token mv\' > toArray</span>(new File[0]))</span>;",
		"rightlines" : "return (File[])  <span class=\'token add\' >  <span class=\'token mv\' > files</span>. <span class=\'token mv\' > toArray</span>(EMPTY_FILE_ARRAY)</span>;"
	},
	{
		"linetupleid" : 86456,
		"leftlines" : "if ( <span class=\'token del\' > syntaxColorizing</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > getFlag(SYNTAX)</span>) "
	},
	{
		"linetupleid" : 70433,
		"leftlines" : "throw  <span class=\'token del\' > new UnsupportedOperationException(\"Reading a generated file is not permitted\")</span>;",
		"rightlines" : "throw  <span class=\'token add\' > new IllegalStateException(\"Opening an input stream on a generated file is not permitted\")</span>;"
	},
	{
		"linetupleid" : 72133,
		"leftlines" : "if (this.rootsAreStale &&  <span class=\'token del\' > newRoots</span> != null) ",
		"rightlines" : "if (this.rootsAreStale &&  <span class=\'token add\' > rootInfos</span> != null) "
	},
	{
		"linetupleid" : 86518,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > parent + File.separator + path</span></span>;",
		"rightlines" : "return  <span class=\'token add\' > canonPath( <span class=\'token mv\' > parent + File.separator + path</span>)</span>;"
	},
	{
		"linetupleid" : 72839,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > binding</span></span> = scope.getBinding( <span class=\'token del\' >  <span class=\'token mv\' > tokens</span></span>, this);",
		"rightlines" : " <span class=\'token add\' > this. <span class=\'token mv\' > binding</span></span> = scope.getBinding( <span class=\'token add\' > this. <span class=\'token mv\' > tokens</span></span>, this);"
	},
	{
		"linetupleid" : 72978,
		"leftlines" : "reference.declarationSourceStart =  <span class=\'token del\' >  <span class=\'token mv\' > intStack</span></span>[ <span class=\'token del\' >  <span class=\'token mv\' > intPtr</span></span>--];",
		"rightlines" : "reference.declarationSourceStart =  <span class=\'token add\' > this. <span class=\'token mv\' > intStack</span></span>[ <span class=\'token add\' > this. <span class=\'token mv\' > intPtr</span></span>--];"
	},
	{
		"linetupleid" : 73659,
		"leftlines" : "ImportReference importReference = (ImportReference)  <span class=\'token del\' >  <span class=\'token mv\' > astStack</span>[ <span class=\'token mv\' > astPtr</span>]</span>;",
		"rightlines" : "ImportReference importReference = (ImportReference)  <span class=\'token add\' > this. <span class=\'token mv\' > astStack</span>[this. <span class=\'token mv\' > astPtr</span>]</span>;"
	},
	{
		"linetupleid" : 73764,
		"leftlines" : "if (( <span class=\'token del\' >  <span class=\'token mv\' > currentToken</span></span> == TokenNameCOMMA ||  <span class=\'token del\' >  <span class=\'token mv\' > currentToken</span></span> == TokenNameSEMICOLON) &&  <span class=\'token del\' >  <span class=\'token mv\' > astStack</span>[ <span class=\'token mv\' > astPtr</span>]</span> instanceof FieldDeclaration) ",
		"rightlines" : "if (( <span class=\'token add\' > this. <span class=\'token mv\' > currentToken</span></span> == TokenNameCOMMA ||  <span class=\'token add\' > this. <span class=\'token mv\' > currentToken</span></span> == TokenNameSEMICOLON) &&  <span class=\'token add\' > this. <span class=\'token mv\' > astStack</span>[this. <span class=\'token mv\' > astPtr</span>]</span> instanceof FieldDeclaration) "
	},
	{
		"linetupleid" : 76702,
		"leftlines" : "System.arraycopy( <span class=\'token del\' >  <span class=\'token mv\' > finalAssignments</span></span>, 0, (finalAssignments = new Reference[assignCount * 2]), 0, assignCount);",
		"rightlines" : "System.arraycopy( <span class=\'token add\' > this. <span class=\'token mv\' > finalAssignments</span></span>, 0, (this.finalAssignments = new Reference[this.assignCount * 2]), 0, this.assignCount);"
	},
	{
		"linetupleid" : 75264,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > finalAssignments</span>[ <span class=\'token mv\' > assignCount</span>]</span> = finalAssignment;",
		"rightlines" : " <span class=\'token add\' > this. <span class=\'token mv\' > finalAssignments</span>[this. <span class=\'token mv\' > assignCount</span>]</span> = finalAssignment;"
	},
	{
		"linetupleid" : 75507,
		"leftlines" : "switch( <span class=\'token del\' >  <span class=\'token mv\' > id</span></span>)\n",
		"rightlines" : "switch( <span class=\'token add\' > this. <span class=\'token mv\' > id</span></span>)\n"
	},
	{
		"linetupleid" : 76126,
		"leftlines" : "System.arraycopy( <span class=\'token del\' >  <span class=\'token mv\' > pendingAnnotations</span></span>, 0, ( <span class=\'token del\' >  <span class=\'token mv\' > pendingAnnotations</span></span> = new RecoveredAnnotation[2 *  <span class=\'token del\' >  <span class=\'token mv\' > pendingAnnotationCount</span></span>]), 0,  <span class=\'token del\' >  <span class=\'token mv\' > pendingAnnotationCount</span></span>);",
		"rightlines" : "System.arraycopy( <span class=\'token add\' > this. <span class=\'token mv\' > pendingAnnotations</span></span>, 0, ( <span class=\'token add\' > this. <span class=\'token mv\' > pendingAnnotations</span></span> = new RecoveredAnnotation[2 *  <span class=\'token add\' > this. <span class=\'token mv\' > pendingAnnotationCount</span></span>]), 0,  <span class=\'token add\' > this. <span class=\'token mv\' > pendingAnnotationCount</span></span>);"
	},
	{
		"linetupleid" : 76702,
		"leftlines" : "System.arraycopy( <span class=\'token del\' >  <span class=\'token mv\' > memberTypes</span></span>, 0,  <span class=\'token del\' >  <span class=\'token mv\' > memberTypes</span></span> = new SourceType[ <span class=\'token del\' >  <span class=\'token mv\' > numberOfMemberTypes</span></span>], 0,  <span class=\'token del\' >  <span class=\'token mv\' > numberOfMemberTypes</span></span>);",
		"rightlines" : "System.arraycopy( <span class=\'token add\' > this. <span class=\'token mv\' > memberTypes</span></span>, 0,  <span class=\'token add\' > this. <span class=\'token mv\' > memberTypes</span></span> = new SourceType[ <span class=\'token add\' > this. <span class=\'token mv\' > numberOfMemberTypes</span></span>], 0,  <span class=\'token add\' > this. <span class=\'token mv\' > numberOfMemberTypes</span></span>);"
	},
	{
		"linetupleid" : 75264,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > methods</span></span>;",
		"rightlines" : "return  <span class=\'token add\' > this. <span class=\'token mv\' > methods</span></span>;"
	},
	{
		"linetupleid" : 77155,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > entryTable</span></span>.remove(entry.key);",
		"rightlines" : " <span class=\'token add\' > this. <span class=\'token mv\' > entryTable</span></span>.remove(entry.key);"
	},
	{
		"linetupleid" : 77278,
		"leftlines" : "IMethod method = currentType.getMethod(this.memberName[ <span class=\'token del\' >  <span class=\'token mv\' > typeDepth</span></span>], convertTypeNamesToSigs(this.methodParameterTypes[ <span class=\'token del\' >  <span class=\'token mv\' > typeDepth</span></span>]));",
		"rightlines" : "IMethod method = currentType.getMethod(this.memberName[ <span class=\'token add\' > this. <span class=\'token mv\' > typeDepth</span></span>], convertTypeNamesToSigs(this.methodParameterTypes[ <span class=\'token add\' > this. <span class=\'token mv\' > typeDepth</span></span>]));"
	},
	{
		"linetupleid" : 46328,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > this.index</span>[0]</span>++;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > this.index</span></span>++;"
	},
	{
		"linetupleid" : 56858,
		"leftlines" : "switch( <span class=\'token del\' >  <span class=\'token mv\' > left</span>. <span class=\'token mv\' > implicitConversion</span> >>  <span class=\'token mv\' > 4</span></span>)\n",
		"rightlines" : "switch( <span class=\'token add\' > ( <span class=\'token mv\' > left</span>. <span class=\'token mv\' > implicitConversion</span> & IMPLICIT_CONVERSION_MASK) >>  <span class=\'token mv\' > 4</span></span>)\n"
	},
	{
		"linetupleid" : 6957,
		"leftlines" : "for ( <span class=\'token del\' > Iterator it = projects.iterator()</span>;  <span class=\'token del\' > it.hasNext()</span>; ) ",
		"rightlines" : "for ( <span class=\'token add\' > int i = 0</span>;  <span class=\'token add\' > i < dotCount</span>;  <span class=\'token add\' > i++</span>) "
	},
	{
		"linetupleid" : 86573,
		"leftlines" : "bindings = new Vector( <span class=\'token del\' >  <span class=\'token del\' > textActions. <span class=\'token mv\' > length</span> +  <span class=\'token mv\' > actions.length</span></span></span>);",
		"rightlines" : "bindings = new Vector( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > actions.length</span> + 20</span></span>);"
	},
	{
		"linetupleid" : 8265,
		"leftlines" : "excludesStr.append( <span class=\'token del\' > DEFAULT_EXCLUDES</span>[i]);",
		"rightlines" : "excludesStr.append( <span class=\'token add\' > defaultExcludes</span>[i]);"
	},
	{
		"linetupleid" : 3205,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > shellBuilder</span>.getInjectorOptions().stage</span> == Stage.TOOL) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > shellBuilder</span>.getStage()</span> == Stage.TOOL) "
	},
	{
		"linetupleid" : 98052,
		"leftlines" : "out = new BufferedWriter( <span class=\'token del\' > new FileWriter( <span class=\'token mv\' > file1</span>)</span>);",
		"rightlines" : "out = new BufferedWriter( <span class=\'token add\' > new OutputStreamWriter(new FileOutputStream( <span class=\'token mv\' > file1</span>), encoding)</span>);"
	},
	{
		"linetupleid" : 57001,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > lhs</span></span>.implicitConversion =  <span class=\'token del\' >  <span class=\'token mv\' > result >>> 12</span></span>;",
		"rightlines" : " <span class=\'token add\' > this. <span class=\'token mv\' > lhs</span></span>.implicitConversion =  <span class=\'token add\' > (unboxedLhs ? UNBOXING : 0) | ( <span class=\'token mv\' > result >>> 12</span>)</span>;"
	},
	{
		"linetupleid" : 33681,
		"leftlines" : "throw new BuildException( <span class=\'token del\' > \"no\"</span>);",
		"rightlines" : "throw new BuildException( <span class=\'token add\' > Util.bind(\"jdtcom.source\")</span>);"
	},
	{
		"linetupleid" : 93147,
		"leftlines" : "return new ParserRule(ruleAction, hashChar, null, new RE( <span class=\'token del\' >  <span class=\'token mv\' > begin</span></span>, (ignoreCase ? RE.REG_ICASE : 0), RESearchMatcher.RE_SYNTAX_JEDIT), end.toCharArray(), delegate, id);",
		"rightlines" : "return new ParserRule(ruleAction, hashChar, null, new RE( <span class=\'token add\' > \"\\\\A\" +  <span class=\'token mv\' > begin</span></span>, (ignoreCase ? RE.REG_ICASE : 0), RESearchMatcher.RE_SYNTAX_JEDIT), end.toCharArray(), delegate, id);"
	},
	{
		"linetupleid" : 40144,
		"leftlines" : "return ( <span class=\'token del\' > segmentStart</span> >=  <span class=\'token del\' > patternSegmentEnd</span>) || ( <span class=\'token del\' > iPath</span> >=  <span class=\'token del\' > pathLength</span> &&  <span class=\'token del\' > iPattern</span> >=  <span class=\'token del\' > patternLength</span>) || ( <span class=\'token del\' > iPattern</span> ==  <span class=\'token del\' > patternLength</span> - 2 && pattern[ <span class=\'token del\' > iPattern</span>] == \'*\' && pattern[ <span class=\'token del\' > iPattern</span> + 1] == \'*\') || ( <span class=\'token del\' > iPattern</span> ==  <span class=\'token del\' > patternLength</span> && freeSuffixDoubleStar);",
		"rightlines" : "return ( <span class=\'token add\' > pSegmentRestart</span> >=  <span class=\'token add\' > pSegmentEnd</span>) || ( <span class=\'token add\' > fSegmentStart</span> >=  <span class=\'token add\' > fLength</span> &&  <span class=\'token add\' > pSegmentStart</span> >=  <span class=\'token add\' > pLength</span>) || ( <span class=\'token add\' > pSegmentStart</span> ==  <span class=\'token add\' > pLength</span> - 2 && pattern[ <span class=\'token add\' > pSegmentStart</span>] == \'*\' && pattern[ <span class=\'token add\' > pSegmentStart</span> + 1] == \'*\') || ( <span class=\'token add\' > pSegmentStart</span> ==  <span class=\'token add\' > pLength</span> && freeSuffixDoubleStar);"
	},
	{
		"linetupleid" : 98069,
		"leftlines" : " <span class=\'token del\' > BufferedWriter</span> out = null;",
		"rightlines" : " <span class=\'token add\' > SettingsXML.Saver</span> out = null;"
	},
	{
		"linetupleid" : 43630,
		"leftlines" : "this.imports = new ISourceImport[ <span class=\'token del\' > importDeclarations. <span class=\'token mv\' > length</span></span>];",
		"rightlines" : "this.imports = new ISourceImport[ <span class=\'token add\' >  <span class=\'token mv\' > length</span></span>];"
	},
	{
		"linetupleid" : 8290,
		"leftlines" : "addArgIfNotEmpty(arguments, \"- <span class=\'token del\' >  <span class=\'token mv\' > docencoding</span></span>\", docencoding);",
		"rightlines" : "addArgIfNotEmpty(arguments, \"-docencoding\",  <span class=\'token add\' > quotedArgument( <span class=\'token mv\' > docencoding</span>)</span>);"
	},
	{
		"linetupleid" : 65159,
		"leftlines" : " <span class=\'token del\' > Label</span> endLabel = new  <span class=\'token del\' > Label</span>(codeStream);",
		"rightlines" : " <span class=\'token add\' > BranchLabel</span> endLabel = new  <span class=\'token add\' > BranchLabel</span>(codeStream);"
	},
	{
		"linetupleid" : 86803,
		"leftlines" : "while ( <span class=\'token del\' > ( <span class=\'token mv\' > buffer</span> = (repeat ? fileset.getFirstBuffer(view) : fileset.getNextBuffer(view,  <span class=\'token mv\' > buffer</span>))) != null</span>) ",
		"rightlines" : "while ( <span class=\'token add\' >  <span class=\'token mv\' > buffer</span> != null</span>) "
	},
	{
		"linetupleid" : 70443,
		"leftlines" : "if (isNarrowing ?  <span class=\'token del\' >  <span class=\'token del\' > checkProvablyDistinctTypes(scope,  <span class=\'token mv\' > match</span>,  <span class=\'token mv\' > expressionType</span>, 0)</span></span> :  <span class=\'token del\' >  <span class=\'token del\' > checkProvablyDistinctTypes(scope,  <span class=\'token mv\' > castType</span>,  <span class=\'token mv\' > match</span>, 0)</span></span>) ",
		"rightlines" : "if (isNarrowing ?  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > match</span>.isProvablyDistinct( <span class=\'token mv\' > expressionType</span>)</span></span> :  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > castType</span>.isProvablyDistinct( <span class=\'token mv\' > match</span>)</span></span>) "
	},
	{
		"linetupleid" : 14621,
		"leftlines" : "for (int i =  <span class=\'token del\' > 0</span>, n = lineage.size() - 1;  <span class=\'token del\' >  <span class=\'token mv\' > i</span> < n</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span>++</span>) ",
		"rightlines" : "for (int i =  <span class=\'token add\' > lineage.size() - 1</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span> >= 0</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span>--</span>) "
	},
	{
		"linetupleid" : 93180,
		"leftlines" : "super( <span class=\'token del\' >  <span class=\'token mv\' > name</span></span>);",
		"rightlines" : "super( <span class=\'token add\' >  <span class=\'token mv\' > name</span>.replace(\' \', \'_\')</span>);"
	},
	{
		"linetupleid" : 46431,
		"leftlines" : "String[] renamings = new String[]  <span class=\'token del\' > { name }</span>;",
		"rightlines" : "String[] renamings = new String[]  <span class=\'token add\' > { newName }</span>;"
	},
	{
		"linetupleid" : 93184,
		"leftlines" : " <span class=\'token del\' > setLocationRelativeTo(view);</span>",
		"rightlines" : " <span class=\'token add\' > GUIUtilities.loadGeometry(this, name);</span>"
	},
	{
		"linetupleid" : 12520,
		"leftlines" : "for ( <span class=\'token del\' > String mojo</span> : phasesWithMojosToExecute) ",
		"rightlines" : "for ( <span class=\'token add\' > MojoExecution mojoExecution</span> : phasesWithMojosToExecute) "
	},
	{
		"linetupleid" : 60990,
		"leftlines" : "_result = new APTResult(Collections.<IFile> <span class=\'token del\' > emptySet</span>(), deletedFiles, Collections.< <span class=\'token del\' >  <span class=\'token mv\' > String</span></span>>emptySet(), Collections.<IFile, List<IProblem>>emptyMap(), false);",
		"rightlines" : "_result = new APTResult(Collections.< <span class=\'token add\' > IFile</span>>emptySet(),  <span class=\'token add\' > allDeletedFiles</span>, Collections.<IFile,  <span class=\'token add\' > Set< <span class=\'token mv\' > String</span>></span>> <span class=\'token add\' > emptyMap</span>(), Collections.<IFile, List<IProblem>>emptyMap(), false);"
	},
	{
		"linetupleid" : 61025,
		"leftlines" : "final List<AbstractTypeDeclaration> declTypes =  <span class=\'token del\' > _astCompilationUnit.types()</span>;",
		"rightlines" : "final List<AbstractTypeDeclaration> declTypes =  <span class=\'token add\' > searchLocallyForTypeDeclarations()</span>;"
	},
	{
		"linetupleid" : 98082,
		"leftlines" : "int ruleAction =  <span class=\'token del\' >  <span class=\'token mv\' > SPAN | REGEXP | ((noLineBreak) ? NO_LINE_BREAK : 0) | ((noWordBreak) ? NO_WORD_BREAK : 0)</span> | ((noEscape) ? NO_ESCAPE : 0)</span>;",
		"rightlines" : "int ruleAction =  <span class=\'token add\' >  <span class=\'token mv\' > SPAN | REGEXP | ((noLineBreak) ? NO_LINE_BREAK : 0) | ((noWordBreak) ? NO_WORD_BREAK : 0)</span></span>;"
	},
	{
		"linetupleid" : 14739,
		"leftlines" : "Item l = left.hasNext() ?  <span class=\'token del\' > (Item)  <span class=\'token mv\' > left.next()</span></span> : null;",
		"rightlines" : "Item l = left.hasNext() ?  <span class=\'token add\' >  <span class=\'token mv\' > left.next()</span></span> : null;"
	},
	{
		"linetupleid" : 9680,
		"leftlines" : "super(\"Plugin could not be found - check that the goal name is correct: \" + e.getMessage(), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\",  <span class=\'token del\' > e.getRemoteRepositories()</span>,  <span class=\'token del\' > null</span>, e.getCause());",
		"rightlines" : "super(\"Plugin could not be found - check that the goal name is correct: \" + e.getMessage(), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\",  <span class=\'token add\' > null</span>,  <span class=\'token add\' > e.getRemoteRepositories()</span>,  <span class=\'token add\' > null</span>, e.getCause());"
	},
	{
		"linetupleid" : 43672,
		"leftlines" : "IProblemRequestor problemRequestor =  <span class=\'token del\' >  <span class=\'token mv\' > workingCopy</span>.problemRequestor</span>;",
		"rightlines" : "IProblemRequestor problemRequestor =  <span class=\'token add\' >  <span class=\'token mv\' > workingCopy</span>.owner.getProblemRequestor()</span>;"
	},
	{
		"linetupleid" : 7002,
		"leftlines" : "sb.append( <span class=\'token del\' > \"$>svn checkout \"</span>).append(svnRepo.getUrl()).append(\" \").append(model.getArtifactId());",
		"rightlines" : "sb.append( <span class=\'token add\' > \"$ svn checkout \"</span>).append(svnRepo.getUrl()).append(\" \").append(model.getArtifactId());"
	},
	{
		"linetupleid" : 43699,
		"leftlines" : " while ( <span class=\'token del\' > this. <span class=\'token mv\' > scanner</span>. <span class=\'token mv\' > currentPosition</span> <=  <span class=\'token mv\' > sourceEnd</span></span>);",
		"rightlines" : " while ( <span class=\'token add\' > this. <span class=\'token mv\' > scanner</span>. <span class=\'token mv\' > currentPosition</span> <  <span class=\'token mv\' > sourceEnd</span></span>);"
	},
	{
		"linetupleid" : 93234,
		"leftlines" : "g.setColor(UIManager.getColor(c.isEnabled() && ((HistoryTextField) c).getModel() != null ?  <span class=\'token del\' > \"Menu.foreground\"</span> :  <span class=\'token del\' > \"Menu.disabledForeground\"</span>));",
		"rightlines" : "g.setColor(UIManager.getColor(c.isEnabled() && ((HistoryTextField) c).getModel() != null ?  <span class=\'token add\' > \"TextField.foreground\"</span> :  <span class=\'token add\' > \"TextField.disabledForeground\"</span>));"
	},
	{
		"linetupleid" : 70483,
		"leftlines" : "String[] result = { OPTION_ReportAnnotationSuperInterface, OPTION_ReportAssertIdentifier, OPTION_ReportAutoboxing, OPTION_ReportDeprecation, OPTION_ReportDiscouragedReference, OPTION_ReportEmptyStatement, OPTION_ReportEnumIdentifier, OPTION_ReportFallthroughCase, OPTION_ReportFieldHiding, OPTION_ReportFinalParameterBound, OPTION_ReportFinallyBlockNotCompletingNormally, OPTION_ReportForbiddenReference, OPTION_ReportHiddenCatchBlock, OPTION_ReportIncompatibleNonInheritedInterfaceMethod, OPTION_ReportIncompleteEnumSwitch, OPTION_ReportIndirectStaticAccess, OPTION_ReportInvalidJavadoc, OPTION_ReportLocalVariableHiding, OPTION_ReportMethodWithConstructorName, OPTION_ReportMissingDeprecatedAnnotation, OPTION_ReportMissingJavadocComments, OPTION_ReportMissingJavadocTagDescription, OPTION_ReportMissingJavadocTags, OPTION_ReportMissingOverrideAnnotation, OPTION_ReportMissingSerialVersion, OPTION_ReportNoEffectAssignment, OPTION_ReportNoImplicitStringConversion, OPTION_ReportNonExternalizedStringLiteral, OPTION_ReportNonStaticAccessToStatic, OPTION_ReportNullReference, OPTION_ReportPotentialNullReference, OPTION_ReportRedundantNullCheck, OPTION_ReportOverridingPackageDefaultMethod, OPTION_ReportParameterAssignment, OPTION_ReportPossibleAccidentalBooleanAssignment, OPTION_ReportSyntheticAccessEmulation, OPTION_ReportTypeParameterHiding, OPTION_ReportUncheckedTypeOperation, OPTION_ReportUndocumentedEmptyBlock, OPTION_ReportUnnecessaryElse, OPTION_ReportUnnecessaryTypeCheck, OPTION_ReportUnqualifiedFieldAccess, OPTION_ReportUnusedDeclaredThrownException, OPTION_ReportUnusedImport, OPTION_ReportUnusedLocal, OPTION_ReportUnusedParameter, OPTION_ReportUnusedPrivateMember, OPTION_ReportVarargsArgumentNeedCast, OPTION_ReportUnhandledWarningToken, OPTION_ReportOverridingMethodWithoutSuperInvocation };",
		"rightlines" : "String[] result = { OPTION_ReportAnnotationSuperInterface, OPTION_ReportAssertIdentifier, OPTION_ReportAutoboxing, OPTION_ReportDeprecation, OPTION_ReportDiscouragedReference, OPTION_ReportEmptyStatement, OPTION_ReportEnumIdentifier, OPTION_ReportFallthroughCase, OPTION_ReportFieldHiding, OPTION_ReportFinalParameterBound, OPTION_ReportFinallyBlockNotCompletingNormally, OPTION_ReportForbiddenReference, OPTION_ReportHiddenCatchBlock, OPTION_ReportIncompatibleNonInheritedInterfaceMethod, OPTION_ReportIncompleteEnumSwitch, OPTION_ReportIndirectStaticAccess, OPTION_ReportInvalidJavadoc, OPTION_ReportLocalVariableHiding, OPTION_ReportMethodWithConstructorName, OPTION_ReportMissingDeprecatedAnnotation, OPTION_ReportMissingJavadocComments, OPTION_ReportMissingJavadocTagDescription, OPTION_ReportMissingJavadocTags, OPTION_ReportMissingOverrideAnnotation, OPTION_ReportMissingSerialVersion, OPTION_ReportNoEffectAssignment, OPTION_ReportNoImplicitStringConversion, OPTION_ReportNonExternalizedStringLiteral, OPTION_ReportNonStaticAccessToStatic, OPTION_ReportNullReference, OPTION_ReportPotentialNullReference, OPTION_ReportRedundantNullCheck, OPTION_ReportOverridingPackageDefaultMethod, OPTION_ReportParameterAssignment, OPTION_ReportPossibleAccidentalBooleanAssignment, OPTION_ReportSyntheticAccessEmulation, OPTION_ReportTypeParameterHiding, OPTION_ReportUncheckedTypeOperation, OPTION_ReportUndocumentedEmptyBlock, OPTION_ReportUnnecessaryElse, OPTION_ReportUnnecessaryTypeCheck, OPTION_ReportUnqualifiedFieldAccess, OPTION_ReportUnusedDeclaredThrownException, OPTION_ReportUnusedImport, OPTION_ReportUnusedLocal, OPTION_ReportUnusedParameter, OPTION_ReportUnusedPrivateMember, OPTION_ReportVarargsArgumentNeedCast, OPTION_ReportUnhandledWarningToken, OPTION_ReportOverridingMethodWithoutSuperInvocation,  <span class=\'token add\' > OPTION_ReportUnusedTypeArgumentsForMethodInvocation</span> };"
	},
	{
		"linetupleid" : 3269,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 3276,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 14762,
		"leftlines" : "return new ProfileActivator[] { new JdkVersionProfileActivator(), new OperatingSystemProfileActivator(), new PropertyProfileActivator(),  <span class=\'token del\' >  <span class=\'token mv\' > new FileProfileActivator()</span></span> };",
		"rightlines" : "return new ProfileActivator[] { new JdkVersionProfileActivator(), new OperatingSystemProfileActivator(), new PropertyProfileActivator(),  <span class=\'token add\' >  <span class=\'token mv\' > new FileProfileActivator()</span>.setPathTranslator(newPathTranslator())</span> };"
	},
	{
		"linetupleid" : 5424,
		"leftlines" : "if (!(componentSetDescriptor instanceof  <span class=\'token del\' > MavenPluginDescriptor</span>)) ",
		"rightlines" : "if (!(componentSetDescriptor instanceof  <span class=\'token add\' > PluginDescriptor</span>)) "
	},
	{
		"linetupleid" : 3284,
		"leftlines" : "ConstructionContext<T> constructionContext = context.getConstructionContext(this);",
		"rightlines" : " <span class=\'token add\' > final</span> ConstructionContext<T> constructionContext = context.getConstructionContext(this);"
	},
	{
		"linetupleid" : 3286,
		"leftlines" : "@SuppressWarnings(\"unchecked\") Object o =  <span class=\'token del\' > circularGet</span>(provider, errors, context, dependency, linked);",
		"rightlines" : "Object o =  <span class=\'token add\' > super</span>. <span class=\'token add\' > provision</span>(provider, errors, dependency,  <span class=\'token add\' > constructionContext</span>);"
	},
	{
		"linetupleid" : 3296,
		"leftlines" : "return (T) constructorInjector.construct(errors, context, dependency.getKey().getTypeLiteral().getRawType(), allowCircularProxy);",
		"rightlines" : "return (T) constructorInjector.construct(errors, context, dependency.getKey().getTypeLiteral().getRawType(), allowCircularProxy,  <span class=\'token add\' > provisionCallback</span>);"
	},
	{
		"linetupleid" : 3828,
		"leftlines" : "return;",
		"rightlines" : "return  <span class=\'token add\' > 0</span>;"
	},
	{
		"linetupleid" : 115,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > bind(Foo.class)</span>.to(Foo.class)</span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > bind(Foo.class)</span></span>;"
	},
	{
		"linetupleid" : 93305,
		"leftlines" : " <span class=\'token del\' > HelpIndex.HelpFile</span> result = ( <span class=\'token del\' > HelpIndex.HelpFile</span>) results.getModel().getElementAt(row);",
		"rightlines" : " <span class=\'token add\' > Result</span> result = ( <span class=\'token add\' > Result</span>) results.getModel().getElementAt(row);"
	},
	{
		"linetupleid" : 145,
		"leftlines" : "errorHandler.handle( <span class=\'token del\' > \"Could not find a suitable constructor\" + \" in \" +  <span class=\'token mv\' > implementation</span>.getName() + \".\"</span>);",
		"rightlines" : "errorHandler.handle( <span class=\'token add\' > ErrorMessage.MISSING_CONSTRUCTOR</span>,  <span class=\'token add\' >  <span class=\'token mv\' > implementation</span></span>);"
	},
	{
		"linetupleid" : 3334,
		"leftlines" : "return filtersModuleBuilder.filterRegex( <span class=\'token del\' > Lists.newArrayList( <span class=\'token mv\' > regex</span>,  <span class=\'token mv\' > regexes</span>)</span>);",
		"rightlines" : "return filtersModuleBuilder.filterRegex( <span class=\'token add\' > ImmutableList.<String>builder().add( <span class=\'token mv\' > regex</span>).add( <span class=\'token mv\' > regexes</span>).build()</span>);"
	},
	{
		"linetupleid" : 12559,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > lifecyclePlan</span></span>;",
		"rightlines" : "return  <span class=\'token add\' > new MavenExecutionPlan( <span class=\'token mv\' > lifecyclePlan</span>, requiredDependencyResolutionScope)</span>;"
	},
	{
		"linetupleid" : 98126,
		"leftlines" : "if (o instanceof  <span class=\'token del\' > JEditBeanShell</span>) ",
		"rightlines" : "if (o instanceof  <span class=\'token add\' > JEditBeanShellAction</span>) "
	},
	{
		"linetupleid" : 38952,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 195,
		"leftlines" : " <span class=\'token del\' > InternalFactory< <span class=\'token mv\' > String</span>></span>  <span class=\'token del\' > stringFactory = (InternalFactory< <span class=\'token mv\' > String</span>>) factories. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > Key</span>. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > String</span>.class,  <span class=\'token mv\' > key</span>. <span class=\'token mv\' > getName</span>()))</span>;",
		"rightlines" : " <span class=\'token add\' > Binding< <span class=\'token mv\' > String</span>></span>  <span class=\'token add\' > stringBinding = getBinding( <span class=\'token mv\' > Key</span>. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > String</span>.class,  <span class=\'token mv\' > key</span>. <span class=\'token mv\' > getName</span>()))</span>;"
	},
	{
		"linetupleid" : 196,
		"leftlines" : " <span class=\'token del\' > InternalFactory< <span class=\'token mv\' > String</span>></span>  <span class=\'token del\' > stringFactory = (InternalFactory< <span class=\'token mv\' > String</span>>) factories. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > Key</span>. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > String</span>.class,  <span class=\'token mv\' > key</span>. <span class=\'token mv\' > getName</span>()))</span>;",
		"rightlines" : " <span class=\'token add\' > Binding< <span class=\'token mv\' > String</span>></span>  <span class=\'token add\' > stringBinding = getBinding( <span class=\'token mv\' > Key</span>. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > String</span>.class,  <span class=\'token mv\' > key</span>. <span class=\'token mv\' > getName</span>()))</span>;"
	},
	{
		"linetupleid" : 98150,
		"leftlines" : "return new RepaintLines(clipRect.y /  <span class=\'token del\' > height</span>, (clipRect.y + clipRect. <span class=\'token del\' > height</span> - 1) / height);",
		"rightlines" : "return new RepaintLines(clipRect.y /  <span class=\'token add\' > lineHeight</span>, (clipRect.y + clipRect.height - 1) /  <span class=\'token add\' > lineHeight</span>);"
	},
	{
		"linetupleid" : 11255,
		"leftlines" : "if (mp.getUri().startsWith( <span class=\'token del\' >  <span class=\'token mv\' > ProjectUri</span>.DependencyManagement</span>.xUri)) ",
		"rightlines" : "if (mp.getUri().startsWith( <span class=\'token add\' >  <span class=\'token mv\' > ProjectUri</span>.Build.PluginManagement</span>.xUri)) "
	},
	{
		"linetupleid" : 11256,
		"leftlines" : "transformedProperties.add(new ModelProperty(mp.getUri().replace( <span class=\'token del\' >  <span class=\'token mv\' > ProjectUri</span></span>. <span class=\'token del\' > DependencyManagement</span>.xUri, ProjectUri.xUri), mp.getResolvedValue()));",
		"rightlines" : "transformedProperties.add(new ModelProperty(mp.getUri().replace(ProjectUri. <span class=\'token add\' > Build</span>.PluginManagement.xUri, ProjectUri.Build.xUri), mp.getResolvedValue()));"
	},
	{
		"linetupleid" : 98162,
		"leftlines" : "view.getStatus().setMessageAndClear(jEdit.getProperty(\"view.status.incomplete-abbrev\", new Integer[]  <span class=\'token del\' > { new  <span class=\'token mv\' > Integer</span>( <span class=\'token mv\' > m_pp</span>. <span class=\'token mv\' > size</span>()), new  <span class=\'token mv\' > Integer</span>( <span class=\'token mv\' > expand</span>. <span class=\'token mv\' > posParamCount</span>) }</span>));",
		"rightlines" : "view.getStatus().setMessageAndClear(jEdit.getProperty(\"view.status.incomplete-abbrev\", new Integer[]  <span class=\'token add\' > {  <span class=\'token mv\' > Integer</span>.valueOf( <span class=\'token mv\' > m_pp</span>. <span class=\'token mv\' > size</span>()),  <span class=\'token mv\' > Integer</span>.valueOf( <span class=\'token mv\' > expand</span>. <span class=\'token mv\' > posParamCount</span>) }</span>));"
	},
	{
		"linetupleid" : 99710,
		"leftlines" : "this(name, caption,  <span class=\'token del\' > ContextType. <span class=\'token mv\' > jEdit</span></span>);",
		"rightlines" : "this(name, caption,  <span class=\'token add\' >  <span class=\'token mv\' > jEdit</span>.getActionContext()</span>);"
	},
	{
		"linetupleid" : 81876,
		"leftlines" : " catch (X1.Y1  <span class=\'token del\' > e</span>) ",
		"rightlines" : " catch ( <span class=\'token add\' > final</span> X1.Y1  <span class=\'token add\' > exception</span>) "
	},
	{
		"linetupleid" : 34124,
		"leftlines" : "pushOnExpressionStack(new CodeSnippetThisReference(intStack[intPtr--], endPosition,  <span class=\'token del\' >  <span class=\'token mv\' > evaluationContext</span></span>, false));",
		"rightlines" : "pushOnExpressionStack(new CodeSnippetThisReference(intStack[intPtr--], endPosition,  <span class=\'token add\' > this. <span class=\'token mv\' > evaluationContext</span></span>, false));"
	},
	{
		"linetupleid" : 3371,
		"leftlines" : "Injector injector =  <span class=\'token del\' > (Injector)  <span class=\'token mv\' > linkedBinding.getInjector()</span></span>;",
		"rightlines" : "Injector injector =  <span class=\'token add\' >  <span class=\'token mv\' > linkedBinding.getInjector()</span></span>;"
	},
	{
		"linetupleid" : 8458,
		"leftlines" : " catch ( <span class=\'token del\' > IOException ioe</span>) ",
		"rightlines" : " catch ( <span class=\'token add\' > FileNotFoundException e</span>) "
	},
	{
		"linetupleid" : 8464,
		"leftlines" : "throw new MavenReportException( <span class=\'token del\' >  <span class=\'token mv\' > \"Exit code: \" + exitCode</span></span>);",
		"rightlines" : "throw new MavenReportException( <span class=\'token add\' >  <span class=\'token mv\' > \"Exit code: \" + exitCode</span> + \" - \" + err.getOutput()</span>);"
	},
	{
		"linetupleid" : 61209,
		"leftlines" : "boolean isEnum =  <span class=\'token del\' >  <span class=\'token mv\' > referenceContext</span></span>.kind() ==  <span class=\'token del\' > IGenericType</span>.ENUM_DECL;",
		"rightlines" : "boolean isEnum =  <span class=\'token add\' > TypeDeclaration</span>.kind( <span class=\'token add\' >  <span class=\'token mv\' > referenceContext</span>.modifiers</span>) ==  <span class=\'token add\' > TypeDeclaration</span>.ENUM_DECL;"
	},
	{
		"linetupleid" : 14848,
		"leftlines" : "MojoDescriptor forkedMojoDescriptor = pluginManager.getMojoDescriptor(forkedExecution.getPlugin(), forkedExecution.getGoal(),  <span class=\'token del\' >  <span class=\'token del\' > DefaultRepositoryRequest.getRepositoryRequest(session,  <span class=\'token mv\' > project</span>)</span></span>);",
		"rightlines" : "MojoDescriptor forkedMojoDescriptor = pluginManager.getMojoDescriptor(forkedExecution.getPlugin(), forkedExecution.getGoal(),  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > project</span>.getRemotePluginRepositories()</span></span>,  <span class=\'token add\' > session.getRepositorySession()</span>);"
	},
	{
		"linetupleid" : 14905,
		"leftlines" : "for ( <span class=\'token del\' > ArtifactRepository</span> repository : remoteRepositories) ",
		"rightlines" : "for ( <span class=\'token add\' > RemoteRepository</span> repository : remoteRepositories) "
	},
	{
		"linetupleid" : 54177,
		"leftlines" : "key = new char[] { ONE_STAR[0], SEPARATOR,  <span class=\'token del\' >  <span class=\'token mv\' > this.classOrInterface</span></span> };",
		"rightlines" : "key = new char[] { ONE_STAR[0], SEPARATOR,  <span class=\'token add\' > isCaseSensitive() ?  <span class=\'token mv\' > this.classOrInterface</span> : Character.toLowerCase( <span class=\'token mv\' > this.classOrInterface</span>)</span> };"
	},
	{
		"linetupleid" : 79786,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > buff</span>.append( <span class=\'token mv\' > this.typeSignature</span>)</span></span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token add\' > escapeMementoName( <span class=\'token mv\' > buff</span>,  <span class=\'token mv\' > this.typeSignature</span>)</span></span>;"
	},
	{
		"linetupleid" : 34260,
		"leftlines" : " <span class=\'token del\' > public</span> void  <span class=\'token del\' > compile</span>(ICompilationUnit[] sourceUnits)",
		"rightlines" : " <span class=\'token add\' > protected</span> void  <span class=\'token add\' > beginToCompile</span>(ICompilationUnit[] sourceUnits)"
	},
	{
		"linetupleid" : 93434,
		"leftlines" : "for (int i = 0;  <span class=\'token del\' >  <span class=\'token mv\' > iter.hasNext()</span></span>; i++) ",
		"rightlines" : "for (int i = 0;  <span class=\'token add\' > i < visibleLines &&  <span class=\'token mv\' > iter.hasNext()</span></span>; i++) "
	},
	{
		"linetupleid" : 7130,
		"leftlines" : " <span class=\'token del\' > this. <span class=\'token mv\' > bottom</span></span> += DEFAULT_ORGANIZATION_NAME;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > bottom</span></span> += DEFAULT_ORGANIZATION_NAME;"
	},
	{
		"linetupleid" : 7175,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 5537,
		"leftlines" : "artifact.setBaseVersion( <span class=\'token del\' >  <span class=\'token mv\' > m.group(1)</span></span> +  <span class=\'token del\' > \"-SNAPSHOT\"</span>);",
		"rightlines" : "artifact.setBaseVersion( <span class=\'token add\' >  <span class=\'token mv\' > m.group(1)</span> + \"-\"</span> +  <span class=\'token add\' > SNAPSHOT_VERSION</span>);"
	},
	{
		"linetupleid" : 57269,
		"leftlines" : "for (int var11 :  <span class=\'token del\' > tab</span>) ",
		"rightlines" : "for (int var11 :  <span class=\'token add\' > var10</span>) "
	},
	{
		"linetupleid" : 87114,
		"leftlines" : "addToken(length - lastOffset, Token.INVALID);",
		"rightlines" : "addToken( <span class=\'token add\' > info</span>, length - lastOffset, Token.INVALID);"
	},
	{
		"linetupleid" : 41989,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 59470,
		"leftlines" : "assert  <span class=\'token del\' > _annoAstNode</span> != null :  <span class=\'token del\' > \"annotation ast node missing.\"</span>;",
		"rightlines" : "assert  <span class=\'token add\' > _domAnnotation</span> != null :  <span class=\'token add\' > \"annotation node missing.\"</span>;"
	},
	{
		"linetupleid" : 12705,
		"leftlines" : "throw new ProfileActivationException( <span class=\'token del\' > profile</span>,  <span class=\'token del\' > \"Failed to interpolate file location for profile \" + profile.getId() + \": \" + existingPath</span>);",
		"rightlines" : "throw new ProfileActivationException(\"Failed to interpolate file location for  <span class=\'token add\' > profile</span> \" + profile.getId() + \": \" + existingPath, profile);"
	},
	{
		"linetupleid" : 3457,
		"leftlines" : "for (ProvisionListenerBinding  <span class=\'token del\' > binding</span> : listenerBindings) ",
		"rightlines" : "for (ProvisionListenerBinding  <span class=\'token add\' > provisionBinding</span> : listenerBindings) "
	},
	{
		"linetupleid" : 8554,
		"leftlines" : "for (Iterator i = path.iterator(); i.hasNext(); ) ",
		"rightlines" : "for (Iterator i = path.iterator(); i.hasNext();  <span class=\'token add\' > num++</span>) "
	},
	{
		"linetupleid" : 87421,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > context</span></span> =  <span class=\'token del\' > (LineContext) context.parent</span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > context</span>.inRule</span> =  <span class=\'token add\' > null</span>;"
	},
	{
		"linetupleid" : 3495,
		"leftlines" : "throw  <span class=\'token del\' > new AssertionError( <span class=\'token mv\' > pe</span>)</span>;",
		"rightlines" : "throw  <span class=\'token add\' >  <span class=\'token mv\' > pe</span></span>;"
	},
	{
		"linetupleid" : 5581,
		"leftlines" : "siteRenderer.copyResources( <span class=\'token del\' > siteDirectory</span>,  <span class=\'token del\' > outputDirectory</span>,  <span class=\'token del\' > flavour</span>);",
		"rightlines" : "siteRenderer.copyResources( <span class=\'token add\' > outputDirectory</span>,  <span class=\'token add\' > flavour</span>,  <span class=\'token add\' > siteDirectory</span>);"
	},
	{
		"linetupleid" : 54204,
		"leftlines" : "String[] newNames = Util.arrayConcat(pkgName,  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > memberName</span>. <span class=\'token mv\' > intern</span>()</span></span>);",
		"rightlines" : "String[] newNames = Util.arrayConcat(pkgName,  <span class=\'token add\' >  <span class=\'token add\' > manager. <span class=\'token mv\' > intern</span>( <span class=\'token mv\' > memberName</span>)</span></span>);"
	},
	{
		"linetupleid" : 68984,
		"leftlines" : "final  <span class=\'token del\' > List< <span class=\'token mv\' > IFile</span>></span> deleted = new  <span class=\'token del\' > ArrayList< <span class=\'token mv\' > IFile</span>></span>();",
		"rightlines" : "final  <span class=\'token add\' > Set< <span class=\'token mv\' > IFile</span>></span> deleted = new  <span class=\'token add\' > HashSet< <span class=\'token mv\' > IFile</span>></span>();"
	},
	{
		"linetupleid" : 68985,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > gfm.deleteObsoleteFilesAfterBuild(parentFile, newGeneratedFiles)</span></span>;",
		"rightlines" : " <span class=\'token add\' > deleted.addAll( <span class=\'token mv\' > gfm.deleteObsoleteFilesAfterBuild(parentFile, newGeneratedFiles)</span>)</span>;"
	},
	{
		"linetupleid" : 79805,
		"leftlines" : " catch ( <span class=\'token del\' >  <span class=\'token mv\' > AssertionFailedException</span></span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' > ClasspathEntry. <span class=\'token mv\' > AssertionFailedException</span></span> e) "
	},
	{
		"linetupleid" : 3505,
		"leftlines" : "@SuppressWarnings( <span class=\'token del\' >  <span class=\'token mv\' > \"unchecked\"</span></span>) Key<?> providedKey = (Key<?>) getProvidedKey((Key) key, new Errors());",
		"rightlines" : "@SuppressWarnings( <span class=\'token add\' > {  <span class=\'token mv\' > \"unchecked\"</span>, \"cast\" }</span>) Key<?> providedKey = (Key<?>) getProvidedKey((Key) key, new Errors());"
	},
	{
		"linetupleid" : 81058,
		"leftlines" : "long computedValue;",
		"rightlines" : "long computedValue =  <span class=\'token add\' > 0</span>;"
	},
	{
		"linetupleid" : 273,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > List</span></span>  <span class=\'token del\' > bindings =  <span class=\'token mv\' > bindingsByType</span>. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > type</span>)</span>;",
		"rightlines" : " <span class=\'token add\' > @SuppressWarnings({ \"unchecked\" })</span>  <span class=\'token add\' >  <span class=\'token mv\' > List</span><Binding<T>></span>  <span class=\'token add\' > bindingsForThisType = (List)  <span class=\'token mv\' > bindingsByType</span>. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > type</span>)</span>;"
	},
	{
		"linetupleid" : 7248,
		"leftlines" : "for ( <span class=\'token del\' > int i = 0</span>;  <span class=\'token del\' > i < PROJECT_INFO_FILES.length</span>; i++) ",
		"rightlines" : "for ( <span class=\'token add\' > Iterator it = generatedReportsFileName.iterator()</span>;  <span class=\'token add\' > it.hasNext()</span>; ) "
	},
	{
		"linetupleid" : 290,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 293,
		"leftlines" : " <span class=\'token del\' > List< <span class=\'token mv\' > ParameterInjector</span><?>></span> parameterInjectors =  <span class=\'token del\' > new ArrayList< <span class=\'token mv\' > ParameterInjector</span><?>>()</span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > ParameterInjector</span><?>[]</span> parameterInjectors =  <span class=\'token add\' > new  <span class=\'token mv\' > ParameterInjector</span><?>[parameterTypes.length]</span>;"
	},
	{
		"linetupleid" : 319,
		"leftlines" : "return  <span class=\'token del\' > source</span> + \" \" + message;",
		"rightlines" : "return  <span class=\'token add\' > getSourceString()</span> + \" \" + message;"
	},
	{
		"linetupleid" : 7304,
		"leftlines" : "throw  <span class=\'token del\' > repositoryException</span>;",
		"rightlines" : "throw  <span class=\'token add\' > new RepositoryMetadataManagementException(\"Cannot read plugin mappings from: \" + mappingFile, e)</span>;"
	},
	{
		"linetupleid" : 12746,
		"leftlines" : " <span class=\'token del\' > mojo</span> =  <span class=\'token del\' > container.lookup(Mojo.class, mojoDescriptor.getRoleHint())</span>;",
		"rightlines" : " <span class=\'token add\' > pluginArtifacts</span> =  <span class=\'token add\' > getPluginArtifacts(pluginArtifact, plugin, localRepository, remoteRepositories)</span>;"
	},
	{
		"linetupleid" : 3521,
		"leftlines" : "gnode.setStyle(NodeStyle. <span class=\'token del\' > INVISIBLE</span>);",
		"rightlines" : "gnode.setStyle(NodeStyle. <span class=\'token add\' > SOLID</span>);"
	},
	{
		"linetupleid" : 87482,
		"leftlines" : "addKeyword(lastKeyword, Token. <span class=\'token del\' > KEYWORD3</span>);",
		"rightlines" : "addKeyword(lastKeyword, Token. <span class=\'token add\' > NULL</span>);"
	},
	{
		"linetupleid" : 35030,
		"leftlines" : "ReferenceBinding receiverType = binding == null ? null :  <span class=\'token del\' > (!isVirtualInvoke(method, messageSend) || messageSend.receiverType instanceof ArrayBinding) ?  <span class=\'token mv\' > method.declaringClass</span> : (ReferenceBinding) messageSend.receiverType</span>;",
		"rightlines" : "ReferenceBinding receiverType = binding == null ? null :  <span class=\'token add\' >  <span class=\'token mv\' > method.declaringClass</span></span>;"
	},
	{
		"linetupleid" : 43886,
		"leftlines" : "Statement stat;",
		"rightlines" : "Statement stat =  <span class=\'token add\' > statements[i]</span>;"
	},
	{
		"linetupleid" : 65318,
		"leftlines" : "returnValue = Factory.createAnnotationMirror(( <span class=\'token del\' > IResolvedAnnotation</span>) domValue, decl, env);",
		"rightlines" : "returnValue = Factory.createAnnotationMirror(( <span class=\'token add\' > IAnnotationBinding</span>) domValue, decl, env);"
	},
	{
		"linetupleid" : 8694,
		"leftlines" : "throw new LifecycleExecutionException( <span class=\'token del\' > \"Error resolving plugin version: \" +  <span class=\'token mv\' > e.getMessage()</span></span>, e);",
		"rightlines" : "throw new LifecycleExecutionException( <span class=\'token add\' >  <span class=\'token mv\' > e.getMessage()</span></span>, e);"
	},
	{
		"linetupleid" : 8702,
		"leftlines" : "if (isAddedToClasspath( <span class=\'token del\' >  <span class=\'token mv\' > a</span></span>)) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > a</span>.getArtifactHandler()</span>.isAddedToClasspath()) "
	},
	{
		"linetupleid" : 61296,
		"leftlines" : "for ( <span class=\'token del\' > Map.Entry<FactoryContainer, Boolean> e</span> :  <span class=\'token del\' >  <span class=\'token mv\' > fOriginalPath</span>.entrySet()</span>) ",
		"rightlines" : "for ( <span class=\'token add\' > FactoryPathEntry originalFpe</span> :  <span class=\'token add\' >  <span class=\'token mv\' > fOriginalPath</span></span>) "
	},
	{
		"linetupleid" : 360,
		"leftlines" : "final Factory<?> factory = getFactory(Key. <span class=\'token del\' > get</span>(entryType,  <span class=\'token del\' >  <span class=\'token mv\' > key</span>.getName()</span>));",
		"rightlines" : "final Factory<?> factory = getFactory( <span class=\'token add\' >  <span class=\'token mv\' > key</span></span>. <span class=\'token add\' > ofType</span>(entryType));"
	},
	{
		"linetupleid" : 362,
		"leftlines" : "Binding<?> counterpartBinding = getBinding(Key. <span class=\'token del\' > get</span>(primitiveCounterpart,  <span class=\'token del\' >  <span class=\'token mv\' > key</span>.getName()</span>));",
		"rightlines" : "Binding<?> counterpartBinding = getBinding( <span class=\'token add\' >  <span class=\'token mv\' > key</span></span>. <span class=\'token add\' > ofType</span>(primitiveCounterpart));"
	},
	{
		"linetupleid" : 366,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > inject</span>.required()</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > ! <span class=\'token mv\' > inject</span>.optional()</span>) "
	},
	{
		"linetupleid" : 43921,
		"leftlines" : "this.typeHierarchy = new TypeHierarchy(element,  <span class=\'token del\' > scope</span>,  <span class=\'token del\' > computeSubtypes</span>,  <span class=\'token del\' > copies</span>);",
		"rightlines" : "this.typeHierarchy = new TypeHierarchy(element,  <span class=\'token add\' > copies</span>,  <span class=\'token add\' > scope</span>,  <span class=\'token add\' > computeSubtypes</span>);"
	},
	{
		"linetupleid" : 43923,
		"leftlines" : "public TypeHierarchy(IType type,  <span class=\'token del\' > IJavaProject project</span>,  <span class=\'token del\' > boolean computeSubtypes</span>,  <span class=\'token del\' > ICompilationUnit[] workingCopies</span>) throws JavaModelException",
		"rightlines" : "public TypeHierarchy(IType type,  <span class=\'token add\' > ICompilationUnit[] workingCopies</span>,  <span class=\'token add\' > IJavaProject project</span>,  <span class=\'token add\' > boolean computeSubtypes</span>) throws JavaModelException"
	},
	{
		"linetupleid" : 61321,
		"leftlines" : "System.arraycopy(constraintSubstitutes, 0, constraintSubstitutes = new TypeBinding[ <span class=\'token del\' > 2 *  <span class=\'token mv\' > length</span></span>], 0, length);",
		"rightlines" : "System.arraycopy(constraintSubstitutes, 0, constraintSubstitutes = new TypeBinding[ <span class=\'token add\' >  <span class=\'token mv\' > length</span> + 1</span>], 0, length);"
	},
	{
		"linetupleid" : 381,
		"leftlines" : "this.scope = scopes.get(nonNull(scopeName, \"scope name\"));",
		"rightlines" : "this.scope = scopes.get(nonNull( <span class=\'token add\' > scopeAnnotation</span>,  <span class=\'token add\' > \"scope annotation\"</span>));"
	},
	{
		"linetupleid" : 81933,
		"leftlines" : "DataInputStream inputStream = new DataInputStream( <span class=\'token del\' >  <span class=\'token mv\' > ScannerHelper</span>.class. <span class=\'token mv\' > getResourceAsStream</span>(\"part1.rsc\")</span>);",
		"rightlines" : "DataInputStream inputStream = new DataInputStream( <span class=\'token add\' > new BufferedInputStream( <span class=\'token mv\' > ScannerHelper</span>.class. <span class=\'token mv\' > getResourceAsStream</span>(\"unicode/start2.rsc\"))</span>);"
	},
	{
		"linetupleid" : 12802,
		"leftlines" : "for ( <span class=\'token del\' > ArtifactRepository repository</span> :  <span class=\'token del\' >  <span class=\'token mv\' > session</span>.getCurrentProject().getRemoteArtifactRepositories()</span>) ",
		"rightlines" : "for ( <span class=\'token add\' > String pluginGroup</span> :  <span class=\'token add\' >  <span class=\'token mv\' > session</span>.getPluginGroups()</span>) "
	},
	{
		"linetupleid" : 3562,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 3563,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 3568,
		"leftlines" : "public  <span class=\'token del\' >  <span class=\'token mv\' > V</span></span> getValue()",
		"rightlines" : "public  <span class=\'token add\' > Provider< <span class=\'token mv\' > V</span>></span> getValue()"
	},
	{
		"linetupleid" : 3572,
		"leftlines" : "RealElement(String setName,  <span class=\'token del\' >  <span class=\'token mv\' > Type</span></span> type)",
		"rightlines" : " <span class=\'token add\' > private</span> RealElement(String setName,  <span class=\'token add\' > Element. <span class=\'token mv\' > Type</span></span> type,  <span class=\'token add\' > Object mapKey</span>)"
	},
	{
		"linetupleid" : 93529,
		"leftlines" : "new BeanShellErrorDialog(view,  <span class=\'token del\' >  <span class=\'token mv\' > t</span>.toString()</span>);",
		"rightlines" : "new BeanShellErrorDialog(view,  <span class=\'token add\' >  <span class=\'token mv\' > t</span></span>);"
	},
	{
		"linetupleid" : 99754,
		"leftlines" : "if (! <span class=\'token del\' > isShowing()</span>) ",
		"rightlines" : "if (! <span class=\'token add\' > isVisible()</span>) "
	},
	{
		"linetupleid" : 3594,
		"leftlines" : "public  <span class=\'token del\' > Scope</span>  <span class=\'token del\' > getScope</span>(Class<? extends Annotation> annotationType)",
		"rightlines" : "public  <span class=\'token add\' > ScopeBinding</span>  <span class=\'token add\' > getScopeBinding</span>(Class<? extends Annotation> annotationType)"
	},
	{
		"linetupleid" : 3616,
		"leftlines" : "StackTraceElement[] callStack;",
		"rightlines" : "StackTraceElement[] callStack =  <span class=\'token add\' > null</span>;"
	},
	{
		"linetupleid" : 65330,
		"leftlines" : "if ( <span class=\'token del\' > this.classpaths[j] instanceof ClasspathDirectory &&  <span class=\'token mv\' > fileName</span>.startsWith( <span class=\'token mv\' > matchCandidate</span>)</span> && (matchingPathName == null ||  <span class=\'token del\' >  <span class=\'token mv\' > matchCandidate</span>. <span class=\'token mv\' > length</span>()</span> <  <span class=\'token del\' >  <span class=\'token mv\' > matchingPathName</span>. <span class=\'token mv\' > length</span>()</span>)) ",
		"rightlines" : "if ( <span class=\'token add\' > this.classpaths[j] instanceof ClasspathDirectory && CharOperation.prefixEquals( <span class=\'token mv\' > matchCandidate</span>,  <span class=\'token mv\' > fileName</span>)</span> && (matchingPathName == null ||  <span class=\'token add\' >  <span class=\'token mv\' > matchCandidate</span>. <span class=\'token mv\' > length</span></span> <  <span class=\'token add\' >  <span class=\'token mv\' > matchingPathName</span>. <span class=\'token mv\' > length</span></span>)) "
	},
	{
		"linetupleid" : 7384,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > d.getGroupId()</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > \"surefire\"</span>)</span></span> ||  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > d.getGroupId()</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > \"junit\"</span>)</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"surefire\"</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > d.getGroupId()</span>)</span></span> ||  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > \"junit\"</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > d.getGroupId()</span>)</span></span>) "
	},
	{
		"linetupleid" : 438,
		"leftlines" : "if (rawType.equals( <span class=\'token del\' > Factory.class</span>)) ",
		"rightlines" : "if (rawType.equals( <span class=\'token add\' > Locator.class</span>)) "
	},
	{
		"linetupleid" : 461,
		"leftlines" : "final  <span class=\'token del\' > BoundGenerator< <span class=\'token mv\' > T</span>></span>  <span class=\'token del\' > boundGenerator</span> = new  <span class=\'token del\' > BoundGenerator< <span class=\'token mv\' > T</span>></span>( <span class=\'token del\' > generatorKey</span>, errorHandler);",
		"rightlines" : "final  <span class=\'token add\' > BoundFactory< <span class=\'token mv\' > T</span>></span>  <span class=\'token add\' > boundFactory</span> = new  <span class=\'token add\' > BoundFactory< <span class=\'token mv\' > T</span>></span>( <span class=\'token add\' > factoryKey</span>, errorHandler);"
	},
	{
		"linetupleid" : 40282,
		"leftlines" : "if (!( <span class=\'token del\' > receiver == ThisReference.ThisImplicit || receiver.isSuper() || (receiver instanceof NameReference && (((NameReference) receiver).bits & BindingIds.TYPE) != 0)</span>)) ",
		"rightlines" : "if (!( <span class=\'token add\' > isImplicitThisRcv || receiver.isSuper() || (receiver instanceof NameReference && (((NameReference) receiver).bits & BindingIds.TYPE) != 0)</span>)) "
	},
	{
		"linetupleid" : 99267,
		"leftlines" : "for ( <span class=\'token del\' > Object message</span> : messages) ",
		"rightlines" : "for ( <span class=\'token add\' > ErrorEntry entry</span> : messages) "
	},
	{
		"linetupleid" : 3628,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > source == SourceProvider.UNKNOWN_SOURCE</span></span> ? this : new Errors(this, source);",
		"rightlines" : "return  <span class=\'token add\' > source == this.source ||  <span class=\'token mv\' > source == SourceProvider.UNKNOWN_SOURCE</span></span> ? this : new Errors(this, source);"
	},
	{
		"linetupleid" : 96723,
		"leftlines" : "Object value;",
		"rightlines" : "Object value =  <span class=\'token add\' > currentInitializer</span>;"
	},
	{
		"linetupleid" : 96728,
		"leftlines" : "value =  <span class=\'token del\' >  <span class=\'token mv\' > buffer.toString()</span></span>;",
		"rightlines" : "value =  <span class=\'token add\' >  <span class=\'token mv\' > buffer.toString()</span>.intern()</span>;"
	},
	{
		"linetupleid" : 40321,
		"leftlines" : "for (int  <span class=\'token del\' > i</span> = 0,  <span class=\'token del\' > newSize</span> = newProblems.length; i <  <span class=\'token del\' > newSize</span>; ++i) ",
		"rightlines" : "for (int  <span class=\'token add\' > i</span> = 0,  <span class=\'token add\' > l</span> = newProblems.length; i <  <span class=\'token add\' > l</span>; i++) "
	},
	{
		"linetupleid" : 40325,
		"leftlines" : "for (int  <span class=\'token del\' > j</span> = 0,  <span class=\'token del\' > newSize</span> = newProblems.length; j <  <span class=\'token del\' > newSize</span>; ++j) ",
		"rightlines" : "for (int  <span class=\'token add\' > j</span> = 0,  <span class=\'token add\' > m</span> = newProblems.length; j <  <span class=\'token add\' > m</span>; j++) "
	},
	{
		"linetupleid" : 487,
		"leftlines" : " <span class=\'token del\' > new ConfigurationErrorHandler( <span class=\'token mv\' > source</span>)</span>.handle(message, arguments);",
		"rightlines" : " <span class=\'token add\' > configurationErrorHandler</span>.handle( <span class=\'token add\' >  <span class=\'token mv\' > source</span></span>, message, arguments);"
	},
	{
		"linetupleid" : 40512,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 8718,
		"leftlines" : "if ( <span class=\'token del\' > localRepository</span> != null) ",
		"rightlines" : "if ( <span class=\'token add\' > settingsXmlPath</span> != null) "
	},
	{
		"linetupleid" : 12821,
		"leftlines" : "if ( <span class=\'token del\' > artifactFile != null</span> &&  <span class=\'token del\' > artifactFile</span>.exists()) ",
		"rightlines" : "if ( <span class=\'token add\' > projectArtifact != null && projectArtifact.getFile() != null</span> &&  <span class=\'token add\' > projectArtifact.getFile()</span>.exists()) "
	},
	{
		"linetupleid" : 61363,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > expression</span></span> != null) ",
		"rightlines" : "if ( <span class=\'token add\' > this. <span class=\'token mv\' > expression</span></span> != null) "
	},
	{
		"linetupleid" : 81104,
		"leftlines" : "int lastIndex =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > this.content</span>. <span class=\'token mv\' > indexOf</span>( <span class=\'token mv\' > JavadocConstants.SEPARATOR_START</span>,  <span class=\'token mv\' > this.childrenStart</span>)</span></span>;",
		"rightlines" : "int lastIndex =  <span class=\'token add\' >  <span class=\'token add\' > CharOperation. <span class=\'token mv\' > indexOf</span>( <span class=\'token mv\' > JavadocConstants.SEPARATOR_START</span>,  <span class=\'token mv\' > this.content</span>, false,  <span class=\'token mv\' > this.childrenStart</span>)</span></span>;"
	},
	{
		"linetupleid" : 70689,
		"leftlines" : "this.typeParameters[i].traverse(visitor,  <span class=\'token del\' >  <span class=\'token mv\' > scope</span></span>);",
		"rightlines" : "this.typeParameters[i].traverse(visitor,  <span class=\'token add\' > this. <span class=\'token mv\' > scope</span></span>);"
	},
	{
		"linetupleid" : 7455,
		"leftlines" : "String  <span class=\'token del\' > developerConnection = model.getScm().getDeveloperConnection()</span>;",
		"rightlines" : "String  <span class=\'token add\' > connection = scm.getConnection()</span>;"
	},
	{
		"linetupleid" : 51818,
		"leftlines" : "synchronized ( <span class=\'token del\' > this.ast</span>) ",
		"rightlines" : "synchronized ( <span class=\'token add\' > this</span>) "
	},
	{
		"linetupleid" : 81122,
		"leftlines" : "String typeContainerName = getQualifier(fullTypeName, isStatic);",
		"rightlines" : "String typeContainerName =  <span class=\'token add\' > Signature</span>.getQualifier(fullTypeName);"
	},
	{
		"linetupleid" : 15021,
		"leftlines" : "resourceAsStream =  <span class=\'token del\' >  <span class=\'token mv\' > MavenCli.class</span>.getClassLoader()</span>.getResourceAsStream( <span class=\'token del\' > \"org/apache/maven/messages/build.properties\"</span>);",
		"rightlines" : "resourceAsStream =  <span class=\'token add\' >  <span class=\'token mv\' > MavenCli.class</span></span>.getResourceAsStream( <span class=\'token add\' > \"/org/apache/maven/messages/build.properties\"</span>);"
	},
	{
		"linetupleid" : 554,
		"leftlines" : "return new ToStringBuilder( <span class=\'token del\' > Locator.class</span>).add(\"implementation\", implementation).toString();",
		"rightlines" : "return new ToStringBuilder( <span class=\'token add\' > Provider.class</span>).add(\"implementation\", implementation).toString();"
	},
	{
		"linetupleid" : 88017,
		"leftlines" : "in = JARClassLoader.getClassLoader( <span class=\'token del\' >  <span class=\'token mv\' > pluginIndex</span></span>).getResourceAsStream(resource);",
		"rightlines" : "in =  <span class=\'token add\' > jEdit.getPluginJAR( <span class=\'token mv\' > pluginIndex</span>)</span>.getClassLoader().getResourceAsStream(resource);"
	},
	{
		"linetupleid" : 615,
		"leftlines" : "return Collections.unmodifiableMap(bindings);",
		"rightlines" : "return Collections.< <span class=\'token add\' > Key<?></span>,  <span class=\'token add\' > Binding<?></span>>unmodifiableMap(bindings);"
	},
	{
		"linetupleid" : 61497,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 93640,
		"leftlines" : "lineInfo[line] = ((lineInfo[line] & ~( <span class=\'token del\' >  <span class=\'token mv\' > END_MASK | FOLD_LEVEL_VALID_MASK</span> | CONTEXT_VALID_MASK</span>)) | end);",
		"rightlines" : "lineInfo[line] = ((lineInfo[line] & ~( <span class=\'token add\' >  <span class=\'token mv\' > END_MASK | FOLD_LEVEL_VALID_MASK</span></span>)) | end);"
	},
	{
		"linetupleid" : 93702,
		"leftlines" : "propertiesChanged();",
		"rightlines" : " <span class=\'token add\' > jEdit</span>.propertiesChanged();"
	},
	{
		"linetupleid" : 98398,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > str</span>. <span class=\'token mv\' > length</span>() >  <span class=\'token mv\' > seq</span>. <span class=\'token mv\' > length</span>() - 1</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > str</span>. <span class=\'token mv\' > length</span>() - strIdx >  <span class=\'token mv\' > seq</span>. <span class=\'token mv\' > length</span>() - i</span>) "
	},
	{
		"linetupleid" : 11353,
		"leftlines" : "ModelTransformerContext ctx = new ModelTransformerContext(PomTransformer. <span class=\'token del\' > MODEL_CONTAINER_FACTORIES</span>);",
		"rightlines" : "ModelTransformerContext ctx = new ModelTransformerContext(PomTransformer. <span class=\'token add\' > MODEL_CONTAINER_INFOS</span>);"
	},
	{
		"linetupleid" : 61535,
		"leftlines" : " <span class=\'token del\' > fAffectedChildren</span>[existingChildIndex] = child;",
		"rightlines" : " <span class=\'token add\' > this.affectedChildren</span>[existingChildIndex] = child;"
	},
	{
		"linetupleid" : 698,
		"leftlines" : "Constructor<T> constructor = findConstructorIn( <span class=\'token del\' > container</span>, implementation);",
		"rightlines" : "Constructor<T> constructor = findConstructorIn( <span class=\'token add\' > injector</span>, implementation);"
	},
	{
		"linetupleid" : 702,
		"leftlines" : " catch ( <span class=\'token del\' > ContainerImpl. <span class=\'token mv\' > MissingDependencyException</span></span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' > InjectorImpl. <span class=\'token mv\' > MissingDependencyException</span></span> e) "
	},
	{
		"linetupleid" : 51964,
		"leftlines" : "if (document instanceof  <span class=\'token del\' > InternalSearchPattern. <span class=\'token mv\' > WorkingCopyDocument</span></span>) ",
		"rightlines" : "if (document instanceof  <span class=\'token add\' >  <span class=\'token mv\' > WorkingCopyDocument</span></span>) "
	},
	{
		"linetupleid" : 52025,
		"leftlines" : "this.qualification =  <span class=\'token del\' > this. <span class=\'token mv\' > isCaseSensitive</span></span> ? qualification : CharOperation.toLowerCase(qualification);",
		"rightlines" : "this.qualification =  <span class=\'token add\' >  <span class=\'token mv\' > isCaseSensitive</span>()</span> ? qualification : CharOperation.toLowerCase(qualification);"
	},
	{
		"linetupleid" : 70802,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 54586,
		"leftlines" : "while ( <span class=\'token del\' >  <span class=\'token mv\' > Signature.C_ARRAY == param.charAt(0)</span></span>) ",
		"rightlines" : "while ( <span class=\'token add\' > param.length() == 1 &&  <span class=\'token mv\' > Signature.C_ARRAY == param.charAt(0)</span></span>) "
	},
	{
		"linetupleid" : 59661,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > scope</span>.environment().options</span>.getSeverity(CompilerOptions.UnnecessaryTypeCheck) == ProblemSeverities.Ignore) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > scope</span>.compilerOptions()</span>.getSeverity(CompilerOptions.UnnecessaryTypeCheck) == ProblemSeverities.Ignore) "
	},
	{
		"linetupleid" : 59699,
		"leftlines" : "if ((this.binding.tagBits & TagBits.AnnotationOverride) == 0 && (this.binding.declaringClass.modifiers & AccInterface) == 0 && (bindingModifiers & (AccStatic | AccOverriding)) == AccOverriding &&  <span class=\'token del\' >  <span class=\'token mv\' > scope</span>.environment().options</span>.sourceLevel >= JDK1_5) ",
		"rightlines" : "if ((this.binding.tagBits & TagBits.AnnotationOverride) == 0 && (this.binding.declaringClass.modifiers & AccInterface) == 0 && (bindingModifiers & (AccStatic | AccOverriding)) == AccOverriding &&  <span class=\'token add\' >  <span class=\'token mv\' > scope</span>.compilerOptions()</span>.sourceLevel >= JDK1_5) "
	},
	{
		"linetupleid" : 88358,
		"leftlines" : "getRootPane(). <span class=\'token del\' > setPreferredSize</span>(size);",
		"rightlines" : " <span class=\'token add\' > setSize</span>(size);"
	},
	{
		"linetupleid" : 12897,
		"leftlines" : "super(mojoExecution.getMojoDescriptor(), project,  <span class=\'token del\' > \"Mojo execution failed.\"</span>, cause);",
		"rightlines" : "super(mojoExecution.getMojoDescriptor(), project,  <span class=\'token add\' > constructMessage(cause)</span>, cause);"
	},
	{
		"linetupleid" : 44226,
		"leftlines" : "if (!type.isBinary() && (original = (IType)  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > type</span>.getCompilationUnit().getOriginal( <span class=\'token mv\' > type</span>)</span></span>) != null) ",
		"rightlines" : "if (!type.isBinary() && (original = (IType)  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > type</span>.getPrimaryElement()</span></span>) != null) "
	},
	{
		"linetupleid" : 3948,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 93809,
		"leftlines" : "physicalLine =  <span class=\'token del\' > prevLine</span>;",
		"rightlines" : "physicalLine =  <span class=\'token add\' > nextLine</span>;"
	},
	{
		"linetupleid" : 728,
		"leftlines" : "this( <span class=\'token del\' > \"[unknown source]\"</span>, message);",
		"rightlines" : "this( <span class=\'token add\' > SourceProviders.UNKNOWN_SOURCE</span>, message);"
	},
	{
		"linetupleid" : 731,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > rawType.isArray() || rawType.isEnum()</span> || Modifier.isAbstract(modifiers)</span> || rawType.isPrimitive()) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > rawType.isArray() || rawType.isEnum()</span></span> || rawType.isPrimitive()) "
	},
	{
		"linetupleid" : 88387,
		"leftlines" : "fileIcon =  <span class=\'token del\' > \"file://\"</span> +  <span class=\'token del\' >  <span class=\'token mv\' > path</span>.replace(File.separatorChar, \'/\')</span>;",
		"rightlines" : "fileIcon =  <span class=\'token add\' > \"file:\"</span> +  <span class=\'token add\' >  <span class=\'token mv\' > path</span></span>;"
	},
	{
		"linetupleid" : 743,
		"leftlines" : "String message =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > e</span>.getMessage()</span></span>;",
		"rightlines" : "String message =  <span class=\'token add\' >  <span class=\'token add\' > ErrorMessages.getRootMessage( <span class=\'token mv\' > e</span>)</span></span>;"
	},
	{
		"linetupleid" : 754,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > constructorInjector</span>. <span class=\'token mv\' > construct</span>( <span class=\'token mv\' > context</span>, implementation)</span>;",
		"rightlines" : "return  <span class=\'token add\' > (T)  <span class=\'token mv\' > constructorInjector</span>. <span class=\'token mv\' > construct</span>( <span class=\'token mv\' > context</span>,  <span class=\'token mv\' > context</span>.getExpectedType())</span>;"
	},
	{
		"linetupleid" : 88398,
		"leftlines" : "super( <span class=\'token del\' > \"SIM - installing \"</span> + appName);",
		"rightlines" : "super( <span class=\'token add\' > \"Installing \"</span> + appName);"
	},
	{
		"linetupleid" : 80178,
		"leftlines" : "public void  <span class=\'token del\' > generateCompoundAssignment</span>(BlockScope currentScope, CodeStream codeStream, Expression expression, int operator, int assignmentImplicitConversion, boolean valueRequired)",
		"rightlines" : "public void  <span class=\'token add\' > generateAssignment</span>(BlockScope currentScope, CodeStream codeStream,  <span class=\'token add\' > Assignment assignment</span>, boolean valueRequired)"
	},
	{
		"linetupleid" : 80234,
		"leftlines" : "FieldBinding  <span class=\'token del\' > fieldBinding</span>;",
		"rightlines" : "FieldBinding  <span class=\'token add\' > codegenField = ((FieldBinding) this.binding).original()</span>;"
	},
	{
		"linetupleid" : 80264,
		"leftlines" : "switch(isUnboxing ? postConversionType(currentScope).id :  <span class=\'token del\' > this. <span class=\'token mv\' > codegenBinding</span></span>.type.id)\n",
		"rightlines" : "switch(isUnboxing ? postConversionType(currentScope).id :  <span class=\'token add\' >  <span class=\'token mv\' > codegenBinding</span></span>.type.id)\n"
	},
	{
		"linetupleid" : 93836,
		"leftlines" : " <span class=\'token del\' > dimension</span>  <span class=\'token del\' > +=</span> ( <span class=\'token del\' > dragStart.x</span> - evt.getX());",
		"rightlines" : " <span class=\'token add\' > wm.resizePos</span>  <span class=\'token add\' > =</span> ( <span class=\'token add\' > getWidth()</span> - evt.getX());"
	},
	{
		"linetupleid" : 12950,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > result</span>.addMessage( <span class=\'token mv\' > \"\'\" + prefix + \".(groupId:artifactId:type:classifier)\' must be unique: \" + key</span> +  <span class=\'token mv\' > \" ;",
		"rightlines" : " \"</span> +  <span class=\'token mv\' > existing.getVersion()</span> +  <span class=\'token mv\' > \" vs \"</span> +  <span class=\'token mv\' > dependency.getVersion()</span>)</span></span>;"
	},
	{
		"linetupleid" : 15054,
		"leftlines" : "if (! <span class=\'token del\' > legacy</span>) ",
		"rightlines" : "if (! <span class=\'token add\' > legacyFormat</span>) "
	},
	{
		"linetupleid" : 88497,
		"leftlines" : "synchronized ( <span class=\'token del\' > lock</span>) ",
		"rightlines" : "synchronized ( <span class=\'token add\' > pool.waitForAllLock</span>) "
	},
	{
		"linetupleid" : 35217,
		"leftlines" : "break  <span class=\'token del\' > done</span>;",
		"rightlines" : "break  <span class=\'token add\' > done1</span>;"
	},
	{
		"linetupleid" : 764,
		"leftlines" : "if (provided != null ||  <span class=\'token del\' >  <span class=\'token mv\' > allowNullsBadBadBad</span></span>) ",
		"rightlines" : "if (provided != null ||  <span class=\'token add\' >  <span class=\'token mv\' > allowNullsBadBadBad</span>()</span>) "
	},
	{
		"linetupleid" : 88562,
		"leftlines" : "public void  <span class=\'token del\' > save</span>()",
		"rightlines" : "public void  <span class=\'token add\' > _save</span>()"
	},
	{
		"linetupleid" : 88613,
		"leftlines" : "byte[] buf = new byte[ <span class=\'token del\' > BUFSIZ</span>];",
		"rightlines" : "byte[] buf = new byte[ <span class=\'token add\' > BUFSIZE</span>];"
	},
	{
		"linetupleid" : 88617,
		"leftlines" : "Dimension dim =  <span class=\'token del\' > scrollPane.getPreferredSize()</span>;",
		"rightlines" : "Dimension dim =  <span class=\'token add\' > new Dimension()</span>;"
	},
	{
		"linetupleid" : 57440,
		"leftlines" : "if (this.superclass.id != T_JavaLangObject && !argumentType.isCompatibleWith(hasSubstitution ?  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > substitution</span>. <span class=\'token mv\' > substitute</span>( <span class=\'token mv\' > this.superclass</span>)</span></span> : this.superclass)) ",
		"rightlines" : "if (this.superclass.id != T_JavaLangObject && !argumentType.isCompatibleWith(hasSubstitution ?  <span class=\'token add\' >  <span class=\'token add\' > Scope. <span class=\'token mv\' > substitute</span>( <span class=\'token mv\' > substitution</span>,  <span class=\'token mv\' > this.superclass</span>)</span></span> : this.superclass)) "
	},
	{
		"linetupleid" : 65544,
		"leftlines" : "case  <span class=\'token del\' > FINALLY_MUST_BE_INLINED</span>:\n",
		"rightlines" : "case  <span class=\'token add\' > FINALLY_INLINE</span>:\n"
	},
	{
		"linetupleid" : 7611,
		"leftlines" : "return ( <span class=\'token del\' > Model</span>) modelCache.get(createCacheKey(groupId, artifactId, version));",
		"rightlines" : "return ( <span class=\'token add\' > MavenProject</span>) modelCache.get(createCacheKey(groupId, artifactId, version));"
	},
	{
		"linetupleid" : 54641,
		"leftlines" : "return new QualifiedTypeReference(identifiers, new long[] { 0 });",
		"rightlines" : "return new QualifiedTypeReference(identifiers, new long[ <span class=\'token add\' > identifiers.length</span>]);"
	},
	{
		"linetupleid" : 54642,
		"leftlines" : "return new ArrayQualifiedTypeReference(identifiers, dim, new long[] { 0 });",
		"rightlines" : "return new ArrayQualifiedTypeReference(identifiers, dim, new long[ <span class=\'token add\' > identifiers.length</span>]);"
	},
	{
		"linetupleid" : 88722,
		"leftlines" : "VFSManager.runInWorkThread(new BrowserIORequest(BrowserIORequest.DELETE, this, vfsSession, vfs, path));",
		"rightlines" : "VFSManager.runInWorkThread(new BrowserIORequest(BrowserIORequest.DELETE, this, vfsSession, vfs, path,  <span class=\'token add\' > null</span>));"
	},
	{
		"linetupleid" : 3972,
		"leftlines" : "Boolean ok = (Boolean) compile.invoke(compiler, new Object[]  <span class=\'token del\' > {  <span class=\'token mv\' > args</span> }</span>);",
		"rightlines" : "Boolean ok = (Boolean) compile.invoke(compiler, new Object[]  <span class=\'token add\' > {  <span class=\'token mv\' > args</span>.toArray(new String[0]) }</span>);"
	},
	{
		"linetupleid" : 37580,
		"leftlines" : "return ( <span class=\'token del\' > safeSubtreeMatch( <span class=\'token mv\' > node</span>.getExpression(),  <span class=\'token mv\' > o</span>.getExpression()) && safeSubtreeMatch( <span class=\'token mv\' > node</span>.getName(),  <span class=\'token mv\' > o</span>.getName()) && safeSubtreeListMatch( <span class=\'token mv\' > node</span>.arguments(),  <span class=\'token mv\' > o</span>.arguments()) &&  <span class=\'token mv\' > node</span>.isAnonymousClassDeclaration() ==  <span class=\'token mv\' > o</span>.isAnonymousClassDeclaration() && safeSubtreeListMatch( <span class=\'token mv\' > node</span>.bodyDeclarations(),  <span class=\'token mv\' > o</span>.bodyDeclarations())</span>);",
		"rightlines" : "return ( <span class=\'token add\' > safeSubtreeMatch( <span class=\'token mv\' > node</span>.getExpression(),  <span class=\'token mv\' > o</span>.getExpression()) && safeSubtreeMatch( <span class=\'token mv\' > node</span>.getName(),  <span class=\'token mv\' > o</span>.getName()) && safeSubtreeListMatch( <span class=\'token mv\' > node</span>.arguments(),  <span class=\'token mv\' > o</span>.arguments()) && safeSubtreeMatch( <span class=\'token mv\' > node</span>.getAnonymousClassDeclaration(),  <span class=\'token mv\' > o</span>.getAnonymousClassDeclaration())</span>);"
	},
	{
		"linetupleid" : 44492,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 15092,
		"leftlines" : "this. <span class=\'token del\' > parentImports</span> = ( <span class=\'token del\' > parentImports</span> != null) ?  <span class=\'token del\' > parentImports</span> : Collections.<String> <span class=\'token del\' > emptyList</span>();",
		"rightlines" : "this. <span class=\'token add\' > foreignImports</span> = ( <span class=\'token add\' > foreignImports</span> != null) ?  <span class=\'token add\' > foreignImports</span> : Collections.<String,  <span class=\'token add\' > ClassLoader</span>> <span class=\'token add\' > emptyMap</span>();"
	},
	{
		"linetupleid" : 37594,
		"leftlines" : "public  <span class=\'token del\' > WorkingCopy</span> getWorkingCopy()",
		"rightlines" : "public  <span class=\'token add\' > IJavaElement</span> getWorkingCopy( <span class=\'token add\' > IProgressMonitor monitor</span>,  <span class=\'token add\' > IBufferFactory factory</span>) throws  <span class=\'token add\' > JavaModelException</span>"
	},
	{
		"linetupleid" : 98442,
		"leftlines" : " <span class=\'token del\' > OverwriteWidget</span>  <span class=\'token del\' > mode</span> = new OverwriteWidget(view);",
		"rightlines" : " <span class=\'token add\' > Widget</span>  <span class=\'token add\' > overwrite</span> = new OverwriteWidget(view);"
	},
	{
		"linetupleid" : 61858,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 98455,
		"leftlines" : "super(view, \"Errors\",  <span class=\'token del\' > true</span>);",
		"rightlines" : "super(view, \"Errors\",  <span class=\'token add\' > false</span>);"
	},
	{
		"linetupleid" : 59808,
		"leftlines" : "assert  <span class=\'token del\' >  <span class=\'token mv\' > _paramIndex</span> >  <span class=\'token mv\' > 0</span></span> : \"invalid param index \" + _paramIndex;",
		"rightlines" : "assert  <span class=\'token add\' >  <span class=\'token mv\' > _paramIndex</span> >=  <span class=\'token mv\' > 0</span></span> : \"invalid param index \" + _paramIndex;"
	},
	{
		"linetupleid" : 59825,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > Set</span></span> parents =  <span class=\'token del\' > (Set)  <span class=\'token mv\' > _typeName2Parents.get(typeName)</span></span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > Set</span><ICompilationUnit></span> parents =  <span class=\'token add\' >  <span class=\'token mv\' > _typeName2Parents.get(typeName)</span></span>;"
	},
	{
		"linetupleid" : 773,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > creator</span>.toString()</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token add\' > String.format(\"%s[%s]\",  <span class=\'token mv\' > creator</span>, SINGLETON)</span></span>;"
	},
	{
		"linetupleid" : 44513,
		"leftlines" : "IBuffer  <span class=\'token del\' > originalBuffer</span> =  <span class=\'token del\' > original</span>.getBuffer();",
		"rightlines" : "IBuffer  <span class=\'token add\' > primaryBuffer</span> =  <span class=\'token add\' > primary</span>.getBuffer();"
	},
	{
		"linetupleid" : 88916,
		"leftlines" : "for (int i = line + 1;  <span class=\'token del\' >  <span class=\'token mv\' > i</span> <  <span class=\'token mv\' > line</span> +  <span class=\'token mv\' > expand</span>. <span class=\'token mv\' > lineCount</span></span>; i++) ",
		"rightlines" : "for (int i = line + 1;  <span class=\'token add\' >  <span class=\'token mv\' > i</span> <=  <span class=\'token mv\' > line</span> +  <span class=\'token mv\' > expand</span>. <span class=\'token mv\' > lineCount</span></span>; i++) "
	},
	{
		"linetupleid" : 47015,
		"leftlines" : "if (reference instanceof  <span class=\'token del\' > AnnotationMessageSend</span>) ",
		"rightlines" : "if (reference instanceof  <span class=\'token add\' > JavadocMessageSend</span>) "
	},
	{
		"linetupleid" : 59884,
		"leftlines" : "super(originalField.name,  <span class=\'token del\' >  <span class=\'token mv\' > originalField</span>.isStatic() ?  <span class=\'token mv\' > originalField</span>. <span class=\'token mv\' > type</span> :  <span class=\'token mv\' > Scope</span>. <span class=\'token mv\' > substitute</span>( <span class=\'token mv\' > parameterizedDeclaringClass</span>,  <span class=\'token mv\' > originalField</span>. <span class=\'token mv\' > type</span>)</span>, originalField.modifiers, parameterizedDeclaringClass, null);",
		"rightlines" : "super(originalField.name,  <span class=\'token add\' > ( <span class=\'token mv\' > originalField</span>.modifiers & AccEnum) != 0 ?  <span class=\'token mv\' > parameterizedDeclaringClass</span> : ( <span class=\'token mv\' > originalField</span>.modifiers & AccStatic) != 0 ?  <span class=\'token mv\' > originalField</span>. <span class=\'token mv\' > type</span> :  <span class=\'token mv\' > Scope</span>. <span class=\'token mv\' > substitute</span>( <span class=\'token mv\' > parameterizedDeclaringClass</span>,  <span class=\'token mv\' > originalField</span>. <span class=\'token mv\' > type</span>)</span>, originalField.modifiers, parameterizedDeclaringClass, null);"
	},
	{
		"linetupleid" : 88941,
		"leftlines" : "int x, y, width, height;",
		"rightlines" : "int x, y, width, height,  <span class=\'token add\' > adjust_x</span>,  <span class=\'token add\' > adjust_y</span>,  <span class=\'token add\' > adjust_width</span>,  <span class=\'token add\' > adjust_height</span>;"
	},
	{
		"linetupleid" : 94064,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > insideGroup</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > insideGroup</span> != 0</span>) "
	},
	{
		"linetupleid" : 5712,
		"leftlines" : "artifactFilter = new ExclusionSetFilter(new String[] { \"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"plexus-container-default\", \"maven-project\", \"plexus-container-artifact\", \"maven-reporting-api\", \"doxia-core\", \"wagon-provider-api\", \"classworlds\", \"maven-plugin\", \"plexus-marmalade-factory\", \"maven-script-marmalade\", \"maven-script-beanshell\", \"plexus-bsh-factory\", \"bsh\", \"marmalade-core\" });",
		"rightlines" : "artifactFilter = new ExclusionSetFilter(new String[] { \"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"plexus-container-default\", \"maven-project\", \"plexus-container-artifact\", \"maven-reporting-api\", \"doxia-core\", \"wagon-provider-api\", \"classworlds\", \"maven-plugin\", \"plexus-marmalade-factory\", \"maven-script-marmalade\", \"maven-script-beanshell\", \"plexus-bsh-factory\", \"bsh\", \"marmalade-core\",  <span class=\'token add\' > \"plexus-utils\"</span> });"
	},
	{
		"linetupleid" : 40776,
		"leftlines" : "if (! <span class=\'token del\' > ( <span class=\'token mv\' > storedSourcePath</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > sourcePath</span>) &&  <span class=\'token mv\' > rootPath</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > storedRootPath</span>))</span>) ",
		"rightlines" : "if (! <span class=\'token add\' > ( <span class=\'token mv\' > storedSourcePath</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > sourcePath</span>) && ( <span class=\'token mv\' > rootPath</span> != null &&  <span class=\'token mv\' > rootPath</span>. <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > storedRootPath</span>)) ||  <span class=\'token mv\' > storedRootPath</span> == null)</span>) "
	},
	{
		"linetupleid" : 61920,
		"leftlines" : "for ( <span class=\'token del\' > AnnotationProcessorFactory factory</span> :  <span class=\'token del\' >  <span class=\'token mv\' > factories</span></span>) ",
		"rightlines" : "for ( <span class=\'token add\' > FactoryPath.Attributes attr</span> :  <span class=\'token add\' >  <span class=\'token mv\' > factories</span>.values()</span>) "
	},
	{
		"linetupleid" : 94142,
		"leftlines" : "String[] dirs = {  <span class=\'token del\' > \"buffer\"</span>, \"home\",  <span class=\'token del\' > \"favorites\"</span>,  <span class=\'token del\' > \"last\"</span> };",
		"rightlines" : "String[] dirs = {  <span class=\'token add\' > \"favorites\"</span>, \"home\",  <span class=\'token add\' > \"last\"</span>,  <span class=\'token add\' > \"buffer\"</span>,  <span class=\'token add\' > \"working\"</span> };"
	},
	{
		"linetupleid" : 8757,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 843,
		"leftlines" : "return  <span class=\'token del\' > context.sanitize( <span class=\'token mv\' > value</span>, source)</span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > value</span></span>;"
	},
	{
		"linetupleid" : 89079,
		"leftlines" : "if (userObject instanceof  <span class=\'token del\' > BrowserTreeView. <span class=\'token mv\' > LoadingPlaceholder</span></span>) ",
		"rightlines" : "if (userObject instanceof  <span class=\'token add\' > BrowserView. <span class=\'token mv\' > LoadingPlaceholder</span></span>) "
	},
	{
		"linetupleid" : 89151,
		"leftlines" : "props.setText( <span class=\'token del\' >  <span class=\'token mv\' > \":tabSize=\"</span></span> + tabSize.getSelectedItem() + \":indentSize=\" + indentSize.getSelectedItem() + \":noTabs=\" + noTabs.isSelected() + \":mode=\" + modes[mode.getSelectedIndex()].getName() + \":indentOnTab=\" + indentOnTab.isSelected() + \":indentOnEnter=\" + indentOnEnter.isSelected() + \":syntax=\" + syntax.isSelected() + \":\");",
		"rightlines" : "props.setText( <span class=\'token add\' > \":mode=\" + modes[mode.getSelectedIndex()].getName() +  <span class=\'token mv\' > \":tabSize=\"</span></span> + tabSize.getSelectedItem() + \":indentSize=\" + indentSize.getSelectedItem() + \":noTabs=\" + noTabs.isSelected() + \":indentOnTab=\" + indentOnTab.isSelected() + \":indentOnEnter=\" + indentOnEnter.isSelected() + \":syntax=\" + syntax.isSelected() + \":maxLineLen=\" + maxLineLen.getSelectedItem() + \":\");"
	},
	{
		"linetupleid" : 94271,
		"leftlines" : "Graphics2D blockgfx =  <span class=\'token del\' >  <span class=\'token mv\' > (Graphics2D) gfx.create()</span></span>;",
		"rightlines" : "Graphics2D blockgfx =  <span class=\'token add\' > (OperatingSystem.isWindows() ?  <span class=\'token mv\' > (Graphics2D) gfx.create()</span> : gfx)</span>;"
	},
	{
		"linetupleid" : 99288,
		"leftlines" : "for ( <span class=\'token del\' >  <span class=\'token mv\' > Class</span><?> msg</span> :  <span class=\'token del\' > keySet()</span>) ",
		"rightlines" : "for ( <span class=\'token add\' > Map.Entry< <span class=\'token mv\' > Class</span><?>, List<EBMessageHandler>> entry</span> :  <span class=\'token add\' > entrySet()</span>) "
	},
	{
		"linetupleid" : 13084,
		"leftlines" : "execution.setId(\"default-\" + p[ <span class=\'token del\' > 2</span>]);",
		"rightlines" : "execution.setId(\"default-\" + p[ <span class=\'token add\' > p.length - 1</span>]);"
	},
	{
		"linetupleid" : 15192,
		"leftlines" : "List<RemoteRepository> newRepositories = Collections.singletonList( <span class=\'token del\' > convert</span>(repository));",
		"rightlines" : "List<RemoteRepository> newRepositories = Collections.singletonList( <span class=\'token add\' > ArtifactDescriptorUtils</span>. <span class=\'token add\' > toRemoteRepository</span>(repository));"
	},
	{
		"linetupleid" : 47034,
		"leftlines" : "return getCompilationUnit( <span class=\'token del\' >  <span class=\'token mv\' > (IPackageFragment) parent</span></span>,  <span class=\'token del\' > DefaultWorkingCopyOwner.PRIMARY</span>);",
		"rightlines" : "return  <span class=\'token add\' > ( <span class=\'token mv\' > (IPackageFragment) parent</span>)</span>.getCompilationUnit( <span class=\'token add\' > getName()</span>);"
	},
	{
		"linetupleid" : 44617,
		"leftlines" : "if (( <span class=\'token del\' > this.resolvedType =  <span class=\'token mv\' > receiverType = ((SingleTypeReference) type).resolveTypeEnclosing(scope, (ReferenceBinding) enclosingInstanceType)</span></span>) == null) ",
		"rightlines" : "if (( <span class=\'token add\' >  <span class=\'token mv\' > receiverType = ((SingleTypeReference) type).resolveTypeEnclosing(scope, (ReferenceBinding) enclosingInstanceType)</span></span>) == null) "
	},
	{
		"linetupleid" : 82152,
		"leftlines" : "final long indexLastModified = max == 0 ? 0L :  <span class=\'token del\' >  <span class=\'token mv\' > index</span>.getIndexFile().lastModified()</span>;",
		"rightlines" : "final long indexLastModified = max == 0 ? 0L :  <span class=\'token add\' >  <span class=\'token mv\' > index</span>.getIndexLastModified()</span>;"
	},
	{
		"linetupleid" : 66378,
		"leftlines" : "String markerType;",
		"rightlines" : "String markerType =  <span class=\'token add\' > problem.getMarkerType()</span>;"
	},
	{
		"linetupleid" : 66415,
		"leftlines" : "syntheticAccessor = ((SourceTypeBinding)  <span class=\'token del\' > this.codegenBinding. <span class=\'token mv\' > declaringClass</span></span>).addSyntheticMethod(this.codegenBinding, isSuperAccess());",
		"rightlines" : "syntheticAccessor = ((SourceTypeBinding)  <span class=\'token add\' >  <span class=\'token mv\' > declaringClass</span></span>).addSyntheticMethod(this.codegenBinding, isSuperAccess());"
	},
	{
		"linetupleid" : 89364,
		"leftlines" : "boolean replaceEnabled = ! <span class=\'token del\' > (incrementalSearch.isSelected() ||  <span class=\'token mv\' > batchSearch.isSelected()</span>)</span>;",
		"rightlines" : "boolean replaceEnabled = ! <span class=\'token add\' >  <span class=\'token mv\' > batchSearch.isSelected()</span></span>;"
	},
	{
		"linetupleid" : 10092,
		"leftlines" : "options.addOption( <span class=\'token del\' >  <span class=\'token mv\' > OptionBuilder</span></span>.create(SUPRESS_SNAPSHOT_UPDATES));",
		"rightlines" : "options.addOption( <span class=\'token add\' >  <span class=\'token mv\' > OptionBuilder</span>.withLongOpt(\"no-snapshot-updates\").withDescription(\"Supress SNAPSHOT updates\")</span>.create(SUPRESS_SNAPSHOT_UPDATES));"
	},
	{
		"linetupleid" : 10188,
		"leftlines" : "if ((extensionArtifact != null) && !projectSession. <span class=\'token del\' > containsRealm</span>(extensionArtifact)) ",
		"rightlines" : "if ((extensionArtifact != null) && !projectSession. <span class=\'token add\' > containsExtensionRealm</span>(extensionArtifact)) "
	},
	{
		"linetupleid" : 94470,
		"leftlines" : " catch ( <span class=\'token del\' > EvalError</span> e) ",
		"rightlines" : " catch ( <span class=\'token add\' > UtilEvalError</span> e) "
	},
	{
		"linetupleid" : 94503,
		"leftlines" : "throw new  <span class=\'token del\' > EvalError</span>(\"Can\'t read field: \" + field);",
		"rightlines" : "throw new  <span class=\'token add\' > UtilEvalError</span>(\"Can\'t read field: \" + field);"
	},
	{
		"linetupleid" : 62037,
		"leftlines" : "this.simpleName =  <span class=\'token del\' >  <span class=\'token mv\' > isCaseSensitive()</span></span> ? simpleName : CharOperation.toLowerCase(simpleName);",
		"rightlines" : "this.simpleName =  <span class=\'token add\' > ( <span class=\'token mv\' > isCaseSensitive()</span> || isCamelCase())</span> ? simpleName : CharOperation.toLowerCase(simpleName);"
	},
	{
		"linetupleid" : 89530,
		"leftlines" : "int top = position.equals(DockableWindowManager.BOTTOM) ?  <span class=\'token del\' > 5</span> : 0;",
		"rightlines" : "int top = position.equals(DockableWindowManager.BOTTOM) ?  <span class=\'token add\' > SPLITTER_WIDTH</span> : 0;"
	},
	{
		"linetupleid" : 94619,
		"leftlines" : "String[] args = { needVersion,  <span class=\'token del\' > plugin</span> };",
		"rightlines" : "String[] args = { needVersion,  <span class=\'token add\' > pluginName</span> };"
	},
	{
		"linetupleid" : 94621,
		"leftlines" : "if ( <span class=\'token del\' > jEdit.getPlugin( <span class=\'token mv\' > plugin</span>)</span> instanceof EditPlugin.Broken) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > plugin</span></span> instanceof EditPlugin.Broken) "
	},
	{
		"linetupleid" : 13217,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > introducedDependencyArtifacts != null</span></span> ? introducedDependencyArtifacts :  <span class=\'token del\' >  <span class=\'token mv\' > Collections</span>.EMPTY_SET</span>;",
		"rightlines" : "return  <span class=\'token add\' > ( <span class=\'token mv\' > introducedDependencyArtifacts != null</span>)</span> ? introducedDependencyArtifacts :  <span class=\'token add\' >  <span class=\'token mv\' > Collections</span>.<Artifact>emptySet()</span>;"
	},
	{
		"linetupleid" : 40889,
		"leftlines" : "localBinding.useFlag =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > flowInfo</span>.isFakeReachable() ?  <span class=\'token mv\' > LocalVariableBinding.FAKE_USED</span>  <span class=\'token mv\' > :</span>  <span class=\'token mv\' > LocalVariableBinding.USED</span></span></span>;",
		"rightlines" : "localBinding.useFlag =  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > flowInfo</span>.isReachable() ?  <span class=\'token mv\' > LocalVariableBinding.USED</span>  <span class=\'token mv\' > :</span>  <span class=\'token mv\' > LocalVariableBinding.FAKE_USED</span></span></span>;"
	},
	{
		"linetupleid" : 988,
		"leftlines" : "return \"bind \" + key + (bindTarget ==  <span class=\'token del\' > null</span> ? \"\" : (\" to \" + bindTarget)) + (bindScoping ==  <span class=\'token del\' > null</span> ? \"\" : (\" in \" + bindScoping));",
		"rightlines" : "return \"bind \" + key + (bindTarget ==  <span class=\'token add\' > EMPTY_BIND_TARGET</span> ? \"\" : (\" to \" + bindTarget)) + (bindScoping ==  <span class=\'token add\' > EMPTY_SCOPING</span> ? \"\" : (\" in \" + bindScoping));"
	},
	{
		"linetupleid" : 1019,
		"leftlines" : "this.interceptors =  <span class=\'token del\' > Arrays.asList( <span class=\'token mv\' > Objects.nonNull(interceptors, \"interceptors\")</span>)</span>;",
		"rightlines" : "this.interceptors =  <span class=\'token add\' >  <span class=\'token mv\' > Objects.nonNull(interceptors, \"interceptors\")</span></span>;"
	},
	{
		"linetupleid" : 52593,
		"leftlines" : " <span class=\'token del\' > result.append( <span class=\'token mv\' > this.unitDeclaration.print(tab + 1, result)</span>)</span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > this.unitDeclaration.print(tab + 1, result)</span></span>;"
	},
	{
		"linetupleid" : 1030,
		"leftlines" : "this. <span class=\'token del\' >  <span class=\'token mv\' > injector</span></span> = injector;",
		"rightlines" : "this.injector =  <span class=\'token add\' > Objects.nonNull( <span class=\'token mv\' > injector</span>, \" <span class=\'token mv\' > injector</span>\")</span>;"
	},
	{
		"linetupleid" : 57712,
		"leftlines" : " <span class=\'token del\' > this. <span class=\'token mv\' > constant</span></span> = NotAConstant;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > constant</span></span> = NotAConstant;"
	},
	{
		"linetupleid" : 59960,
		"leftlines" : " <span class=\'token del\' > this.rootPaths</span>.add( <span class=\'token del\' >  <span class=\'token mv\' > rootPathEntry</span>.toString()</span>);",
		"rightlines" : " <span class=\'token add\' > set</span>.add( <span class=\'token add\' >  <span class=\'token mv\' > rootPathEntry</span></span>);"
	},
	{
		"linetupleid" : 15201,
		"leftlines" : "return  <span class=\'token del\' > getPathForLocalArtifact( <span class=\'token mv\' > artifact</span>)</span>;",
		"rightlines" : "return  <span class=\'token add\' > delegate.pathOf(RepositoryUtils.toArtifact( <span class=\'token mv\' > artifact</span>))</span>;"
	},
	{
		"linetupleid" : 10259,
		"leftlines" : "super(projectId, message,  <span class=\'token del\' > new File( <span class=\'token mv\' > pomLocation</span>)</span>, cause);",
		"rightlines" : "super(projectId, message,  <span class=\'token add\' >  <span class=\'token mv\' > pomLocation</span></span>, cause);"
	},
	{
		"linetupleid" : 1042,
		"leftlines" : "return  <span class=\'token del\' > constructor.getParameterTypes().length == 0</span> ? null : injector.getParametersInjectors(constructor, constructor.getParameterAnnotations(), constructor.getGenericParameterTypes());",
		"rightlines" : "return  <span class=\'token add\' > constructionProxy.getParameters().isEmpty()</span> ? null : injector.getParametersInjectors(constructionProxy.getMember(), constructionProxy.getParameters());"
	},
	{
		"linetupleid" : 62208,
		"leftlines" : "super(tokens, sourcePositions, false,  <span class=\'token del\' >  <span class=\'token mv\' > AccDefault</span></span>);",
		"rightlines" : "super(tokens, sourcePositions, false,  <span class=\'token add\' > ClassFileConstants. <span class=\'token mv\' > AccDefault</span></span>);"
	},
	{
		"linetupleid" : 97109,
		"leftlines" : "Object[] pp = { String.valueOf(ch),  <span class=\'token del\' > new Integer( <span class=\'token mv\' > repeatCount</span>)</span> };",
		"rightlines" : "Object[] pp = { String.valueOf(ch),  <span class=\'token add\' >  <span class=\'token mv\' > repeatCount</span></span> };"
	},
	{
		"linetupleid" : 97123,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > view</span></span>.processKeyEvent(evt);",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > view</span>.getInputHandler()</span>.processKeyEvent(evt,  <span class=\'token add\' > View.VIEW</span>,  <span class=\'token add\' > false</span>);"
	},
	{
		"linetupleid" : 1069,
		"leftlines" : " <span class=\'token del\' > writeLine(\"          );\");</span>",
		"rightlines" : " <span class=\'token add\' > out.closeScope(\");\");</span>"
	},
	{
		"linetupleid" : 8767,
		"leftlines" : "repository =  <span class=\'token del\' > new Repository()</span>;",
		"rightlines" : "repository =  <span class=\'token add\' > new DeploymentRepository()</span>;"
	},
	{
		"linetupleid" : 80363,
		"leftlines" : "continue  <span class=\'token del\' > nextMethod</span>;",
		"rightlines" : "continue  <span class=\'token add\' > next</span>;"
	},
	{
		"linetupleid" : 5840,
		"leftlines" : "localRepository.setLocation(new File(System.getProperty(\"user.home\"), \".m2/repository\"));",
		"rightlines" : "localRepository.setLocation(new File( <span class=\'token add\' > settings.getLocalRepository()</span>));"
	},
	{
		"linetupleid" : 10289,
		"leftlines" : " <span class=\'token del\' > super</span>(message,  <span class=\'token del\' >  <span class=\'token mv\' > cause</span></span>);",
		"rightlines" : " <span class=\'token add\' > this</span>( <span class=\'token add\' > projectId</span>, message,  <span class=\'token add\' > pomLocation</span>,  <span class=\'token add\' > (Throwable)  <span class=\'token mv\' > cause</span></span>);"
	},
	{
		"linetupleid" : 82453,
		"leftlines" : " <span class=\'token del\' > if (shouldAnalyseResource) </span>",
		"rightlines" : " <span class=\'token add\' > if (var instanceof LocalVariableBinding && flowInfo.reachMode() == FlowInfo.REACHABLE && (FakedTrackingVariable.isAnyCloseable(this.expression.resolvedType) || this.expression.resolvedType == TypeBinding.NULL)) </span>"
	},
	{
		"linetupleid" : 62661,
		"leftlines" : "case  <span class=\'token del\' >  <span class=\'token mv\' > SearchPattern</span>. <span class=\'token mv\' > R_EXACT_MATCH</span> +  <span class=\'token mv\' > SearchPattern</span>. <span class=\'token mv\' > R_CASE_SENSITIVE</span></span>:\n",
		"rightlines" : "case  <span class=\'token add\' >  <span class=\'token mv\' > SearchPattern</span>. <span class=\'token mv\' > R_EXACT_MATCH</span> |  <span class=\'token mv\' > SearchPattern</span>. <span class=\'token mv\' > R_CASE_SENSITIVE</span></span>:\n"
	},
	{
		"linetupleid" : 8770,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token del\' > i18n.getBundle(\"site-plugin\",  <span class=\'token mv\' > locale</span>).getLocale(). <span class=\'token mv\' > getLanguage</span>(). <span class=\'token mv\' > equals</span>( <span class=\'token mv\' > locale.getLanguage()</span>)</span></span>) ",
		"rightlines" : "if (! <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > locale.getLanguage()</span>. <span class=\'token mv\' > equals</span>(DEFAULT_LOCALE. <span class=\'token mv\' > getLanguage</span>())</span></span>) "
	},
	{
		"linetupleid" : 13237,
		"leftlines" : "MavenExecutionPlan executionPlan = calculateExecutionPlan(session, goals.toArray(new String[] {}));",
		"rightlines" : "MavenExecutionPlan executionPlan = calculateExecutionPlan(session, goals.toArray(new String[ <span class=\'token add\' > goals.size()</span>]));"
	},
	{
		"linetupleid" : 54861,
		"leftlines" : "switch( <span class=\'token del\' > classOrInterface</span>)\n",
		"rightlines" : "switch( <span class=\'token add\' > this.typeSuffix</span>)\n"
	},
	{
		"linetupleid" : 54951,
		"leftlines" : "case  <span class=\'token del\' >  <span class=\'token mv\' > LOCAL</span></span>:\n",
		"rightlines" : "case  <span class=\'token add\' > Binding. <span class=\'token mv\' > LOCAL</span></span>:\n"
	},
	{
		"linetupleid" : 54991,
		"leftlines" : "bits |=  <span class=\'token del\' >  <span class=\'token mv\' > LOCAL</span></span>;",
		"rightlines" : "bits |=  <span class=\'token add\' > Binding. <span class=\'token mv\' > LOCAL</span></span>;"
	},
	{
		"linetupleid" : 55046,
		"leftlines" : "case  <span class=\'token del\' > BindingIds</span>.FIELD:\n",
		"rightlines" : "case  <span class=\'token add\' > Binding</span>.FIELD:\n"
	},
	{
		"linetupleid" : 55103,
		"leftlines" : "accessMethod = new  <span class=\'token del\' > SyntheticAccessMethodBinding</span>(targetMethod, isSuperAccess, this);",
		"rightlines" : "accessMethod = new  <span class=\'token add\' > SyntheticMethodBinding</span>(targetMethod, isSuperAccess, this);"
	},
	{
		"linetupleid" : 47372,
		"leftlines" : "folder.create( <span class=\'token del\' > force</span> ? IResource.FORCE | IResource.KEEP_HISTORY : IResource.KEEP_HISTORY, true, getSubProgressMonitor(1));",
		"rightlines" : "folder.create( <span class=\'token add\' > forceFlag</span> ? IResource.FORCE | IResource.KEEP_HISTORY : IResource.KEEP_HISTORY, true, getSubProgressMonitor(1));"
	},
	{
		"linetupleid" : 89933,
		"leftlines" : "currentToken = new RETokenWordBoundary( <span class=\'token del\' > m_subIndex</span>, RETokenWordBoundary.BEGIN | RETokenWordBoundary.END, true);",
		"rightlines" : "currentToken = new RETokenWordBoundary( <span class=\'token add\' > subIndex</span>, RETokenWordBoundary.BEGIN | RETokenWordBoundary.END, true);"
	},
	{
		"linetupleid" : 89994,
		"leftlines" : "RETokenBackRef(int  <span class=\'token del\' > f_subIndex</span>, int  <span class=\'token del\' > mynum</span>, boolean  <span class=\'token del\' > ins</span>)",
		"rightlines" : "RETokenBackRef(int  <span class=\'token add\' > subIndex</span>, int  <span class=\'token add\' > num</span>, boolean  <span class=\'token add\' > insens</span>)"
	},
	{
		"linetupleid" : 97149,
		"leftlines" : " <span class=\'token del\' > newFiles[startIndex +  <span class=\'token mv\' > i</span> + 1]</span> = new Entry(list.get(i), entry.level + 1, entry);",
		"rightlines" : " <span class=\'token add\' > subdirFiles[ <span class=\'token mv\' > i</span>]</span> = new Entry(list.get(i), entry.level + 1, entry);"
	},
	{
		"linetupleid" : 70998,
		"leftlines" : " <span class=\'token del\' > ReferenceBinding</span> currentType =  <span class=\'token del\' >  <span class=\'token mv\' > invocationType</span></span>;",
		"rightlines" : " <span class=\'token add\' > TypeBinding</span> currentType =  <span class=\'token add\' >  <span class=\'token mv\' > invocationType</span>.erasure()</span>;"
	},
	{
		"linetupleid" : 94747,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 94748,
		"leftlines" : "rem = ring[ <span class=\'token del\' >  <span class=\'token mv\' > ring</span>. <span class=\'token mv\' > length</span> -  <span class=\'token mv\' > index</span> +  <span class=\'token mv\' > count</span></span>];",
		"rightlines" : "rem = ring[ <span class=\'token add\' >  <span class=\'token mv\' > ring</span>. <span class=\'token mv\' > length</span> +  <span class=\'token mv\' > index</span> -  <span class=\'token mv\' > count</span></span>];"
	},
	{
		"linetupleid" : 99351,
		"leftlines" : "Dimension dim = new Dimension(Math.max(fm.charWidth(\' <span class=\'token del\' > -</span>\'), fm.charWidth(\'R\')) + 1, fm.getHeight());",
		"rightlines" : "Dimension dim = new Dimension(Math.max(fm.charWidth(\' <span class=\'token add\' > r</span>\'), fm.charWidth(\'R\')) + 1, fm.getHeight());"
	},
	{
		"linetupleid" : 55224,
		"leftlines" : "assertEquals(\"should have one class\", \"element:Z0021Z    completion:Z0021Z    relevance:\" +  <span class=\'token del\' > ( <span class=\'token mv\' > R_DEFAULT</span> +  <span class=\'token mv\' > R_INTERESTING</span> +  <span class=\'token mv\' > R_CASE</span> +  <span class=\'token mv\' > R_UNQUALIFIED</span>)</span> + \"\\n\" + \"element:Z0021ZZ    completion:Z0021ZZ    relevance:\" + ( <span class=\'token del\' >  <span class=\'token mv\' > R_DEFAULT + R_INTERESTING + R_CASE + R_UNQUALIFIED</span></span>), requestor.getResults());",
		"rightlines" : "assertEquals(\"should have one class\", \"element:Z0021Z    completion:Z0021Z    relevance:\" +  <span class=\'token add\' > ( <span class=\'token mv\' > R_DEFAULT</span> +  <span class=\'token mv\' > R_INTERESTING</span> +  <span class=\'token mv\' > R_CASE</span> +  <span class=\'token mv\' > R_UNQUALIFIED</span> + R_NON_RESTRICTED)</span> + \"\\n\" + \"element:Z0021ZZ    completion:Z0021ZZ    relevance:\" + ( <span class=\'token add\' >  <span class=\'token mv\' > R_DEFAULT + R_INTERESTING + R_CASE + R_UNQUALIFIED</span> + R_NON_RESTRICTED</span>), requestor.getResults());"
	},
	{
		"linetupleid" : 4079,
		"leftlines" : "value =  <span class=\'token del\' >  <span class=\'token mv\' > parameter.getDefaultValue()</span></span>;",
		"rightlines" : "value =  <span class=\'token add\' > PluginParameterExpressionEvaluator.evaluate( <span class=\'token mv\' > parameter.getDefaultValue()</span>, session)</span>;"
	},
	{
		"linetupleid" : 10396,
		"leftlines" : "if (report && !( <span class=\'token del\' > plugin</span> instanceof MavenReport)) ",
		"rightlines" : "if (report && !( <span class=\'token add\' > mojo</span> instanceof MavenReport)) "
	},
	{
		"linetupleid" : 94761,
		"leftlines" : "super(\"favorites\", DELETE_CAP | LOW_LATENCY_CAP);",
		"rightlines" : "super(\"favorites\", DELETE_CAP | LOW_LATENCY_CAP,  <span class=\'token add\' > new String[] { EA_TYPE }</span>);"
	},
	{
		"linetupleid" : 94768,
		"leftlines" : "this.extAttrs = new String[]  <span class=\'token del\' > { EA_SIZE_OR_TYPE, EA_STATUS, EA_MODIFIED }</span>;",
		"rightlines" : "this.extAttrs = new String[]  <span class=\'token add\' > { EA_SIZE, EA_TYPE }</span>;"
	},
	{
		"linetupleid" : 69636,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 1125,
		"leftlines" : "return newMapBinder(binder, Key.get(MapBinder.< <span class=\'token del\' >  <span class=\'token mv\' > K</span></span>, V>mapOf( <span class=\'token del\' >  <span class=\'token mv\' > keyType</span></span>, valueType), annotation), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType), annotation), Multibinder.<K>newSetBinder(binder, keyType, annotation), Multibinder.<V>newSetBinder(binder, valueType, annotation));",
		"rightlines" : "return newMapBinder(binder, valueType, Key.get(MapBinder.<K, V>mapOf(keyType, valueType), annotation), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType), annotation), Multibinder.< <span class=\'token add\' > Entry< <span class=\'token mv\' > K</span>, Provider<V>></span>>newSetBinder(binder,  <span class=\'token add\' > entryOfProviderOf( <span class=\'token mv\' > keyType</span>, valueType)</span>, annotation));"
	},
	{
		"linetupleid" : 57768,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > Outer</span>< <span class=\'token mv\' > String</span>>. <span class=\'token mv\' > Inner</span><Integer>.InnerInner< <span class=\'token mv\' > Number</span>></span> in =  <span class=\'token del\' >  <span class=\'token mv\' > new Outer<String>()</span>.new Inner<Integer>()</span>.new  <span class=\'token del\' > InnerInner< <span class=\'token mv\' > Number</span>></span>();",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > Outer</span>< <span class=\'token mv\' > String</span>>. <span class=\'token mv\' > Inner</span>< <span class=\'token mv\' > Number</span>></span> in =  <span class=\'token add\' >  <span class=\'token mv\' > new Outer<String>()</span></span>.new  <span class=\'token add\' > Inner< <span class=\'token mv\' > Number</span>></span>();"
	},
	{
		"linetupleid" : 94796,
		"leftlines" : "return  <span class=\'token del\' > (Edit)  <span class=\'token mv\' > c</span>.undos.get( <span class=\'token mv\' > c</span>.undos.size() - 1)</span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > c</span>.last</span>;"
	},
	{
		"linetupleid" : 10477,
		"leftlines" : "throw  <span class=\'token del\' >  <span class=\'token mv\' > e</span></span>;",
		"rightlines" : "throw  <span class=\'token add\' > new PluginExecutionException(mojoExecution, project,  <span class=\'token mv\' > e</span>)</span>;"
	},
	{
		"linetupleid" : 94834,
		"leftlines" : "tokenHandler.init(textArea.lineSegment, painter.getStyles(), painter.getFontRenderContext(), painter, out, ( <span class=\'token del\' >  <span class=\'token mv\' > textArea</span>.getDisplayManager()</span>.softWrap ?  <span class=\'token del\' >  <span class=\'token mv\' > textArea</span>.getDisplayManager()</span>.wrapMargin : 0.0f));",
		"rightlines" : "tokenHandler.init(textArea.lineSegment, painter.getStyles(), painter.getFontRenderContext(), painter, out, ( <span class=\'token add\' >  <span class=\'token mv\' > textArea</span>.displayManager</span>.softWrap ?  <span class=\'token add\' >  <span class=\'token mv\' > textArea</span>.displayManager</span>.wrapMargin : 0.0f));"
	},
	{
		"linetupleid" : 66518,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 52628,
		"leftlines" : "fCreatedElement = ( <span class=\'token del\' >  <span class=\'token mv\' > DOMNode</span></span>) child;",
		"rightlines" : "fCreatedElement = ( <span class=\'token add\' > org.eclipse.jdt.internal.core.jdom. <span class=\'token mv\' > DOMNode</span></span>) child;"
	},
	{
		"linetupleid" : 1223,
		"leftlines" : "super(injector, key, SourceProviders.UNKNOWN_SOURCE, new ConstantFactory<T>(value), Scopes.NO_SCOPE);",
		"rightlines" : "super(injector, key, SourceProviders.UNKNOWN_SOURCE, new ConstantFactory<T>(value), Scopes.NO_SCOPE,  <span class=\'token add\' > LoadStrategy.LAZY</span>);"
	},
	{
		"linetupleid" : 8784,
		"leftlines" : "assert  <span class=\'token del\' > ( <span class=\'token mv\' > true == true</span>)</span>;",
		"rightlines" : "assert  <span class=\'token add\' >  <span class=\'token mv\' > true == true</span></span> :  <span class=\'token add\' > \"true was not true\"</span>;"
	},
	{
		"linetupleid" : 1233,
		"leftlines" : "for (final BindingImpl<?> binding :  <span class=\'token del\' >  <span class=\'token mv\' > injector.explicitBindings.values()</span></span>) ",
		"rightlines" : "for (final BindingImpl<?> binding :  <span class=\'token add\' > concat( <span class=\'token mv\' > injector.explicitBindings.values()</span>, injector.jitBindings.values())</span>) "
	},
	{
		"linetupleid" : 4113,
		"leftlines" : "for ( <span class=\'token del\' > int</span> i =  <span class=\'token del\' > 0</span>;  <span class=\'token del\' >  <span class=\'token mv\' > i</span> < classpathElements.length</span>; i++) ",
		"rightlines" : "for ( <span class=\'token add\' > Iterator</span> i =  <span class=\'token add\' > testClasspathElements.iterator()</span>;  <span class=\'token add\' >  <span class=\'token mv\' > i</span>.hasNext()</span>; ) "
	},
	{
		"linetupleid" : 15219,
		"leftlines" : "throw  <span class=\'token del\' > new ModelBuildingException( <span class=\'token mv\' > problems</span>.getRootModel(),  <span class=\'token mv\' > problems</span>.getRootModelId(),  <span class=\'token mv\' > problems</span>.getProblems())</span>;",
		"rightlines" : "throw  <span class=\'token add\' >  <span class=\'token mv\' > problems</span>.newModelBuildingException()</span>;"
	},
	{
		"linetupleid" : 90327,
		"leftlines" : "String[]  <span class=\'token del\' > args</span> = { io. <span class=\'token del\' > getMessage</span>() };",
		"rightlines" : "String[]  <span class=\'token add\' > pp</span> = {  <span class=\'token add\' > path</span>, io. <span class=\'token add\' > toString</span>() };"
	},
	{
		"linetupleid" : 1330,
		"leftlines" : "for (Object toInject :  <span class=\'token del\' >  <span class=\'token mv\' > outstandingInjections</span>.keySet()</span>) ",
		"rightlines" : "for (Object toInject :  <span class=\'token add\' >  <span class=\'token mv\' > outstandingInjections</span></span>) "
	},
	{
		"linetupleid" : 1331,
		"leftlines" : "for (Object toInject :  <span class=\'token del\' > new ArrayList<Object>( <span class=\'token mv\' > outstandingInjections</span>.keySet())</span>) ",
		"rightlines" : "for (Object toInject :  <span class=\'token add\' > Lists.newArrayList( <span class=\'token mv\' > outstandingInjections</span>)</span>) "
	},
	{
		"linetupleid" : 1339,
		"leftlines" : "@SuppressWarnings( <span class=\'token del\' > { \"UnnecessaryLocalVariable\",  <span class=\'token mv\' > \"unchecked\"</span> }</span>) BindingImpl<T> binding = (BindingImpl<T>) createProviderBinding((Key) key, LoadStrategy.LAZY);",
		"rightlines" : "@SuppressWarnings( <span class=\'token add\' >  <span class=\'token mv\' > \"unchecked\"</span></span>) BindingImpl<T> binding = (BindingImpl<T>) createProviderBinding((Key) key, LoadStrategy.LAZY);"
	},
	{
		"linetupleid" : 1341,
		"leftlines" : "return ( <span class=\'token del\' >  <span class=\'token mv\' > List</span><BindingImpl< <span class=\'token mv\' > T</span>>></span>)  <span class=\'token del\' > map. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > type</span>)</span>;",
		"rightlines" : "return ( <span class=\'token add\' >  <span class=\'token mv\' > List</span><Binding< <span class=\'token mv\' > T</span>>></span>)  <span class=\'token add\' > (List) multimap. <span class=\'token mv\' > get</span>( <span class=\'token mv\' > type</span>)</span>;"
	},
	{
		"linetupleid" : 1344,
		"leftlines" : " <span class=\'token del\' > this. <span class=\'token mv\' > methodInvoker</span></span> = new MethodInvoker();",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > methodInvoker</span></span> = new MethodInvoker();"
	},
	{
		"linetupleid" : 1346,
		"leftlines" : "List<Dependency<?>> dependencies =  <span class=\'token del\' > new ArrayList<Dependency<?>>()</span>;",
		"rightlines" : "List<Dependency<?>> dependencies =  <span class=\'token add\' > Lists.newArrayList()</span>;"
	},
	{
		"linetupleid" : 80420,
		"leftlines" : "if ( <span class=\'token del\' > (this.bits & IsReachable) == 0</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > this.statements == null</span>) "
	},
	{
		"linetupleid" : 98597,
		"leftlines" : " <span class=\'token del\' > this. <span class=\'token mv\' > skipBinary</span></span> = jEdit.getBooleanProperty(\"search.skipBinary.toggle\");",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > skipBinary</span></span> = jEdit.getBooleanProperty(\"search.skipBinary.toggle\");"
	},
	{
		"linetupleid" : 90395,
		"leftlines" : "d.width += ( <span class=\'token del\' > getToolkit(). <span class=\'token mv\' > getFontMetrics</span>( <span class=\'token mv\' > acceleratorFont</span>).stringWidth(shortcut) + 10</span>);",
		"rightlines" : "d.width += ( <span class=\'token add\' >  <span class=\'token mv\' > getFontMetrics</span>( <span class=\'token mv\' > acceleratorFont</span>).stringWidth(shortcut) + 10</span>);"
	},
	{
		"linetupleid" : 94951,
		"leftlines" : "case  <span class=\'token del\' > 4</span>:\n",
		"rightlines" : "case  <span class=\'token add\' > 3</span>:\n"
	},
	{
		"linetupleid" : 69728,
		"leftlines" : "return  <span class=\'token del\' > this.superAccess</span>;",
		"rightlines" : "return  <span class=\'token add\' > (this.bits & ASTNode.SuperAccess) != 0</span>;"
	},
	{
		"linetupleid" : 71020,
		"leftlines" : "printProblem(\"Unexpected annotations within element: \" + expectedDecl.getAttribute( <span class=\'token del\' > SNAME</span>));",
		"rightlines" : "printProblem(\"Unexpected annotations within element: \" + expectedDecl.getAttribute( <span class=\'token add\' > SNAME_TAG</span>));"
	},
	{
		"linetupleid" : 1361,
		"leftlines" : "String  <span class=\'token del\' > key</span> = (String)  <span class=\'token del\' > entry.getKey()</span>;",
		"rightlines" : "String  <span class=\'token add\' > propertyName</span> = (String)  <span class=\'token add\' > e.nextElement()</span>;"
	},
	{
		"linetupleid" : 7701,
		"leftlines" : " <span class=\'token del\' > freshenSupplementalMetadata</span>(snapshotSource, snapshotTarget, transaction, artifactReporter, reportOnly);",
		"rightlines" : " <span class=\'token add\' > mergeMetadata</span>( <span class=\'token add\' > metadataSource</span>,  <span class=\'token add\' > metadataTarget</span>, transaction, artifactReporter, reportOnly);"
	},
	{
		"linetupleid" : 1383,
		"leftlines" : "String message = getMember() != null ?  <span class=\'token del\' > String.format(ErrorMessages.CANNOT_INJECT_NULL_INTO_MEMBER,  <span class=\'token mv\' > source</span>,  <span class=\'token mv\' > getMember</span>())</span> :  <span class=\'token del\' > String.format(ErrorMessages.CANNOT_INJECT_NULL,  <span class=\'token mv\' > source</span>)</span>;",
		"rightlines" : "String message = getMember() != null ?  <span class=\'token add\' > ErrorMessage.cannotInjectNullIntoMember( <span class=\'token mv\' > source</span>,  <span class=\'token mv\' > getMember</span>()).toString()</span> :  <span class=\'token add\' > ErrorMessage.cannotInjectNull( <span class=\'token mv\' > source</span>).toString()</span>;"
	},
	{
		"linetupleid" : 1480,
		"leftlines" : "throw  <span class=\'token del\' > new ResolveFailedException(ErrorMessage.missingBinding( <span class=\'token mv\' > key</span>))</span>;",
		"rightlines" : "throw  <span class=\'token add\' > errors.missingImplementation( <span class=\'token mv\' > key</span>).toException()</span>;"
	},
	{
		"linetupleid" : 1493,
		"leftlines" : "public  <span class=\'token del\' >  <span class=\'token mv\' > Collection</span><Dependency<?>></span> getDependencies()",
		"rightlines" : "public  <span class=\'token add\' >  <span class=\'token mv\' > Collection</span><InjectionPoint<?>></span> getDependencies()"
	},
	{
		"linetupleid" : 1509,
		"leftlines" : " <span class=\'token del\' > addError(source, ErrorMessage. <span class=\'token mv\' > missingImplementation</span>())</span>;",
		"rightlines" : " <span class=\'token add\' > errors. <span class=\'token mv\' > missingImplementation</span>(key)</span>;"
	},
	{
		"linetupleid" : 1550,
		"leftlines" : " catch (InvocationTargetException  <span class=\'token del\' > e</span>) ",
		"rightlines" : " catch (InvocationTargetException  <span class=\'token add\' > userException</span>) "
	},
	{
		"linetupleid" : 1567,
		"leftlines" : "return injectionPoint.checkForNull(provider.get(), source);",
		"rightlines" : "return injectionPoint.checkForNull( <span class=\'token add\' > errors</span>,  <span class=\'token add\' > result</span>, source);"
	},
	{
		"linetupleid" : 1568,
		"leftlines" : "return injectionPoint.checkForNull(provider.get(), source);",
		"rightlines" : "return injectionPoint.checkForNull( <span class=\'token add\' > errors</span>,  <span class=\'token add\' > result</span>, source);"
	},
	{
		"linetupleid" : 1585,
		"leftlines" : "public Errors conversionTypeError( <span class=\'token del\' > Object converted</span>,  <span class=\'token del\' > TypeLiteral<?> type</span>)",
		"rightlines" : "public Errors conversionTypeError( <span class=\'token add\' > String stringValue</span>,  <span class=\'token add\' > Object source</span>,  <span class=\'token add\' > TypeLiteral<?> type</span>,  <span class=\'token add\' > MatcherAndConverter<?> matchingConverter</span>,  <span class=\'token add\' > Object converted</span>)"
	},
	{
		"linetupleid" : 5950,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > Artifact.SCOPE_COMPILE.equals(a.getScope())</span></span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > Artifact.SCOPE_COMPILE.equals(a.getScope())</span> || Artifact.SCOPE_PROVIDED.equals(a.getScope())</span>) "
	},
	{
		"linetupleid" : 66650,
		"leftlines" : "int index = CharOperation.hashCode(key) %  <span class=\'token del\' > valueTable. <span class=\'token mv\' > length</span></span>;",
		"rightlines" : "int  <span class=\'token add\' >  <span class=\'token mv\' > length</span></span> = keyTable.length, index = CharOperation.hashCode(key) % length;"
	},
	{
		"linetupleid" : 71258,
		"leftlines" : "PackageBinding packageBinding = computePackageFrom(compoundName);",
		"rightlines" : "PackageBinding packageBinding = computePackageFrom(compoundName,  <span class=\'token add\' > false</span>);"
	},
	{
		"linetupleid" : 71282,
		"leftlines" : "this.synthetics = new HashMap[ <span class=\'token del\' > EMUL_MAX_VALUE</span>];",
		"rightlines" : "this.synthetics = new HashMap[ <span class=\'token add\' > MAX_SYNTHETICS</span>];"
	},
	{
		"linetupleid" : 4155,
		"leftlines" : "super(localRepository, eventDispatcher, properties, goals);",
		"rightlines" : "super(localRepository,  <span class=\'token add\' > userModel</span>, eventDispatcher, properties, goals);"
	},
	{
		"linetupleid" : 90443,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token mv\' > bmethod</span></span>. <span class=\'token del\' > invokeDeclaredMethod</span>(new Object[] { method.getName(), args }, declaringInterpreter);",
		"rightlines" : "return  <span class=\'token add\' > Primitive</span>. <span class=\'token add\' > unwrap</span>( <span class=\'token add\' >  <span class=\'token mv\' > bmethod</span>.invokeDeclaredMethod(new Object[] { method.getName(), args }, declaringInterpreter, callstack, null)</span>);"
	},
	{
		"linetupleid" : 1706,
		"leftlines" : "for (Annotation annotation :  <span class=\'token del\' > implementation.getAnnotations()</span>) ",
		"rightlines" : "for (Annotation annotation :  <span class=\'token add\' > annotations</span>) "
	},
	{
		"linetupleid" : 7750,
		"leftlines" : "while ( <span class=\'token del\' > ( <span class=\'token mv\' > line</span> = reader.readLine()) != null</span>) ",
		"rightlines" : "while ( <span class=\'token add\' >  <span class=\'token mv\' > line</span> != null</span>) "
	},
	{
		"linetupleid" : 41243,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 80512,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > ZERO_ARGUMENT_OPTIONS</span></span>.add(\"-progress\");",
		"rightlines" : " <span class=\'token add\' > Options. <span class=\'token mv\' > ZERO_ARGUMENT_OPTIONS</span></span>.add(\"-progress\");"
	},
	{
		"linetupleid" : 71452,
		"leftlines" : " <span class=\'token del\' > IJavaElement</span> element = ( <span class=\'token del\' > IJavaElement</span>) owner;",
		"rightlines" : " <span class=\'token add\' > JavaElement</span> element = ( <span class=\'token add\' > JavaElement</span>) owner;"
	},
	{
		"linetupleid" : 4199,
		"leftlines" : "String key =  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > def</span>.getId()</span></span>;",
		"rightlines" : "String key =  <span class=\'token add\' >  <span class=\'token add\' > constructPluginKey( <span class=\'token mv\' > def</span>)</span></span>;"
	},
	{
		"linetupleid" : 4216,
		"leftlines" : "if (expression != null  <span class=\'token del\' > &</span> expression.startsWith(\"#component\")) ",
		"rightlines" : "if (expression != null  <span class=\'token add\' > &&</span> expression.startsWith(\"#component\")) "
	},
	{
		"linetupleid" : 6051,
		"leftlines" : " <span class=\'token del\' > Reporter</span>  <span class=\'token del\' > childReporter</span> = ( <span class=\'token del\' > Reporter</span>) childReportersByKey.get( <span class=\'token del\' > parentReporter</span>.getKey());",
		"rightlines" : " <span class=\'token add\' > ReportPlugin</span>  <span class=\'token add\' > childReportPlugin</span> = ( <span class=\'token add\' > ReportPlugin</span>) childReportersByKey.get( <span class=\'token add\' > parentReportPlugin</span>.getKey());"
	},
	{
		"linetupleid" : 66692,
		"leftlines" : "if ( <span class=\'token del\' > !exists()</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > e.isDoesNotExist() && (elements = e.getJavaModelStatus().getElements()).length > 0 && elements[0] == this</span>) "
	},
	{
		"linetupleid" : 1756,
		"leftlines" : "for ( <span class=\'token del\' >  <span class=\'token mv\' > Object</span> toInject</span> :  <span class=\'token del\' >  <span class=\'token mv\' > outstandingInjections</span></span>) ",
		"rightlines" : "for ( <span class=\'token add\' > Map.Entry< <span class=\'token mv\' > Object</span>,  <span class=\'token mv\' > Object</span>> entry</span> :  <span class=\'token add\' >  <span class=\'token mv\' > outstandingInjections</span>.entrySet()</span>) "
	},
	{
		"linetupleid" : 1769,
		"leftlines" : "return new ClassBindingImpl<T>(this,  <span class=\'token del\' > key</span>, source, scopedFactory, scope, lateBoundConstructor, loadStrategy);",
		"rightlines" : "return new ClassBindingImpl<T>(this,  <span class=\'token add\' > keyForRawType</span>, source, scopedFactory, scope, lateBoundConstructor, loadStrategy);"
	},
	{
		"linetupleid" : 1775,
		"leftlines" : " <span class=\'token del\' > command.getTarget()</span>. <span class=\'token del\' > acceptVisitor</span>(new  <span class=\'token del\' > NoOpBindTargetVisitor< <span class=\'token mv\' > T</span>,  <span class=\'token mv\' > Void</span>></span>());",
		"rightlines" : " <span class=\'token add\' > binding</span>. <span class=\'token add\' > acceptTargetVisitor</span>(new  <span class=\'token add\' > DefaultBindTargetVisitor< <span class=\'token mv\' > T</span>,  <span class=\'token mv\' > Void</span>></span>());"
	},
	{
		"linetupleid" : 90723,
		"leftlines" : "GrabKeyDialog.KeyBinding binding =  <span class=\'token del\' > getBindingAt(i)</span>;",
		"rightlines" : "GrabKeyDialog.KeyBinding binding[] =  <span class=\'token add\' > (GrabKeyDialog.KeyBinding[]) enum1.nextElement()</span>;"
	},
	{
		"linetupleid" : 99401,
		"leftlines" : "boolean emptyForNull =  <span class=\'token del\' > ( <span class=\'token mv\' > rulesForNull == null</span>)</span> ||  <span class=\'token del\' > ( <span class=\'token mv\' > rulesForNull</span>.size() == 0)</span>;",
		"rightlines" : "boolean emptyForNull =  <span class=\'token add\' >  <span class=\'token mv\' > rulesForNull == null</span></span> ||  <span class=\'token add\' >  <span class=\'token mv\' > rulesForNull</span>.isEmpty()</span>;"
	},
	{
		"linetupleid" : 47584,
		"leftlines" : "if (!checkTypeName(pattern.simpleName, patternString, fullyQualifiedTypeName,  <span class=\'token del\' >  <span class=\'token mv\' > pattern</span>. <span class=\'token mv\' > isCaseSensitive</span></span>)) ",
		"rightlines" : "if (!checkTypeName(pattern.simpleName, patternString, fullyQualifiedTypeName,  <span class=\'token add\' >  <span class=\'token mv\' > pattern</span>. <span class=\'token mv\' > isCaseSensitive</span>()</span>)) "
	},
	{
		"linetupleid" : 41271,
		"leftlines" : "Constant someConstant = FieldReference.getConstantFor(field,  <span class=\'token del\' > false</span>,  <span class=\'token del\' > this</span>, scope, place);",
		"rightlines" : "Constant someConstant = FieldReference.getConstantFor(field,  <span class=\'token add\' > this</span>,  <span class=\'token add\' > false</span>, scope);"
	},
	{
		"linetupleid" : 95135,
		"leftlines" : "textArea.setSelection(new Selection.Range(start -  <span class=\'token del\' >  <span class=\'token mv\' > match</span>[1]</span>, start -  <span class=\'token del\' >  <span class=\'token mv\' > match</span>[0]</span>));",
		"rightlines" : "textArea.setSelection(new Selection.Range(start -  <span class=\'token add\' >  <span class=\'token mv\' > match</span>.end</span>, start -  <span class=\'token add\' >  <span class=\'token mv\' > match</span>.start</span>));"
	},
	{
		"linetupleid" : 1819,
		"leftlines" : "elements.add(new  <span class=\'token del\' > RequestInjection</span>(getSource(), instances));",
		"rightlines" : "elements.add(new  <span class=\'token add\' > InjectionRequest</span>(getSource(), instances));"
	},
	{
		"linetupleid" : 95167,
		"leftlines" : "for (int i = 0; i <  <span class=\'token del\' > dimensions</span>.length; i++) ",
		"rightlines" : "for (int i = 0; i <  <span class=\'token add\' > definedDimensions</span>.length; i++) "
	},
	{
		"linetupleid" : 95201,
		"leftlines" : "argValues[i] = NameSpace.getAssignableForm(argValues[i],  <span class=\'token del\' > method.params. <span class=\'token mv\' > argTypes</span></span>[i]);",
		"rightlines" : "argValues[i] = NameSpace.getAssignableForm(argValues[i],  <span class=\'token add\' >  <span class=\'token mv\' > argTypes</span></span>[i]);"
	},
	{
		"linetupleid" : 95237,
		"leftlines" : "throw  <span class=\'token del\' > new InterpreterError(\"internal error 2893749283\")</span>;",
		"rightlines" : "throw  <span class=\'token add\' > new UtilEvalError(\"Error in LHS: \" + value)</span>;"
	},
	{
		"linetupleid" : 95272,
		"leftlines" : "if ( <span class=\'token del\' > o</span> instanceof Short) ",
		"rightlines" : "if ( <span class=\'token add\' > value</span> instanceof Short) "
	},
	{
		"linetupleid" : 69907,
		"leftlines" : "if ( <span class=\'token del\' > firstInterfaceMethod == length</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > toSkip != null && toSkip[i] == -1</span>) "
	},
	{
		"linetupleid" : 95296,
		"leftlines" : "returnValue.substitutions = new String[ <span class=\'token del\' >  <span class=\'token mv\' > re.getNumSubs()</span></span>];",
		"rightlines" : "returnValue.substitutions = new String[ <span class=\'token add\' >  <span class=\'token mv\' > re.getNumSubs()</span> + 1</span>];"
	},
	{
		"linetupleid" : 13592,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token del\' > ModelUtils.cloneModel( <span class=\'token mv\' > superPomProvider.getSuperModel(\"4.0.0\")</span>)</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > superPomProvider.getSuperModel(\"4.0.0\")</span>.clone()</span></span>;"
	},
	{
		"linetupleid" : 13598,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > Map</span>< <span class=\'token mv\' > String</span>, Object></span> options = Collections.<String, Object>singletonMap(ModelReader.IS_STRICT, Boolean.valueOf(strict));",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > Map</span>< <span class=\'token mv\' > String</span>, ?></span> options = Collections.singletonMap(ModelReader.IS_STRICT, Boolean.valueOf(strict));"
	},
	{
		"linetupleid" : 67028,
		"leftlines" : "for (int  <span class=\'token del\' > p</span> = 0;  <span class=\'token del\' > p</span> < argCount;  <span class=\'token del\' > p</span>++) ",
		"rightlines" : "for (int  <span class=\'token add\' > iarg</span> = 0;  <span class=\'token add\' > iarg</span> < argCount;  <span class=\'token add\' > iarg</span>++) "
	},
	{
		"linetupleid" : 13615,
		"leftlines" : "for ( <span class=\'token del\' > MojoExecution mojoExecution</span> :  <span class=\'token del\' > lifecyclePlan</span>) ",
		"rightlines" : "for ( <span class=\'token add\' > TaskSegment taskSegment</span> :  <span class=\'token add\' > taskSegments</span>) "
	},
	{
		"linetupleid" : 62927,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > range</span> != null</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > range</span> >= 0</span>) "
	},
	{
		"linetupleid" : 13621,
		"leftlines" : "lifecycleListeners = new  <span class=\'token del\' >  <span class=\'token mv\' > ArrayList</span><LifecycleListener></span>();",
		"rightlines" : "lifecycleListeners = new  <span class=\'token add\' >  <span class=\'token mv\' > ArrayList</span><ExecutionListener></span>();"
	},
	{
		"linetupleid" : 13623,
		"leftlines" : "request. <span class=\'token del\' > setLifecycleListeners</span>(Arrays.< <span class=\'token del\' > LifecycleListener</span>>asList(new  <span class=\'token del\' > LifecycleEventLogger</span>(logger)));",
		"rightlines" : "request. <span class=\'token add\' > setExecutionListeners</span>(Arrays.< <span class=\'token add\' > ExecutionListener</span>>asList(new  <span class=\'token add\' > ExecutionEventLogger</span>(logger)));"
	},
	{
		"linetupleid" : 10683,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > id.append(\'@\').append(depId.toString().hashCode())</span></span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > id.append(\'@\').append(depId.toString().hashCode())</span>.append(\"/thread:\").append(Thread.currentThread().getId())</span>;"
	},
	{
		"linetupleid" : 97330,
		"leftlines" : "encoding.setSelectedItem(buffer.getStringProperty( <span class=\'token del\' > Buffer</span>.ENCODING));",
		"rightlines" : "encoding.setSelectedItem(buffer.getStringProperty( <span class=\'token add\' > JEditBuffer</span>.ENCODING));"
	},
	{
		"linetupleid" : 1875,
		"leftlines" : "if ((stage == Stage.PRODUCTION && binding.getScope() ==  <span class=\'token del\' > Scopes. <span class=\'token mv\' > SINGLETON</span></span>) || binding.getLoadStrategy() == LoadStrategy.EAGER) ",
		"rightlines" : "if ((stage == Stage.PRODUCTION && binding.getScope() ==  <span class=\'token add\' >  <span class=\'token mv\' > SINGLETON</span></span>) || binding.getLoadStrategy() == LoadStrategy.EAGER) "
	},
	{
		"linetupleid" : 95340,
		"leftlines" : "super( <span class=\'token del\' > MiscUtilities.getFileName( <span class=\'token mv\' > path</span>)</span>, path, PROTOCOL + \":\" + path, type, 0, false);",
		"rightlines" : "super( <span class=\'token add\' >  <span class=\'token mv\' > path</span></span>, path, PROTOCOL + \":\" + path, type, 0, false);"
	},
	{
		"linetupleid" : 67112,
		"leftlines" : "while ( <span class=\'token del\' >  <span class=\'token mv\' > keyTable</span></span>[index] != null) ",
		"rightlines" : "while ( <span class=\'token add\' > this. <span class=\'token mv\' > keyTable</span></span>[index] != null) "
	},
	{
		"linetupleid" : 15298,
		"leftlines" : "switch( <span class=\'token del\' > severity</span>)\n",
		"rightlines" : "switch( <span class=\'token add\' > req.getSeverity()</span>)\n"
	},
	{
		"linetupleid" : 1896,
		"leftlines" : "return new LinkedBindingImpl<T>(this, key,  <span class=\'token del\' > StackTraceElements.forType( <span class=\'token mv\' > type</span>)</span>, Scopes.<T>scope(key, this, internalFactory, scope), scope, Key.get(subclass), loadStrategy);",
		"rightlines" : "return new LinkedBindingImpl<T>(this, key,  <span class=\'token add\' >  <span class=\'token mv\' > type</span></span>, Scopes.<T>scope(key, this, internalFactory, scope), scope, Key.get(subclass), loadStrategy);"
	},
	{
		"linetupleid" : 90833,
		"leftlines" : "jEdit. <span class=\'token del\' > setProperty</span>(\"view.electricBorders\", electricBorders.isSelected() ?  <span class=\'token del\' > \" <span class=\'token mv\' > 3</span>\"</span> :  <span class=\'token del\' > \" <span class=\'token mv\' > 0</span>\"</span>);",
		"rightlines" : "jEdit. <span class=\'token add\' > setIntegerProperty</span>(\"view.electricBorders\", electricBorders.isSelected() ?  <span class=\'token add\' >  <span class=\'token mv\' > 3</span></span> :  <span class=\'token add\' >  <span class=\'token mv\' > 0</span></span>);"
	},
	{
		"linetupleid" : 38073,
		"leftlines" : " <span class=\'token del\' > try </span>",
		"rightlines" : " <span class=\'token add\' > try </span>"
	},
	{
		"linetupleid" : 41303,
		"leftlines" : " <span class=\'token del\' > char[] sig = primitive ? null : new char[ <span class=\'token mv\' > length</span>]</span>;",
		"rightlines" : " <span class=\'token add\' > int sigLength = arrayCount + 1 +  <span class=\'token mv\' > length</span> + 1</span>;"
	},
	{
		"linetupleid" : 67255,
		"leftlines" : NULL,
		"rightlines" : NULL
	},
	{
		"linetupleid" : 1909,
		"leftlines" : "public  <span class=\'token del\' > OldVersionBinding< <span class=\'token mv\' > String</span>></span> getOriginal()",
		"rightlines" : "public  <span class=\'token add\' > BindingImpl< <span class=\'token mv\' > String</span>></span> getOriginal()"
	},
	{
		"linetupleid" : 35630,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 35636,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 1931,
		"leftlines" : "this(source, \"An exception was caught and reported. Message: \" + throwable.getMessage(), ImmutableList.< <span class=\'token del\' > InjectionPoint</span>>of(), throwable);",
		"rightlines" : "this(source, \"An exception was caught and reported. Message: \" + throwable.getMessage(), ImmutableList.< <span class=\'token add\' > Dependency</span>>of(), throwable);"
	},
	{
		"linetupleid" : 1959,
		"leftlines" : "for ( <span class=\'token del\' > Parameter<?></span>  <span class=\'token del\' > parameter</span> :  <span class=\'token del\' >  <span class=\'token mv\' > entry.getValue()</span></span>. <span class=\'token del\' > getParameters</span>()) ",
		"rightlines" : "for ( <span class=\'token add\' > Dependency<?></span>  <span class=\'token add\' > dependency</span> :  <span class=\'token add\' >  <span class=\'token mv\' > entry.getValue()</span>.getInjectionPoint()</span>. <span class=\'token add\' > getDependencies</span>()) "
	},
	{
		"linetupleid" : 1963,
		"leftlines" : "out.openScope(\"public %s<%s<?>> getParameters() {\", List.class,  <span class=\'token del\' > Parameter</span>.class).openScope(\"return %s.<%s<?>>asList(\", Arrays.class,  <span class=\'token del\' > Parameter.class</span>);",
		"rightlines" : "out.openScope(\"public %s<%s<?>> getParameters() {\", List.class,  <span class=\'token add\' > Dependency</span>.class).openScope(\"return %s.<%s<?>>asList(\", Arrays.class,  <span class=\'token add\' > Dependency.class</span>);"
	},
	{
		"linetupleid" : 48110,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 42342,
		"leftlines" : " while ( <span class=\'token del\' > bytesRead > 0</span>);",
		"rightlines" : " while ( <span class=\'token add\' > amountRead != -1</span>);"
	},
	{
		"linetupleid" : 2027,
		"leftlines" : "this( <span class=\'token del\' >  <span class=\'token mv\' > source</span></span>, \"An exception was caught and reported. Message: \" + throwable.getMessage(), ImmutableList.<Dependency>of(), throwable);",
		"rightlines" : "this(\"An exception was caught and reported. Message: \" + throwable.getMessage(), throwable,  <span class=\'token add\' > ImmutableList.of( <span class=\'token mv\' > source</span>)</span>);"
	},
	{
		"linetupleid" : 2047,
		"leftlines" : "Errors errorsForMember = injectionPoint.isOptional() ? new Errors( <span class=\'token del\' >  <span class=\'token mv\' > injectionPoint</span>.getMember()</span>) :  <span class=\'token del\' >  <span class=\'token mv\' > errors</span>.withSource(injectionPoint.getMember())</span>;",
		"rightlines" : "Errors errorsForMember =  <span class=\'token add\' >  <span class=\'token mv\' > injectionPoint</span></span>.isOptional() ? new Errors(injectionPoint) :  <span class=\'token add\' >  <span class=\'token mv\' > errors</span></span>;"
	},
	{
		"linetupleid" : 2070,
		"leftlines" : "this( <span class=\'token del\' > message</span>,  <span class=\'token del\' > null</span>,  <span class=\'token del\' > ImmutableList.of(source)</span>);",
		"rightlines" : "this( <span class=\'token add\' > ImmutableList.of(source)</span>,  <span class=\'token add\' > message</span>,  <span class=\'token add\' > null</span>);"
	},
	{
		"linetupleid" : 2071,
		"leftlines" : "this(message,  <span class=\'token del\' > (Throwable) null</span>);",
		"rightlines" : "this( <span class=\'token add\' > ImmutableList.of()</span>, message,  <span class=\'token add\' > null</span>);"
	},
	{
		"linetupleid" : 2072,
		"leftlines" : "return new Message( <span class=\'token del\' > message.getMessage()</span>,  <span class=\'token del\' > message.getCause()</span>,  <span class=\'token del\' > stripDuplicates(sources)</span>);",
		"rightlines" : "return new Message( <span class=\'token add\' > stripDuplicates(sources)</span>,  <span class=\'token add\' > message.getMessage()</span>,  <span class=\'token add\' > message.getCause()</span>);"
	},
	{
		"linetupleid" : 35651,
		"leftlines" : " while ( <span class=\'token del\' >  <span class=\'token mv\' > token != TerminalSymbols.TokenNameEOF</span> && accuracyIndex < accuracies.length</span>);",
		"rightlines" : " while ( <span class=\'token add\' >  <span class=\'token mv\' > token != TerminalSymbols.TokenNameEOF</span></span>);"
	},
	{
		"linetupleid" : 97399,
		"leftlines" : "return XMLUtilities.findEntity(systemId, \"mirrors.dtd\",  <span class=\'token del\' > org.gjt.sp.jedit.options. <span class=\'token mv\' > PluginOptions</span></span>.class);",
		"rightlines" : "return XMLUtilities.findEntity(systemId, \"mirrors.dtd\",  <span class=\'token add\' >  <span class=\'token mv\' > PluginOptions</span></span>.class);"
	},
	{
		"linetupleid" : 97402,
		"leftlines" : "for ( <span class=\'token del\' > Iterator iter = resultNodes.iterator()</span>;  <span class=\'token del\' > iter.hasNext()</span>; ) ",
		"rightlines" : "for ( <span class=\'token add\' > int i = 0</span>;  <span class=\'token add\' > i < resultNodes.size()</span>;  <span class=\'token add\' > i++</span>) "
	},
	{
		"linetupleid" : 97409,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > String</span></span> paths[] = pathName.split(fileSepRegex);",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > String</span>[]</span> paths = pathName.split(fileSepRegex);"
	},
	{
		"linetupleid" : 97412,
		"leftlines" : "for ( <span class=\'token del\' > Iterator it = resultNodes.iterator()</span>;  <span class=\'token del\' > it.hasNext()</span>; ) ",
		"rightlines" : "for ( <span class=\'token add\' > int i = 0</span>;  <span class=\'token add\' > i < resultNodes.size()</span>;  <span class=\'token add\' > i++</span>) "
	},
	{
		"linetupleid" : 2118,
		"leftlines" : "Set<BindingImpl<?>> candidateBindings = ImmutableSet.copyOf(Iterables.concat( <span class=\'token del\' >  <span class=\'token mv\' > injector</span>.explicitBindings. <span class=\'token mv\' > values</span>()</span>, injector.jitBindings.values()));",
		"rightlines" : " <span class=\'token add\' > @SuppressWarnings(\"unchecked\")</span> Set<BindingImpl<?>> candidateBindings = ImmutableSet.copyOf(Iterables.concat( <span class=\'token add\' > (Collection)  <span class=\'token mv\' > injector</span>.state.getExplicitBindingsThisLevel(). <span class=\'token mv\' > values</span>()</span>, injector.jitBindings.values()));"
	},
	{
		"linetupleid" : 2124,
		"leftlines" : "public ConstantFactory( <span class=\'token del\' >  <span class=\'token mv\' > T</span> value</span>)",
		"rightlines" : "public ConstantFactory( <span class=\'token add\' > Initializable< <span class=\'token mv\' > T</span>> initializable</span>)"
	},
	{
		"linetupleid" : 2148,
		"leftlines" : "return new ToStringBuilder(Injector.class).add(\"bindings\",  <span class=\'token del\' > explicitBindings</span>).toString();",
		"rightlines" : "return new ToStringBuilder(Injector.class).add(\"bindings\",  <span class=\'token add\' > state.getExplicitBindingsThisLevel()</span>).toString();"
	},
	{
		"linetupleid" : 2149,
		"leftlines" : "for ( <span class=\'token del\' > Map.Entry<Object, Object> entry</span> :  <span class=\'token del\' > outstandingInjections.entrySet()</span>) ",
		"rightlines" : "for ( <span class=\'token add\' > InjectableReference<?> reference</span> :  <span class=\'token add\' > pendingInjection.values()</span>) "
	},
	{
		"linetupleid" : 13668,
		"leftlines" : "return  <span class=\'token del\' > filter</span>;",
		"rightlines" : "return  <span class=\'token add\' > resolutionFilter</span>;"
	},
	{
		"linetupleid" : 60136,
		"leftlines" : " <span class=\'token del\' > this.unit. <span class=\'token mv\' > types</span></span>[i] = convert((SourceType) typeInfo.getHandle(), compilationResult);",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token mv\' > types</span></span>[i] = convert((SourceType) typeInfo.getHandle(), compilationResult);"
	},
	{
		"linetupleid" : 91109,
		"leftlines" : "String[] args = {  <span class=\'token del\' >  <span class=\'token mv\' > name</span></span>, t.toString() };",
		"rightlines" : "String[] args = {  <span class=\'token add\' > jEdit.getProperty(\"plugin.\" +  <span class=\'token mv\' > name</span> + \". <span class=\'token mv\' > name</span>\",  <span class=\'token mv\' > name</span>)</span>, t.toString() };"
	},
	{
		"linetupleid" : 91111,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > System.getProperty(\"java.version\")</span>.compareTo( <span class=\'token mv\' > arg</span>)</span></span> < 0) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token add\' > MiscUtilities.compareStrings( <span class=\'token mv\' > System.getProperty(\"java.version\")</span>,  <span class=\'token mv\' > arg</span>, false)</span></span> < 0) "
	},
	{
		"linetupleid" : 91137,
		"leftlines" : " <span class=\'token del\' > int</span>[] retVal = new int[h * w];",
		"rightlines" : " <span class=\'token add\' > byte</span>[] retVal = new byte[h * w];"
	},
	{
		"linetupleid" : 91159,
		"leftlines" : "return  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > e1.title</span>.compareTo( <span class=\'token mv\' > e2.title</span>)</span></span>;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token add\' > MiscUtilities.compareStrings( <span class=\'token mv\' > e1.title</span>,  <span class=\'token mv\' > e2.title</span>, true)</span></span>;"
	},
	{
		"linetupleid" : 71564,
		"leftlines" : "if (this.canChangeResources &&  <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > this.project</span>.saveClasspath( <span class=\'token mv\' > this.newRawClasspath</span>,  <span class=\'token mv\' > this.newOutputLocation</span>)</span></span>) ",
		"rightlines" : "if (this.canChangeResources &&  <span class=\'token add\' >  <span class=\'token add\' > perProjectInfo.writeAndCacheClasspath( <span class=\'token mv\' > this.project</span>,  <span class=\'token mv\' > this.newRawClasspath</span>,  <span class=\'token mv\' > this.newOutputLocation</span>)</span></span>) "
	},
	{
		"linetupleid" : 35684,
		"leftlines" : null,
		"rightlines" : null
	},
	{
		"linetupleid" : 48911,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > constant</span></span> = Constant.NotAConstant;",
		"rightlines" : " <span class=\'token add\' > this. <span class=\'token mv\' > constant</span></span> = Constant.NotAConstant;"
	},
	{
		"linetupleid" : 48990,
		"leftlines" : "synchronized ( <span class=\'token del\' >  <span class=\'token mv\' > openBuffers</span></span>) ",
		"rightlines" : "synchronized ( <span class=\'token add\' > this. <span class=\'token mv\' > openBuffers</span></span>) "
	},
	{
		"linetupleid" : 2202,
		"leftlines" : "throw new ConfigurationException( <span class=\'token del\' >  <span class=\'token mv\' > errors</span></span>);",
		"rightlines" : "throw new ConfigurationException( <span class=\'token add\' >  <span class=\'token mv\' > errors</span>.getMessages()</span>);"
	},
	{
		"linetupleid" : 2232,
		"leftlines" : "return errors.hasErrors() ?  <span class=\'token del\' >  <span class=\'token mv\' > errors</span>.makeImmutable()</span> : result;",
		"rightlines" : "return  <span class=\'token add\' >  <span class=\'token mv\' > errors</span></span>.hasErrors() ? errors : result;"
	},
	{
		"linetupleid" : 2266,
		"leftlines" : "throw  <span class=\'token del\' >  <span class=\'token mv\' > errors</span>.withSource(type)</span>.errorInProvider(e).toException();",
		"rightlines" : "throw  <span class=\'token add\' >  <span class=\'token mv\' > errors</span></span>.errorInProvider(e).toException();"
	},
	{
		"linetupleid" : 2269,
		"leftlines" : "Errors errorsForMember = injectionPoint.isOptional() ? new Errors(injectionPoint) :  <span class=\'token del\' >  <span class=\'token mv\' > errors</span></span>;",
		"rightlines" : "Errors errorsForMember = injectionPoint.isOptional() ? new Errors(injectionPoint) :  <span class=\'token add\' >  <span class=\'token mv\' > errors</span>.withSource(injectionPoint)</span>;"
	},
	{
		"linetupleid" : 6257,
		"leftlines" : null,
		"rightlines" : null
	},
	{
		"linetupleid" : 97475,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token mv\' > optional</span></span>) ",
		"rightlines" : "if (! <span class=\'token add\' > pluginDepends. <span class=\'token mv\' > optional</span></span>) "
	},
	{
		"linetupleid" : 2356,
		"leftlines" : "synchronized ( <span class=\'token del\' > jitBindings</span>) ",
		"rightlines" : "synchronized ( <span class=\'token add\' > state.lock()</span>) "
	},
	{
		"linetupleid" : 2369,
		"leftlines" : "for (M member : factory.getMembers( <span class=\'token del\' >  <span class=\'token mv\' > typeResolver</span></span>.getRawType())) ",
		"rightlines" : "for (M member : factory.getMembers( <span class=\'token add\' > MoreTypes</span>.getRawType( <span class=\'token add\' >  <span class=\'token mv\' > typeResolver</span>.getType()</span>))) "
	},
	{
		"linetupleid" : 2370,
		"leftlines" : "this. <span class=\'token del\' > typeResolver</span> =  <span class=\'token del\' > new TypeResolver(this. <span class=\'token mv\' > delegate</span>. <span class=\'token mv\' > getClass</span>())</span>;",
		"rightlines" : "this. <span class=\'token add\' > typeLiteral</span> =  <span class=\'token add\' > TypeLiteral.get(this. <span class=\'token mv\' > delegate</span>. <span class=\'token mv\' > getClass</span>())</span>;"
	},
	{
		"linetupleid" : 6274,
		"leftlines" : "tableHeader(new String[]  <span class=\'token del\' > { \"Name\", \"Subscribe\", \"Unsubscribe\", \"Post\", \"Archive\", \"Other Archives\" }</span>);",
		"rightlines" : "tableHeader(new String[]  <span class=\'token add\' > { name, subscribe, unsubscribe, post, archive, archivesOther }</span>);"
	},
	{
		"linetupleid" : 63222,
		"leftlines" : "this.constant =  <span class=\'token del\' > field != null ? FieldReference.getConstantFor((FieldBinding) binding, this, false, scope) :  <span class=\'token mv\' > ((VariableBinding) binding).constant()</span></span>;",
		"rightlines" : "this.constant =  <span class=\'token add\' >  <span class=\'token mv\' > ((VariableBinding) binding).constant()</span></span>;"
	},
	{
		"linetupleid" : 91384,
		"leftlines" : " <span class=\'token del\' > super</span>(s);",
		"rightlines" : " <span class=\'token add\' > this</span>(s);"
	},
	{
		"linetupleid" : 91389,
		"leftlines" : " <span class=\'token del\' > super();</span>",
		"rightlines" : " <span class=\'token add\' > this(\"\");</span>"
	},
	{
		"linetupleid" : 49184,
		"leftlines" : " <span class=\'token del\' > super</span>(TYPE_REF_PATTERN, matchRule);",
		"rightlines" : " <span class=\'token add\' > this</span>(matchRule);"
	},
	{
		"linetupleid" : 11760,
		"leftlines" : "for (Dependency d1 :  <span class=\'token del\' >  <span class=\'token mv\' > c</span>.getDependencies()</span>) ",
		"rightlines" : "for (Dependency d1 :  <span class=\'token add\' >  <span class=\'token mv\' > c</span></span>) "
	},
	{
		"linetupleid" : 45291,
		"leftlines" : " catch (JavaModelException  <span class=\'token del\' > npe</span>) ",
		"rightlines" : " catch (JavaModelException  <span class=\'token add\' > e</span>) "
	},
	{
		"linetupleid" : 2385,
		"leftlines" : "private  <span class=\'token del\' >  <span class=\'token mv\' > List</span><Type></span> resolveAll(Type[] types)",
		"rightlines" : "private  <span class=\'token add\' >  <span class=\'token mv\' > List</span><TypeLiteral<?>></span> resolveAll(Type[] types)"
	},
	{
		"linetupleid" : 2401,
		"leftlines" : "@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>)  <span class=\'token del\' > TypeLiteral.get( <span class=\'token mv\' > typeLiteral.getReturnType(method)</span>)</span>;",
		"rightlines" : "@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>)  <span class=\'token add\' >  <span class=\'token mv\' > typeLiteral.getReturnType(method)</span></span>;"
	},
	{
		"linetupleid" : 98720,
		"leftlines" : "ring = new  <span class=\'token del\' >  <span class=\'token mv\' > UndoManager</span>.Remove</span>[newSize];",
		"rightlines" : "ring = new  <span class=\'token add\' >  <span class=\'token mv\' > UndoManager</span>.RemovedContent</span>[newSize];"
	},
	{
		"linetupleid" : 38112,
		"leftlines" : "return (flags &  <span class=\'token del\' > IConstants. <span class=\'token mv\' > AccPublic</span></span>) != 0;",
		"rightlines" : "return (flags &  <span class=\'token add\' >  <span class=\'token mv\' > AccPublic</span></span>) != 0;"
	},
	{
		"linetupleid" : 2421,
		"leftlines" : "",
		"rightlines" : ""
	},
	{
		"linetupleid" : 2422,
		"leftlines" : "public ScopedBindingBuilder visitKey(Key<? extends T>  <span class=\'token del\' > key</span>)",
		"rightlines" : "public ScopedBindingBuilder visitKey(Key<? extends T>  <span class=\'token add\' > targetKey</span>)"
	},
	{
		"linetupleid" : 2463,
		"leftlines" : "if ((stage == Stage.PRODUCTION && binding.getScope() ==  <span class=\'token del\' > com.google.inject. <span class=\'token mv\' > Scopes</span></span>.SINGLETON) || binding.getLoadStrategy() == LoadStrategy.EAGER) ",
		"rightlines" : "if ((stage == Stage.PRODUCTION && binding.getScope() ==  <span class=\'token add\' >  <span class=\'token mv\' > Scopes</span></span>.SINGLETON) || binding.getLoadStrategy() == LoadStrategy.EAGER) "
	},
	{
		"linetupleid" : 55637,
		"leftlines" : " while ( <span class=\'token del\' >  <span class=\'token mv\' > this.scanner.token != BindingKeyScanner.END</span></span>);",
		"rightlines" : " while ( <span class=\'token add\' >  <span class=\'token mv\' > this.scanner.token != BindingKeyScanner.END</span> && !this.scanner.isAtTypeParameterStart()</span>);"
	},
	{
		"linetupleid" : 55638,
		"leftlines" : "return  <span class=\'token del\' > this. <span class=\'token mv\' > index</span> == -1 || this. <span class=\'token mv\' > index</span> >= this. <span class=\'token mv\' > source</span>.length - 1 || this. <span class=\'token mv\' > source</span>[this. <span class=\'token mv\' > index</span>] ==  <span class=\'token mv\' > \'</span>, <span class=\'token mv\' > \'</span></span> ||  <span class=\'token del\' > this.source[this.index]</span> == \' <span class=\'token del\' > (</span>\';",
		"rightlines" : "return  <span class=\'token add\' > this. <span class=\'token mv\' > index</span> == -1 || this. <span class=\'token mv\' > index</span> >= this. <span class=\'token mv\' > source</span>.length - 1 || (currentChar = this. <span class=\'token mv\' > source</span>[this. <span class=\'token mv\' > index</span>]) ==  <span class=\'token mv\' > \'</span>, <span class=\'token mv\' > \'</span> || currentChar ==  <span class=\'token mv\' > \'</span>( <span class=\'token mv\' > \'</span></span> ||  <span class=\'token add\' > currentChar</span> == \' <span class=\'token add\' > <</span>\';"
	},
	{
		"linetupleid" : 2468,
		"leftlines" : null,
		"rightlines" : null
	},
	{
		"linetupleid" : 98753,
		"leftlines" : "String[]  <span class=\'token del\' > perspectives = getSavedPerspectiveFiles()</span>;",
		"rightlines" : "String[]  <span class=\'token add\' > layouts = getSavedLayouts()</span>;"
	},
	{
		"linetupleid" : 6310,
		"leftlines" : "System.out.println(\"Maven  <span class=\'token del\' >  <span class=\'token mv\' > version</span></span>: \" + version);",
		"rightlines" : "System.out.println(\"Maven version: \" +  <span class=\'token add\' > properties.getProperty(\" <span class=\'token mv\' > version</span>\", \"unknown\")</span>);"
	},
	{
		"linetupleid" : 2480,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token del\' >  <span class=\'token mv\' > filterChain</span>.doFilter( <span class=\'token mv\' > servletRequest</span>,  <span class=\'token mv\' > servletResponse</span>)</span></span>;",
		"rightlines" : " <span class=\'token add\' >  <span class=\'token add\' > filterPipeline.dispatch( <span class=\'token mv\' > servletRequest</span>,  <span class=\'token mv\' > servletResponse</span>,  <span class=\'token mv\' > filterChain</span>)</span></span>;"
	},
	{
		"linetupleid" : 95591,
		"leftlines" : "primValue =  <span class=\'token del\' >  <span class=\'token del\' > BSHCastExpression.castPrimitive( <span class=\'token mv\' > primValue</span>,  <span class=\'token mv\' > baseType</span>)</span></span>;",
		"rightlines" : "primValue =  <span class=\'token add\' >  <span class=\'token add\' >  <span class=\'token mv\' > primValue</span>.castToType( <span class=\'token mv\' > baseType</span>, Types.CAST)</span></span>;"
	},
	{
		"linetupleid" : 95638,
		"leftlines" : "This ths =  <span class=\'token del\' >  <span class=\'token mv\' > thisNameSpace</span>.getSuper()</span>. <span class=\'token del\' > getThis</span>(interpreter);",
		"rightlines" : "This ths =  <span class=\'token add\' >  <span class=\'token mv\' > thisNameSpace</span></span>. <span class=\'token add\' > getSuper</span>(interpreter);"
	},
	{
		"linetupleid" : 2488,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > GuiceFilter.pipeline</span>.get()</span> instanceof ManagedFilterPipeline) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > GuiceFilter.pipeline</span></span> instanceof ManagedFilterPipeline) "
	},
	{
		"linetupleid" : 2508,
		"leftlines" : "static <T> InternalFactory<? extends T> scope(Key<T> key, InjectorImpl injector, InternalFactory<? extends T> creator,  <span class=\'token del\' > Scope scope</span>)",
		"rightlines" : "static <T> InternalFactory<? extends T> scope(Key<T> key, InjectorImpl injector, InternalFactory<? extends T> creator,  <span class=\'token add\' > Scoping scoping</span>)"
	},
	{
		"linetupleid" : 2533,
		"leftlines" : "constructorInjector = (ConstructorInjector<T>)  <span class=\'token del\' > injector</span>.constructors.get(implementation, errors);",
		"rightlines" : "constructorInjector = (ConstructorInjector<T>)  <span class=\'token add\' > injectorImpl</span>.constructors.get(implementation, errors);"
	},
	{
		"linetupleid" : 2537,
		"leftlines" : "return new LinkedBindingImpl<T>(this, key, rawType, Scopes.<T> <span class=\'token del\' > scope</span>(key, this, internalFactory, scope), scope, targetKey, loadStrategy);",
		"rightlines" : "return new LinkedBindingImpl<T>(this, key, rawType, Scopes.<T>scope(key, this, internalFactory,  <span class=\'token add\' > scoping</span>),  <span class=\'token add\' > scoping</span>, targetKey);"
	},
	{
		"linetupleid" : 99957,
		"leftlines" : "if (! <span class=\'token del\' >  <span class=\'token mv\' > c1</span>.accessable</span> || ! <span class=\'token del\' >  <span class=\'token mv\' > c2</span>.accessable</span>) ",
		"rightlines" : "if (! <span class=\'token add\' >  <span class=\'token mv\' > c1</span>.isAccessible()</span> || ! <span class=\'token add\' >  <span class=\'token mv\' > c2</span>.isAccessible()</span>) "
	},
	{
		"linetupleid" : 2554,
		"leftlines" : "staticInjections.add(new StaticInjection(injector, command.getSource(), command.getType()));",
		"rightlines" : "staticInjections.add(new StaticInjection(injector,  <span class=\'token add\' > request</span>));"
	},
	{
		"linetupleid" : 91447,
		"leftlines" : "popup = new  <span class=\'token del\' > BrowserPopupMenu</span>(VFSBrowser.this, null);",
		"rightlines" : "popup = new  <span class=\'token add\' > BrowserCommandsMenu</span>(VFSBrowser.this, null);"
	},
	{
		"linetupleid" : 2604,
		"leftlines" : " <span class=\'token del\' > PrivateEnvironmentProcessor</span> processor = new  <span class=\'token del\' > PrivateEnvironmentProcessor</span>(errors, stage);",
		"rightlines" : " <span class=\'token add\' > PrivateElementProcessor</span> processor = new  <span class=\'token add\' > PrivateElementProcessor</span>(errors, stage);"
	},
	{
		"linetupleid" : 95704,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > buffer.isNewFile()</span> && !autosave</span>) ",
		"rightlines" : "if ( <span class=\'token add\' >  <span class=\'token mv\' > buffer.isNewFile()</span></span>) "
	},
	{
		"linetupleid" : 15491,
		"leftlines" : "String LS = System.getProperty(\"line.separator\");",
		"rightlines" : " <span class=\'token add\' > final</span> String LS = System.getProperty(\"line.separator\");"
	},
	{
		"linetupleid" : 2626,
		"leftlines" : " <span class=\'token del\' > newClassImplementationNode</span>( <span class=\'token del\' >  <span class=\'token mv\' > binding</span></span>, binding. <span class=\'token del\' > getInjectionPoints</span>());",
		"rightlines" : " <span class=\'token add\' > newDependencyEdges</span>( <span class=\'token add\' > getClassNodeId( <span class=\'token mv\' > binding</span>)</span>,  <span class=\'token add\' > node</span>, binding. <span class=\'token add\' > getDependencies</span>());"
	},
	{
		"linetupleid" : 36269,
		"leftlines" : "for ( <span class=\'token del\' > Enumeration</span>  <span class=\'token del\' > e</span> = jInfo.fEntryNames. <span class=\'token del\' > elements</span>();  <span class=\'token del\' > e.hasMoreElements()</span>; ) ",
		"rightlines" : "for ( <span class=\'token add\' > Iterator</span>  <span class=\'token add\' > iter</span> = jInfo.fEntryNames. <span class=\'token add\' > iterator</span>();  <span class=\'token add\' > iter.hasNext()</span>; ) "
	},
	{
		"linetupleid" : 36398,
		"leftlines" : " <span class=\'token del\' > Enumeration</span>  <span class=\'token del\' > e</span> = fFilesToBeDeleted. <span class=\'token del\' > elements</span>();",
		"rightlines" : " <span class=\'token add\' > Iterator</span>  <span class=\'token add\' > iter</span> = fFilesToBeDeleted. <span class=\'token add\' > iterator</span>();"
	},
	{
		"linetupleid" : 63327,
		"leftlines" : " <span class=\'token del\' >  <span class=\'token mv\' > cmd</span>.createArgument()</span>. <span class=\'token del\' > setPath</span>(classpath);",
		"rightlines" : " <span class=\'token add\' > createClasspathArgument</span>( <span class=\'token add\' >  <span class=\'token mv\' > cmd</span></span>, classpath);"
	},
	{
		"linetupleid" : 13830,
		"leftlines" : "for ( <span class=\'token del\' >  <span class=\'token mv\' > Iterator</span></span> iter = iterator(); iter.hasNext(); ) ",
		"rightlines" : "for ( <span class=\'token add\' >  <span class=\'token mv\' > Iterator</span><Item></span> iter = iterator(); iter.hasNext(); ) "
	},
	{
		"linetupleid" : 13832,
		"leftlines" : "return items.compareTo( <span class=\'token del\' > ((ComparableVersion)  <span class=\'token mv\' > o</span>)</span>.items);",
		"rightlines" : "return items.compareTo( <span class=\'token add\' >  <span class=\'token mv\' > o</span></span>.items);"
	},
	{
		"linetupleid" : 91524,
		"leftlines" : null,
		"rightlines" : null
	},
	{
		"linetupleid" : 36470,
		"leftlines" : "for ( <span class=\'token del\' > Enumeration e =  <span class=\'token mv\' > paths</span>.keys()</span>;  <span class=\'token del\' > e.hasMoreElements()</span>; ) ",
		"rightlines" : "for ( <span class=\'token add\' > Iterator iter =  <span class=\'token mv\' > paths</span>.keySet().iterator()</span>;  <span class=\'token add\' > iter.hasNext()</span>; ) "
	},
	{
		"linetupleid" : 11843,
		"leftlines" : "if ( <span class=\'token del\' >  <span class=\'token mv\' > source</span>. <span class=\'token mv\' > getArtifactId</span>() != null && ( <span class=\'token mv\' > targetDependency</span>. <span class=\'token mv\' > getArtifactId</span>() == null || !isParent)</span>) ",
		"rightlines" : "if ( <span class=\'token add\' > isMatch( <span class=\'token mv\' > source</span>. <span class=\'token mv\' > getArtifactId</span>(),  <span class=\'token mv\' > targetDependency</span>. <span class=\'token mv\' > getArtifactId</span>(), isDependencyManagement)</span>) "
	}
]
