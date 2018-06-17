var data2 = [
	{
		"id" : 1061,
		"linetupleid" : 1128,
		"linenumber" : 145,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "RealMapBinder<K, V> realMapBinder = new RealMapBinder<K, V>(mapKey, valueKey, keyMultibinder, valueMultibinder);]RealMapBinder<K, V> mapBinder = new RealMapBinder<K, V>(binder, valueType, mapKey, providerMapKey, entrySetBinder);",
		"parententity" : "METHOD",
		"parententitysig" : "com.google.inject.multibindings.MapBinder.newMapBinder(Binder,Key<Map<K, V>>,Key<Map<K, Provider<V>>>,Multibinder<K>,Multibinder<V>)",
		"rootentity" : "com.google.inject.multibindings.MapBinder.newMapBinder(Binder,Type,Key<Map<K, V>>,Key<Map<K, Provider<V>>>,Multibinder<Entry<K, Provider<V>>>)"
	},
	{
		"id" : 1519,
		"linetupleid" : 1608,
		"linenumber" : 134,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "addMessage(StringLiteralConcatenation{\"Error converting \\\'%s\\\' to  %s. \"+\n\"More than one type converter can apply: %s, and %s. \"+\n\"Please adjust your type converter configuration to avoid  overlapping matches.\"+\n}, stringValue, type, matchingConverter, converter);]addMessage(StringLiteralConcatenation{\"Multiple converters can convert \\\'%s\\\' (bound at %s) to %s:%n\"+\n\" %s and%n\"+\n\" %s.%n\"+\n\" Please adjust your type converter configuration to avoid overlapping matches.\"+\n}, stringValue, source, type, a, b);",
		"parententity" : "METHOD",
		"parententitysig" : "com.google.inject.internal.Errors.ambiguousTypeConversion(String,TypeLiteral<?>,MatcherAndConverter<?>,MatcherAndConverter<?>)",
		"rootentity" : "com.google.inject.internal.Errors.ambiguousTypeConversion(String,Object,TypeLiteral<?>,MatcherAndConverter<?>,MatcherAndConverter<?>)"
	},
	{
		"id" : 2331,
		"linetupleid" : 2469,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "newMapBinder(binder, valueType, Key.get(MapBinder.<K, V>mapOf(keyType, valueType), annotation), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType), annotation), Multibinder.<Entry<K, Provider<V>>>newSetBinder(binder, entryOfProviderOf(keyType, valueType), annotation));]newMapBinder(binder, valueType, Key.get(mapOf(keyType, valueType), annotation), Key.get(mapOfProviderOf(keyType, valueType), annotation), Multibinder.newSetBinder(binder, entryOfProviderOf(keyType, valueType), annotation));",
		"parententity" : "METHOD",
		"parententitysig" : "com.google.inject.multibindings.MapBinder.newMapBinder(Binder,Type,Type,Annotation)",
		"rootentity" : "com.google.inject.multibindings.MapBinder.newMapBinder(Binder,TypeLiteral<K>,TypeLiteral<V>,Annotation)"
	},
	{
		"id" : 6716,
		"linetupleid" : 6629,
		"linenumber" : 326,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((artifact.getGroupId().equals(dependency.getGroupId()) && artifact.getArtifactId().equals(dependency.getArtifactId())) && artifact.getBaseVersion().equals(dependency.getVersion())) && artifact.getType().equals(dependency.getType()))",
		"parententity" : "FOR_STATEMENT",
		"parententitysig" : "j.hasNext()",
		"rootentity" : "org.apache.maven.plugin.release.PrepareReleaseMojo.transformPomToReleaseVersionPom()"
	},
	{
		"id" : 6993,
		"linetupleid" : 6888,
		"linenumber" : 166,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "StringBuffer javascript = new StringBuffer(\"function offsetDate(id, offset) {\").append(\"var now = new Date() ;\").append(\"var nowTime = now.getTime() ;\").append(\"var localOffset = now.getTimezoneOffset() ;\").append(\"var developerTime = nowTime + ( offset * 60 * 60 * 1000 ) + ( localOffset * 60 * 1000 ) ;\").append(\"var developerDate = new Date(developerTime) ;\").append(\"\").append(\"document.getElementById(id).innerHTML = developerDate;\").append(\"}\").append(\"\").append(\"function init(){\");]StringBuffer javascript = new StringBuffer(\"function offsetDate(id, offset) {\\n\").append(\"    var now = new Date();\\n\").append(\"    var nowTime = now.getTime();\\n\").append(\"    var localOffset = now.getTimezoneOffset();\\n\").append(\"    var developerTime = nowTime + ( offset * 60 * 60 * 1000 ) + ( localOffset * 60 * 1000 );\\n\").append(\"    var developerDate = new Date(developerTime);\\n\").append(\"\\n\").append(\"    document.getElementById(id).innerHTML = developerDate;\\n\").append(\"}\\n\").append(\"\\n\").append(\"function init(){\\n\");",
		"parententity" : "METHOD",
		"parententitysig" : "org.apache.maven.report.projectinfo.TeamListReport.TeamListRenderer.renderBody()",
		"rootentity" : "org.apache.maven.report.projectinfo.TeamListReport.TeamListRenderer.renderBody()"
	},
	{
		"id" : 9428,
		"linetupleid" : 9156,
		"linenumber" : 278,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ModelReader p = retrievePom(parentGroupId, parentArtifactId, parentVersion, inheritedScope, false, excluded, Collections.EMPTY_LIST);]Model p = ProjectResolver.retrievePom(resolver, model.getParentGroupId(), model.getParentArtifactId(), model.getParentVersion(), inheritedScope, false, excluded, model.getChain());",
		"parententity" : "THEN_STATEMENT",
		"parententitysig" : "rawName.equals(\"parent\")",
		"rootentity" : "org.apache.maven.bootstrap.model.ModelReader.endElement(String,String,String)"
	},
	{
		"id" : 12222,
		"linetupleid" : 11739,
		"linenumber" : 148,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "artifactFactory.createDependencyArtifact(groupId, artifactId, versionRange, type, classifier, scope, inheritedScope);]artifactFactory.createDependencyArtifact(d.getGroupId(), d.getArtifactId(), versionRange, d.getType(), d.getClassifier(), d.getScope());",
		"parententity" : "METHOD",
		"parententitysig" : "org.apache.maven.repository.LegacyMavenRepositorySystem.createDependencyArtifact(String,String,String,String,String,String,String)",
		"rootentity" : "org.apache.maven.repository.LegacyMavenRepositorySystem.createDependencyArtifact(Dependency)"
	},
	{
		"id" : 15668,
		"linetupleid" : 14884,
		"linenumber" : 316,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "DependencyNode root = pluginDependenciesResolver.resolve(plugin, RepositoryUtils.toArtifact(pluginArtifact), dependencyFilter, project.getRemotePluginRepositories(), session.getRepositorySession());",
		"parententity" : "METHOD",
		"parententitysig" : "org.apache.maven.plugin.internal.DefaultMavenPluginManager.createPluginRealm(PluginDescriptor,MavenSession,ClassLoader,List<String>,ArtifactFilter)",
		"rootentity" : "org.apache.maven.plugin.internal.DefaultMavenPluginManager.createPluginRealm(PluginDescriptor,MavenSession,ClassLoader,List<String>,DependencyFilter)"
	},
	{
		"id" : 54844,
		"linetupleid" : 50840,
		"linenumber" : 100,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((((((c1 = Character.getNumericValue(source[(currentPosition ++)])) > 15) || (c1 < 0)) || (((c2 = Character.getNumericValue(source[(currentPosition ++)])) > 15) || (c2 < 0))) || (((c3 = Character.getNumericValue(source[(currentPosition ++)])) > 15) || (c3 < 0))) || (((c4 = Character.getNumericValue(source[(currentPosition ++)])) > 15) || (c4 < 0)))]((((((c1 = Character.getNumericValue(this.source[(this.currentPosition ++)])) > 15) || (c1 < 0)) || (((c2 = Character.getNumericValue(this.source[(this.currentPosition ++)])) > 15) || (c2 < 0))) || (((c3 = Character.getNumericValue(this.source[(this.currentPosition ++)])) > 15) || (c3 < 0))) || (((c4 = Character.getNumericValue(this.source[(this.currentPosition ++)])) > 15) || (c4 < 0)))",
		"parententity" : "THEN_STATEMENT",
		"parententitysig" : "(((currentCharacter = source[(currentPosition ++)]) == \'\\\\\') && (source[currentPosition] == \'u\'))",
		"rootentity" : "org.eclipse.jdt.internal.codeassist.complete.CompletionScanner.getNextCharAsJavaIdentifierPart()"
	},
	{
		"id" : 80562,
		"linetupleid" : 74642,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((((((((((((((((((source.length == 20) && (source[0] == \'9\')) && (source[1] == \'2\')) && (source[2] == \'2\')) && (source[3] == \'3\')) && (source[4] == \'3\')) && (source[5] == \'7\')) && (source[6] == \'2\')) && (source[7] == \'0\')) && (source[8] == \'3\')) && (source[9] == \'6\')) && (source[10] == \'8\')) && (source[11] == \'5\')) && (source[12] == \'4\')) && (source[13] == \'7\')) && (source[14] == \'7\')) && (source[15] == \'5\')) && (source[16] == \'8\')) && (source[17] == \'0\')) && (source[18] == \'8\')) && (((this.bits & ASTNode.ParenthesizedMASK) >> ASTNode.ParenthesizedSHIFT) == 0));](((((((((((((((((((((this.source.length == 20) && (this.source[0] == \'9\')) && (this.source[1] == \'2\')) && (this.source[2] == \'2\')) && (this.source[3] == \'3\')) && (this.source[4] == \'3\')) && (this.source[5] == \'7\')) && (this.source[6] == \'2\')) && (this.source[7] == \'0\')) && (this.source[8] == \'3\')) && (this.source[9] == \'6\')) && (this.source[10] == \'8\')) && (this.source[11] == \'5\')) && (this.source[12] == \'4\')) && (this.source[13] == \'7\')) && (this.source[14] == \'7\')) && (this.source[15] == \'5\')) && (this.source[16] == \'8\')) && (this.source[17] == \'0\')) && (this.source[18] == \'8\')) && (((this.bits & ASTNode.ParenthesizedMASK) >> ASTNode.ParenthesizedSHIFT) == 0));",
		"parententity" : "METHOD",
		"parententitysig" : "org.eclipse.jdt.internal.compiler.ast.LongLiteral.mayRepresentMIN_VALUE()",
		"rootentity" : "org.eclipse.jdt.internal.compiler.ast.LongLiteral.mayRepresentMIN_VALUE()"
	},
	{
		"id" : 85927,
		"linetupleid" : 79999,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.requestor.acceptMethod(((proposal.getDeclarationPackageName() == null) ? CharOperation.NO_CHAR : proposal.getDeclarationPackageName()), ((proposal.getDeclarationTypeName() == null) ? CharOperation.NO_CHAR : proposal.getDeclarationTypeName()), proposal.getName(), ((proposal.getParameterPackageNames() == null) ? CharOperation.NO_CHAR_CHAR : proposal.getParameterPackageNames()), ((proposal.getParameterTypeNames() == null) ? CharOperation.NO_CHAR_CHAR : proposal.getParameterTypeNames()), ((proposal.findParameterNames(null) == null) ? CharOperation.NO_CHAR_CHAR : proposal.findParameterNames(null)), ((proposal.getPackageName() == null) ? CharOperation.NO_CHAR : proposal.getPackageName()), ((proposal.getTypeName() == null) ? CharOperation.NO_CHAR : proposal.getTypeName()), proposal.getCompletion(), proposal.getFlags(), proposal.getReplaceStart(), proposal.getReplaceEnd(), proposal.getRelevance());]this.requestor.acceptMethod(((internalCompletionProposal.getDeclarationPackageName() == null) ? CharOperation.NO_CHAR : internalCompletionProposal.getDeclarationPackageName()), ((internalCompletionProposal.getDeclarationTypeName() == null) ? CharOperation.NO_CHAR : internalCompletionProposal.getDeclarationTypeName()), internalCompletionProposal.getName(), ((internalCompletionProposal.getParameterPackageNames() == null) ? CharOperation.NO_CHAR_CHAR : internalCompletionProposal.getParameterPackageNames()), ((internalCompletionProposal.getParameterTypeNames() == null) ? CharOperation.NO_CHAR_CHAR : internalCompletionProposal.getParameterTypeNames()), ((internalCompletionProposal.findParameterNames(null) == null) ? CharOperation.NO_CHAR_CHAR : internalCompletionProposal.findParameterNames(null)), ((internalCompletionProposal.getPackageName() == null) ? CharOperation.NO_CHAR : internalCompletionProposal.getPackageName()), ((internalCompletionProposal.getTypeName() == null) ? CharOperation.NO_CHAR : internalCompletionProposal.getTypeName()), internalCompletionProposal.getCompletion(), internalCompletionProposal.getFlags(), internalCompletionProposal.getReplaceStart(), internalCompletionProposal.getReplaceEnd(), internalCompletionProposal.getRelevance());",
		"parententity" : "ELSE_STATEMENT",
		"parententitysig" : "DECODE_SIGNATURE",
		"rootentity" : "org.eclipse.jdt.internal.codeassist.CompletionRequestorWrapper.accept(CompletionProposal)"
	},
	{
		"id" : 100141,
		"linetupleid" : 92505,
		"linenumber" : 170,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "lineSep.setPreferredSize(new Dimension(Math.max(Math.max((int) font.getStringBounds(\"U\", frc).getWidth(), (int) font.getStringBounds(\"W\", frc).getWidth()), (int) font.getStringBounds(\"M\", frc).getWidth()), dim.height));]lineSep.setPreferredSize(new Dimension(Math.max(Math.max(fm.charWidth(\'U\'), fm.charWidth(\'W\')), fm.charWidth(\'M\')), dim.height));",
		"parententity" : "METHOD",
		"parententitysig" : "org.gjt.sp.jedit.gui.StatusBar.propertiesChanged()",
		"rootentity" : "org.gjt.sp.jedit.gui.StatusBar.propertiesChanged()"
	},
	{
		"id" : 104748,
		"linetupleid" : 96568,
		"linenumber" : 460,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "rules.addRule(ParserRule.createRegexpSpanRule(lastHashChar, lastStartPosMatch, lastStart, lastEndPosMatch, lastEnd, lastDelegateSet, lastTokenID, lastExcludeMatch, lastNoLineBreak, lastNoWordBreak, lastIgnoreCase, lastNoEscape));]rules.addRule(ParserRule.createRegexpSpanRule(tag.lastHashChar, tag.lastStartPosMatch, tag.lastStart, tag.lastEndPosMatch, tag.lastEnd, tag.lastDelegateSet, tag.lastTokenID, tag.lastExcludeMatch, tag.lastNoLineBreak, tag.lastNoWordBreak, tag.lastIgnoreCase, tag.lastNoEscape));",
		"parententity" : "BODY",
		"parententitysig" : "",
		"rootentity" : "org.gjt.sp.jedit.syntax.XModeHandler.endElement(String,String,String)"
	}
]

